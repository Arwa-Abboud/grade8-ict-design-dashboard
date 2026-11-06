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
      contentCell([para([run("Date:            Time: ", { bold: true })]), reviewPara("Date/Time", `add the exact class date and period; Week 11 runs ${d.weekDates}`)], { width: W[1] }),
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
// Shared week-level facts (from v2 Week 11 Planner + v2/data/week11.js)
// ============================================================
const WEEK_DATES = "Nov 9 - Nov 13 (Week 11)";

const COMMON = {
  teacherName: "Arwa Abboud",
  subject: "ICT/Design (Grade 8)",
  weekDates: WEEK_DATES,
};

// ============================================================
// LESSON 1 - Variables (Code.org 3b Lesson 5)
// ============================================================
buildLessonPlan({
  ...COMMON,
  filename: "G8W11L1 - DXB Lesson Plan.docx",
  lessonTopic: "Variables (Term 1, Week 11, Lesson 1) - Code.org CSD 2026 Unit 3b, Lesson 5: Variables",
  standard: "CS.MS.1.2: Data can be collected, transformed and analyzed to develop computational models. (Evidence Outcome a: Collect data using computational tools and transform the data to make it more useful and reliable.)",
  walt: ["To create variables and use them to label values in code."],
  wilf: [
    "I can create a variable and give it a value.",
    "My variable controls part of my drawing.",
  ],
  literacyStrategies: ["Literacy Strategy: Frayer Model (on 'Variable'); explaining in words what a variable stores and why its name matters."],
  assessment: "Formative, informal - Code.org progress + exit ticket: define variable and explain one variable used in their code.",
  vocabulary: "Variable, Assign",
  skills: "Naming and storing values; predicting program output; reusing a value instead of retyping it.",
  nationalIdentity: "UAE Smart Government - digital services keep each resident's details under a clear label so they can be reused; variables do the same job in code.",
  aiDigitalLearning: "Code.org Game Lab online levels and videos; no AI tools - students write and test their own code.",
  starter: "Input, output, storage, processing: 'Where does a computer keep information it needs later?'",
  iDo: [
    "Introduce variables as labelled storage using the Introduction to Variables video.",
    "Model var size = 100; and using size as a parameter: ellipse(200, 200, size, size);",
  ],
  weDo: [
    "Frayer Model for Variable.",
    "Predict the output of short programs together, then run them and modify the values.",
  ],
  youDo: [
    "Students complete the Code.org 3b Lesson 5 Game Lab levels.",
    "Students use variables to control the position, size or color of shapes in a scene.",
  ],
  diffBeginning: "Partially completed code with missing variable names and values",
  diffOn: "Use at least one variable to control a shape independently",
  diffAbove: "Use one variable in more than one place to show reuse and efficiency",
  closure: "Exit ticket: define variable and explain one variable used in your code. Reflection: why is a good variable name important?",
  inclusivePlanning: "Visual supports (Code.org videos, slides and the Variables reference), pre-taught vocabulary and a modelled example for students needing extra support, per this week's Inclusion/EAL plan. Extension/challenge task for confident students: one variable reused in several places.",
});

// ============================================================
// LESSON 2 - Random Numbers (Code.org 3b Lesson 6)
// ============================================================
buildLessonPlan({
  ...COMMON,
  filename: "G8W11L2 - DXB Lesson Plan.docx",
  lessonTopic: "Random Numbers (Term 1, Week 11, Lesson 2) - Code.org CSD 2026 Unit 3b, Lesson 6: Random Numbers",
  standard: "CS.MS.3.3: Programs can combine control structures, including nested loops and compound conditionals, to solve complex problems. (Evidence Outcome c: Systematically test and refine programs using a range of test cases.)",
  walt: ["To use random numbers to create variation in a program."],
  wilf: [
    "My program uses randomNumber() correctly.",
    "I can explain the range I chose.",
  ],
  literacyStrategies: [
    "Predict-then-run: predicting how the output changes across repeated runs; explaining the chosen range in words.",
    "Frayer Model for Random Number.",
  ],
  assessment: "Formal Week 11 formative - teacher check: the program uses randomNumber() correctly and the student explains the range.",
  vocabulary: "Random Number, Range",
  skills: "Predicting and testing repeated runs; choosing a sensible range; explaining code choices.",
  nationalIdentity: "UAE spirit of innovation - engineers test new systems many times before launch, just as students run a random program again and again to see how it behaves.",
  aiDigitalLearning: "Code.org Game Lab online levels; no AI tools - students write and test their own code.",
  starter: "Run the same program three times: 'Why is the picture different each time?'",
  iDo: [
    "Introduce randomNumber(min, max) and test it with repeated runs.",
    "Show how to update a value stored in a variable, for example var x = randomNumber(50, 350);",
  ],
  weDo: [
    "Frayer Model for Random Number.",
    "Run the same program several times together and record how the output changes.",
  ],
  youDo: [
    "Students complete the Code.org 3b Lesson 6 Game Lab levels.",
    "Students use randomNumber() with variables to create a randomized image, then explain the range they chose and why.",
  ],
  diffBeginning: "Visual number range and starter code with one random value",
  diffOn: "Use randomNumber() with variables independently and explain the range",
  diffAbove: "Randomize more than one property, such as size, location or color",
  closure: "Teacher check: the program uses randomNumber() correctly and the student explains the range.",
  inclusivePlanning: "Visual supports (number-range visual), a modelled example and sentence starters for explaining the range for students needing extra support, per this week's Inclusion/EAL plan. Extension/challenge task and higher-order questioning for confident students: randomizing several properties and justifying the ranges.",
});
