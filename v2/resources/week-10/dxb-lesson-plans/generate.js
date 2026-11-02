const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, VerticalAlign
} = require("docx");

const FONT = "Aptos";
const RED = "EE0000";
const ORANGE = "FFC000";
const BLUE = "0070C0";
const REVIEW_BLUE = "1155CC";
const HEADER_FILL = "E8E8E8";
const BLACK = "000000";

function noEm(s) {
  if (s == null) return s;
  return String(s).replace(/—/g, "-").replace(/–/g, "-");
}

function run(text, opts = {}) {
  return new TextRun({
    text: noEm(text),
    bold: !!opts.bold,
    italics: !!opts.italics,
    size: opts.size ?? 22,
    font: opts.font ?? FONT,
    color: opts.color ?? BLACK,
  });
}

function para(runsOrText, opts = {}) {
  const children = Array.isArray(runsOrText) ? runsOrText : [run(runsOrText, opts)];
  return new Paragraph({ children, spacing: { after: opts.after ?? 80 } });
}

function reviewPara(label, note) {
  return para(`[TO REVIEW - ${label}: ${note}]`, { color: REVIEW_BLUE, italics: true });
}

function suggestedPara(text) {
  return para(text, { color: REVIEW_BLUE });
}

function bulletLines(lines, opts = {}) {
  return lines.map(l => para("-  " + noEm(l), opts));
}

function labeledCell(text, opts = {}) {
  return new TableCell({
    width: { size: opts.width, type: WidthType.DXA },
    columnSpan: opts.span,
    shading: opts.fill ? { type: ShadingType.CLEAR, color: "auto", fill: opts.fill } : undefined,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    verticalAlign: VerticalAlign.CENTER,
    children: [para(text, { bold: true, size: opts.size ?? 22 })],
  });
}

function contentCell(children, opts = {}) {
  return new TableCell({
    width: { size: opts.width, type: WidthType.DXA },
    columnSpan: opts.span,
    shading: opts.fill ? { type: ShadingType.CLEAR, color: "auto", fill: opts.fill } : undefined,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: Array.isArray(children) ? children : [children],
  });
}

function borderedTable(rows, colWidths) {
  return new Table({
    width: { size: colWidths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    columnWidths: colWidths,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: "999999" },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: "999999" },
      left: { style: BorderStyle.SINGLE, size: 4, color: "999999" },
      right: { style: BorderStyle.SINGLE, size: 4, color: "999999" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "999999" },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "999999" },
    },
    rows,
  });
}

function headerInfoTable(d) {
  const W = [4698, 4508];
  return borderedTable([
    new TableRow({ children: [
      contentCell([para([run("Teacher Name: ", { bold: true }), run(d.teacherName)])], { width: W[0] }),
      contentCell([para([run("Class/Section:", { bold: true })]), reviewPara("Class/Section", "confirm section, e.g. 8A / 8B")], { width: W[1] }),
    ]}),
    new TableRow({ children: [
      contentCell([para([run("Subject:  ", { bold: true }), run(d.subject)])], { width: W[0] }),
      contentCell([para([run("Date:            Time: ", { bold: true })]), reviewPara("Date/Time", `add the exact class date and period; Week 10 runs ${d.weekDates}`)], { width: W[1] }),
    ]}),
    new TableRow({ children: [
      contentCell([para([run("Class Description: ", { bold: true })]), reviewPara("Class Description", "add class size, ability mix, and any IEP/EAL notes")], { width: W[0] + W[1], span: 2 }),
    ]}),
    new TableRow({ children: [
      contentCell([para([run("TA/LSA Role (if applicable): ", { bold: true })]), reviewPara("TA/LSA Role", "add if a TA/LSA supports this class and what their role is")], { width: W[0] + W[1], span: 2 }),
    ]}),
  ], W);
}

function diffGroupsTable() {
  const W = [2254, 2252, 2251, 2508];
  const total = W.reduce((a, b) => a + b, 0);
  return borderedTable([
    new TableRow({ children: [
      labeledCell("Differentiated Learning Groups (Data)", { width: total, span: 4, fill: HEADER_FILL }),
    ]}),
    new TableRow({ children: [
      labeledCell("Desert Fox", { width: W[0], fill: "00B0F0" }),
      labeledCell("Camel", { width: W[1], fill: "92D050" }),
      labeledCell("Oryx", { width: W[2], fill: "FFC000" }),
      labeledCell("Falcon", { width: W[3], fill: "FF0000" }),
    ]}),
    new TableRow({ children: [
      contentCell([reviewPara("Group roster", "add student names for this group")], { width: W[0] }),
      contentCell([reviewPara("Group roster", "add student names for this group")], { width: W[1] }),
      contentCell([reviewPara("Group roster", "add student names for this group")], { width: W[2] }),
      contentCell([reviewPara("Group roster", "add student names for this group")], { width: W[3] }),
    ]}),
  ], W);
}

function overviewRow(label, contentParas, W) {
  return new TableRow({ children: [
    labeledCell(label, { width: W[0] }),
    contentCell(contentParas, { width: W[1] + W[2], span: 2 }),
  ]});
}

function lessonOverviewTable(d) {
  const W = [2307, 2386, 4508];
  const total = W.reduce((a, b) => a + b, 0);
  return borderedTable([
    new TableRow({ children: [labeledCell("Lesson Overview", { width: total, span: 3, fill: HEADER_FILL })] }),
    overviewRow("Lesson Topic", [para(d.lessonTopic)], W),
    overviewRow("Standard(s)", [para(d.standard)], W),
    new TableRow({ children: [
      contentCell([
        para("Learning Objective(s) (WALT):", { bold: true }),
        ...bulletLines(d.walt),
      ], { width: W[0] + W[1], span: 2 }),
      contentCell([
        para("Success Criteria (WILF):", { bold: true }),
        ...bulletLines(d.wilf),
      ], { width: W[2] }),
    ]}),
    overviewRow("Literacy Strategies", d.literacyStrategies.map(l => para(l)), W),
    overviewRow("Assessment", [para(d.assessment)], W),
    overviewRow("Targeted Vocabulary", [para(d.vocabulary)], W),
    overviewRow("Skills", [suggestedPara(d.skills)], W),
    overviewRow("National Identity Integration", [para(d.nationalIdentity)], W),
    overviewRow("AI/Digital Learning", [para(d.aiDigitalLearning)], W),
  ], W);
}

function lessonStructureTable(d) {
  const W = [2141, 7198];
  const total = W.reduce((a, b) => a + b, 0);
  return borderedTable([
    new TableRow({ children: [labeledCell("Lesson Structure", { width: total, span: 2, fill: HEADER_FILL })] }),
    new TableRow({ children: [
      contentCell([para("Starter (Hook) ", { bold: true }), para("Engage and Ask"), para("(5-10 minutes)")], { width: W[0] }),
      contentCell([para(d.starter)], { width: W[1] }),
    ]}),
    new TableRow({ children: [
      contentCell([para("I Do ", { bold: true }), para("Direct Instruction / Model")], { width: W[0] }),
      contentCell(d.iDo.map(l => para(l)), { width: W[1] }),
    ]}),
    new TableRow({ children: [
      contentCell([para("We Do ", { bold: true }), para("Guided Practice")], { width: W[0] }),
      contentCell(d.weDo.map(l => para(l)), { width: W[1] }),
    ]}),
    new TableRow({ children: [
      contentCell([para("You Do ", { bold: true }), para("Independent Practice")], { width: W[0] }),
      contentCell(d.youDo.map(l => para(l)), { width: W[1] }),
    ]}),
    new TableRow({ children: [
      contentCell([
        para("Differentiated", { bold: true }),
        para("Instruction:", { bold: true }),
        para([
          run("Beginning ", { bold: true, size: 16, color: RED }),
          run("/ ", { bold: true, size: 16 }),
          run("On", { bold: true, size: 16, color: ORANGE }),
          run(" /", { bold: true, size: 16 }),
          run(" ", { bold: true }),
          run("Above", { bold: true, size: 16, color: BLUE }),
        ]),
      ], { width: W[0] }),
      contentCell([
        para([run("Beginning: ", { bold: true, size: 15, color: RED }), run(d.diffBeginning)]),
        para([run("On: ", { bold: true, size: 15, color: ORANGE }), run(d.diffOn)]),
        para([run("Above: ", { bold: true, size: 15, color: BLUE }), run(d.diffAbove)]),
      ], { width: W[1] }),
    ]}),
    new TableRow({ children: [
      contentCell([para("Closure/Reflection", { bold: true }), para(" (5-10 minutes)")], { width: W[0] }),
      contentCell([para(d.closure)], { width: W[1] }),
    ]}),
  ], W);
}

function inclusivePlanningTable(d) {
  const W = [9346];
  return borderedTable([
    new TableRow({ children: [labeledCell("Inclusive Planning", { width: W[0], fill: HEADER_FILL, size: 22 })] }),
    new TableRow({ children: [contentCell([para(d.inclusivePlanning)], { width: W[0] })] }),
  ], W);
}

function buildLessonPlan(d) {
  const children = [
    para("Lesson Plan", { bold: true, size: 40, after: 200 }),
    headerInfoTable(d),
    para("", { after: 160 }),
    diffGroupsTable(),
    para("", { after: 160 }),
    lessonOverviewTable(d),
    para("", { after: 160 }),
    lessonStructureTable(d),
    para("", { after: 160 }),
    inclusivePlanningTable(d),
  ];
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
        },
      },
      children,
    }],
  });
  Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync(d.filename, buf);
    console.log("Saved", d.filename);
  });
}
// ============================================================
// Shared week-level facts (from v2 Week 10 Planner + v2/data/week10.js)
// Week 9 was MAP testing, so the original Week 9 lessons are taught this week.
// ============================================================
const WEEK_DATES = "Nov 2 - Nov 6 (Week 10)";

const COMMON = {
  teacherName: "Arwa Abboud",
  subject: "ICT/Design (Grade 8)",
  weekDates: WEEK_DATES,
};

// ============================================================
// LESSON 1 - Drawing in Game Lab (Code.org 3b Lesson 3)
// ============================================================
buildLessonPlan({
  ...COMMON,
  filename: "G8W10L1 - DXB Lesson Plan.docx",
  lessonTopic: "Drawing in Game Lab (Term 1, Week 10, Lesson 1) - Code.org CSD 2026 Unit 3b, Lesson 3: Drawing in Game Lab",
  standard: "CS.MS.3.3: Programs can combine control structures, including nested loops and compound conditionals, to solve complex problems. (Evidence Outcome c: Systematically test and refine programs using a range of test cases.)",
  walt: ["To use ordered code commands to draw shapes in Game Lab."],
  wilf: [
    "My shapes appear in the right place and order.",
    "I found and fixed at least one bug.",
  ],
  literacyStrategies: ["Predict-then-run: reading code and predicting the drawing before running it; explaining a fixed bug to a partner."],
  assessment: "Formative, informal - Code.org progress + screenshot of a programmed picture with at least three shapes.",
  vocabulary: "Sequence, Program, Bug, Debugging",
  skills: "Reading and predicting code; sequencing instructions; testing and debugging.",
  nationalIdentity: "UAE National Programme for Coders - the UAE is building a large community of programmers to shape its digital future; today students write their first drawing code in Game Lab.",
  aiDigitalLearning: "Code.org Game Lab online levels and videos; no AI tools - students write and debug their own code.",
  starter: "'How could you tell a computer to draw a face?' Students share ideas about which parts to draw first and where.",
  iDo: [
    "Watch the Drawing in Game Lab video and tour the Game Lab workspace.",
    "Model rect(), ellipse() and fill(), and show that shapes drawn later appear on top of earlier ones.",
  ],
  weDo: [
    "Frayer Model for Sequence.",
    "Predict, then run: read short programs together, predict the drawing, run them, and discuss what changes if two lines are swapped.",
  ],
  youDo: [
    "Students complete the Code.org 3b Lesson 3 Game Lab levels.",
    "Students code a picture with at least three shapes and fill() colours, fix any order or placement bugs, and take a screenshot.",
  ],
  diffBeginning: "Starter code annotated together before independent practice; core levels only",
  diffOn: "Complete the core levels independently and code a picture with three or more shapes",
  diffAbove: "Add comments explaining what each command does; try the challenge levels",
  closure: "Screenshot your picture with at least three shapes and tell a partner about one bug you fixed.",
  inclusivePlanning: "Visual supports (Code.org videos and slides), pre-taught vocabulary and a modelled example for students needing extra support, per this week's Inclusion/EAL plan. Extension/challenge task for confident students: commented code and challenge levels.",
});

// ============================================================
// LESSON 2 - Shapes and Parameters (Code.org 3b Lesson 4)
// ============================================================
buildLessonPlan({
  ...COMMON,
  filename: "G8W10L2 - DXB Lesson Plan.docx",
  lessonTopic: "Shapes and Parameters (Term 1, Week 10, Lesson 2) - Code.org CSD 2026 Unit 3b, Lesson 4: Shapes and Parameters",
  standard: "CS.MS.1.1: Complex problems can be broken into smaller parts to facilitate program implementation and review processes. (Evidence Outcome a: Decompose problems and subproblems into parts to facilitate the design, implementation, and review of programs.)",
  walt: ["To use parameters to control the position, size and appearance of shapes."],
  wilf: [
    "I can explain what each parameter controls.",
    "Changing parameters improved my design.",
  ],
  literacyStrategies: [
    "Literacy Strategy: Frayer Model (on 'Parameter')",
    "Annotating code: labelling what each parameter controls in one line of code.",
  ],
  assessment: "Formal Week 10 formative - annotated code sample: students label what each parameter controls (x, y, width, height).",
  vocabulary: "Parameter, Background",
  skills: "Using precise numerical values; connecting code to coordinates; explaining code in writing.",
  nationalIdentity: "UAE architecture and precision - landmarks like the Burj Khalifa depend on exact sizes and positions; parameters let students give the computer exact sizes and positions too.",
  aiDigitalLearning: "Code.org Game Lab online levels; no AI tools - students write and annotate their own code.",
  starter: "Show two ellipses of different sizes. 'What extra information did the computer need to draw these?'",
  iDo: [
    "Connect different-sized shapes to the need for more inputs: parameters.",
    "Model ellipse(x, y, width, height), rect(x, y, width, height) and background().",
  ],
  weDo: [
    "Frayer Model for Parameter.",
    "Label each number in ellipse(200, 150, 120, 80) together: which is x, y, width and height?",
  ],
  youDo: [
    "Students complete the Code.org 3b Lesson 4 Game Lab levels.",
    "Students create a geometric scene with accurate size and placement, then label what each parameter controls in one line of their code.",
  ],
  diffBeginning: "Colour-coded parameter cards and guided examples",
  diffOn: "Create the scene and annotate it independently",
  diffAbove: "Create a repeated design pattern using several shapes and precise parameters",
  closure: "Submit the annotated code sample: label what each parameter controls.",
  inclusivePlanning: "Visual supports (colour-coded parameter cards), a modelled example and sentence starters for the annotation for students needing extra support, per this week's Inclusion/EAL plan. Depth and complexity task for confident students: a repeated pattern built with precise parameters.",
});
