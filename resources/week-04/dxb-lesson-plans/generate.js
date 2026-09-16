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
      contentCell([para([run("Date:            Time: ", { bold: true })]), reviewPara("Date/Time", `add the exact class date and period; Week 4 runs ${d.weekDates}`)], { width: W[1] }),
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
// Shared week-level facts (from Week 4 Planner + data/week04.js)
// ============================================================
const WEEK_DATES = "Sept 21 - Sept 25 (Week 4)";

const COMMON = {
  teacherName: "Arwa Abboud",
  subject: "ICT/Design (Grade 8)",
  weekDates: WEEK_DATES,
};

// ============================================================
// LESSON 1 - Define: Brainstorming User Needs
// ============================================================
buildLessonPlan({
  ...COMMON,
  filename: "W4L1 - DXB Lesson Plan.docx",
  lessonTopic: "Define: Brainstorming User Needs (Term 1, Week 4, Lesson 1) - Code.org CSD Unit 4, Lesson 3: User-Centered Design - Define and Prepare",
  standard: "CS.MS.1.1: Complex problems can be broken into smaller parts to facilitate program implementation and review processes. (Evidence Outcome a: Decompose problems and subproblems into parts to facilitate the design, implementation, and review of programs.)",
  walt: ["To brainstorm and categorize a wide range of user needs for a design challenge."],
  wilf: [
    "Generated a wide range of ideas, not just 1-2.",
    "My categories are logical and clearly labeled.",
  ],
  literacyStrategies: ["Affinity mapping / categorization of brainstormed ideas; collaborative sorting and labeling."],
  assessment: "Formative, informal - teacher checks sticky-note range and category logic.",
  vocabulary: "Define, Brainstorm",
  skills: "Idea generation and creative fluency; grouping/classifying information into logical categories; collaborative teamwork.",
  nationalIdentity: "UAE values of tolerance and community - genuinely listening to and representing needs different from your own before designing a solution.",
  aiDigitalLearning: "None planned this lesson - brainstorming and categorizing completed by hand with sticky notes.",
  starter: "Introduce today's challenge scenario: designing 'smart clothing' for a specific group of users.",
  iDo: [
    "Introduce the smart clothing design challenge - students will design for a real group of users over the next 2 lessons.",
  ],
  weDo: [
    "In groups, brainstorm as many possible user needs as possible related to the challenge, one idea per sticky note.",
  ],
  youDo: [
    "Cluster/group the sticky notes into categories of related needs (affinity mapping).",
    "Discuss as groups: which categories show up most often? What does that suggest is important?",
    "Generate at least 8 sticky-note ideas as a group and sort them into 3-4 labeled categories.",
  ],
  diffBeginning: "Provided starter categories/examples to sort ideas into; sentence starter for each sticky note idea",
  diffOn: "Brainstorm and self-organize categories independently in groups",
  diffAbove: "After categorizing, rank categories by how many students/users they'd likely affect",
  closure: "Which category of needs does your group think matters most, and why?",
  inclusivePlanning: "Visual supports and pre-taught vocabulary provided for students needing extra support (per this week's Inclusion/EAL plan). A real-world application extension offered for confident students: connecting category prioritization to real product design decisions.",
});

// ============================================================
// LESSON 2 - Prepare: Selecting a Focus Need
// ============================================================
buildLessonPlan({
  ...COMMON,
  filename: "W4L2 - DXB Lesson Plan.docx",
  lessonTopic: "Prepare: Selecting a Focus Need (Term 1, Week 4, Lesson 2) - Code.org CSD Unit 4, Lesson 3: User-Centered Design - Define and Prepare",
  standard: "CS.MS.2.2: The way that users interact with devices can provide useful information for improving the design. (Evidence Outcome a: Recommend improvements to the design of computing devices, based on an analysis of how users interact with the devices.)",
  walt: ["To select and justify one focus need, then prepare initial solution ideas."],
  wilf: [
    "My focus need is specific and clearly stated.",
    "My design criteria are measurable/checkable, not vague.",
  ],
  literacyStrategies: ["Evidence-based criteria writing; justifying a focus choice through group discussion."],
  assessment: "Formal Week 4 formative check - focus need + criteria submitted via Toddle.",
  vocabulary: "Category, Criteria",
  skills: "Prioritization and decision-making with justification; writing specific, testable requirements; early-stage prototyping/sketching.",
  nationalIdentity: "UAE commitment to inclusive design - choosing and justifying criteria that ensure a solution truly serves its intended user group.",
  aiDigitalLearning: "None planned this lesson - criteria and initial ideas prepared by hand in design journals.",
  starter: "Quick recall: what were your group's top 2-3 categories from yesterday?",
  iDo: [
    "Groups review their categorized needs and select ONE focus need to design for.",
    "Introduce design criteria - the specific things a good solution to this need must do.",
  ],
  weDo: [
    "Groups write 2-3 design criteria for their chosen focus need.",
  ],
  youDo: [
    "Groups begin preparing initial solution ideas that could meet those criteria - sketches or quick notes, not full prototypes yet.",
    "Select one focus need, write design criteria for it, and sketch at least one initial solution idea.",
  ],
  diffBeginning: "Provided criteria sentence starters ('A good solution must ___ so that ___')",
  diffOn: "Select focus need and write criteria independently as a group",
  diffAbove: "Use an impact/effort matrix to prioritize needs before selecting the focus need",
  closure: "Formal Week 4 formative check: submit focus need + criteria via Toddle.",
  inclusivePlanning: "Chunked instructions and pre-taught vocabulary provided for students needing extra support (per this week's Inclusion/EAL plan). An extension/challenge task and depth & complexity task offered for confident students: using an impact/effort matrix to prioritize needs before selecting their focus.",
});
