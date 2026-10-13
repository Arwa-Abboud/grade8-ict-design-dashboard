// Week 9: Oct 26 – Oct 30: Interactive Animations and Games (Code.org CSD 2026 Unit 3b (Interactive Animations and Games), Lesson 3: Drawing in Game Lab; Lesson 4: Shapes and Parameters)
G8_WEEKS.push({
  "week": 9,
  "dates": "Oct 26 – Oct 30",
  "status": "content",
  "topic": "Interactive Animations and Games",
  "essentialQuestion": "How can we communicate drawing instructions to a computer? How do parameters make computer instructions more specific?",
  "standards": "CS.MS.1.1, CS.MS.3.1, CS.MS.3.3: CS.MS.1.1: Complex problems can be broken into smaller parts to facilitate program implementation and review processes. CS.MS.3.1: Collaborative development of computational artifacts can be made more efficient by employing strategies for project management, crowdsourcing, and feedback. CS.MS.3.3: Programs can combine control structures, including nested loops and compound conditionals, to solve complex problems.",
  "lessonMapping": "Code.org CSD 2026 Unit 3b (Interactive Animations and Games), Lesson 3: Drawing in Game Lab; Lesson 4: Shapes and Parameters",
  "evidenceOutcomes": "CS.MS.3.1 Evidence Outcomes - Students Can: b. Document programs in order to make them easier to follow, test, and debug. CS.MS.3.3 Evidence Outcomes - Students Can: c. Systematically test and refine programs using a range of test cases. CS.MS.1.1 Evidence Outcomes - Students Can: a. Decompose problems and subproblems into parts to facilitate the design, implementation, and review of programs. CS.MS.3.3 Evidence Outcomes - Students Can: a. Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals; c. Systematically test and refine programs using a range of test cases.",
  "walt": "We are learning to use ordered code commands to draw shapes in Game Lab. We are learning to use parameters to control the position, size, and appearance of shapes.",
  "wilf": [
    "I can write and debug simple drawing commands using sequence, fill, rect, and ellipse.",
    "I can explain what each parameter controls and change parameters to improve a programmed design."
  ],
  "keyConcepts": [
    "Game Lab environment",
    "Sequencing",
    "Drawing commands",
    "Parameters",
    "Debugging"
  ],
  "crossCurricular": "Math: geometry and position; English: reading instructions carefully. Math: measurement and geometry; Art: color and composition.",
  "resources": "Code.org activities: Code.org 3b Lesson 3: Game Lab online levels; Code.org 3b Lesson 4: Game Lab online levels; Code.org lesson slides",
  "formative": "Annotated code sample: students label what each parameter controls. (Lesson 2)",
  "summative": null,
  "lessons": [
    {
      "number": 1,
      "duration": "~50-60 min",
      "title": "Code.org 3b Lesson 3: Drawing in Game Lab",
      "objective": "Learn to use ordered code commands to draw shapes in Game Lab.",
      "vocabulary": [
        {
          "term": "Sequence",
          "definition": "The order in which commands run; later shapes are drawn on top of earlier ones."
        },
        {
          "term": "Program",
          "definition": "An algorithm that has been coded into something that can be run by a machine."
        },
        {
          "term": "Bug",
          "definition": "Part of a program that does not work correctly."
        },
        {
          "term": "Debugging",
          "definition": "Finding and fixing problems in an algorithm or program."
        }
      ],
      "warmup": "Warm up: 'How could you tell a computer to draw a face?' Share ideas about order and position.",
      "main": [
        "Watch the Drawing in Game Lab videos and tour the Game Lab workspace.",
        "Learn rect(), ellipse() and fill(): predict the output before running.",
        "Students enter Game Lab, predict code output, code basic shapes, and debug order/placement issues.",
        "Share drawings with a partner and explain one bug you fixed."
      ],
      "code": "fill(\"yellow\");\nellipse(200, 200, 150, 150);\nfill(\"black\");\nrect(160, 170, 20, 20);",
      "task": "Code a picture with at least three shapes in Game Lab, using fill() to add color.",
      "successChecklist": [
        "My shapes appear in the right place and order.",
        "I found and fixed at least one bug."
      ],
      "exitTicket": "Code.org progress plus screenshot of a programmed image with at least three shapes.",
      "notes": "Support: Use starter code and annotate each command together before independent practice. Extension: Students add comments or labels explaining what each command does. One lesson only. Prioritize core levels and allow challenge levels only if students finish early.",
      "codeOrgActivities": [
        "Game Lab online levels"
      ]
    },
    {
      "number": 2,
      "duration": "~50-60 min",
      "title": "Code.org 3b Lesson 4: Shapes and Parameters",
      "objective": "Learn to use parameters to control the position, size, and appearance of shapes.",
      "vocabulary": [
        {
          "term": "Parameter",
          "definition": "Extra information given to a command to customize it, such as a shape's x, y, width and height."
        },
        {
          "term": "Background",
          "definition": "The command that fills the whole screen with one color."
        }
      ],
      "warmup": "Show two ellipses of different sizes: 'What extra information did the computer need to draw these?'",
      "main": [
        "Connect different-sized shapes to the need for more inputs: parameters.",
        "Learn ellipse(x, y, width, height), rect(x, y, width, height) and background().",
        "Students predict output, adjust parameters for shapes, and create a geometric scene using accurate size and placement.",
        "Journal: label what each parameter controls in one line of your code."
      ],
      "code": "background(\"lightblue\");\nrect(50, 300, 300, 50);\nellipse(200, 150, 120, 80);",
      "task": "Create a geometric scene with accurate size and placement, then label what each parameter controls.",
      "successChecklist": [
        "I can explain what each parameter controls.",
        "Changing parameters improved my design."
      ],
      "exitTicket": "Annotated code sample: students label what each parameter controls.",
      "notes": "Support: Use color-coded parameter cards and guided examples. Extension: Students create a repeated design pattern using multiple shapes and precise parameters. Keep the focus on accuracy and explanation, not finishing every optional challenge.",
      "codeOrgActivities": [
        "Game Lab online levels"
      ],
      "literacyStrategy": {
        "name": "Frayer Model",
        "note": "Frayer Model for 'Parameter' so students separate the command from the information it needs."
      }
    }
  ],
  "planChangeNote": "Plan v2: switched from the Design Process unit to Code.org Unit 3b Interactive Animations and Games (students found the worksheet-heavy unit boring)."
});
