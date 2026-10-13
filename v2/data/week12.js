// Week 12: Nov 16 – Nov 20: Interactive Animations and Games (Code.org CSD 2026 Unit 3b (Interactive Animations and Games), Lesson 8: Sprites; Lesson 9: Sprite Properties)
G8_WEEKS.push({
  "week": 12,
  "dates": "Nov 16 – Nov 20",
  "status": "content",
  "topic": "Interactive Animations and Games",
  "essentialQuestion": "How do sprites help programmers manage more complex images and animations? How can changing sprite properties help us control a digital scene?",
  "standards": "CS.MS.1.1, CS.MS.3.1, CS.MS.3.3: CS.MS.1.1: Complex problems can be broken into smaller parts to facilitate program implementation and review processes. CS.MS.3.1: Collaborative development of computational artifacts can be made more efficient by employing strategies for project management, crowdsourcing, and feedback. CS.MS.3.3: Programs can combine control structures, including nested loops and compound conditionals, to solve complex problems.",
  "lessonMapping": "Code.org CSD 2026 Unit 3b (Interactive Animations and Games), Lesson 8: Sprites; Lesson 9: Sprite Properties",
  "evidenceOutcomes": "CS.MS.1.1 Evidence Outcomes - Students Can: a. Decompose problems and subproblems into parts to facilitate the design, implementation, and review of programs. CS.MS.3.3 Evidence Outcomes - Students Can: a. Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals; c. Systematically test and refine programs using a range of test cases. CS.MS.3.1 Evidence Outcomes - Students Can: b. Document programs in order to make them easier to follow, test, and debug. CS.MS.3.3 Evidence Outcomes - Students Can: a. Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals; c. Systematically test and refine programs using a range of test cases.",
  "walt": "We are learning to create sprites and assign images in Game Lab. We are learning to modify sprite properties such as position, scale, rotation, and visibility.",
  "wilf": [
    "I can create sprites, name them clearly, assign images, and place them on the screen.",
    "I can change sprite properties to improve the appearance and meaning of a scene."
  ],
  "keyConcepts": [
    "Sprites",
    "Animation tab",
    "Sprite properties",
    "Dot notation",
    "Scene building"
  ],
  "crossCurricular": "Art: digital imagery and visual storytelling; Math: position and scale. Math: transformations and scale; Art: mood, composition, and layout.",
  "resources": "Code.org activities: Code.org 3b Lesson 8: Game Lab online levels, Introduction to Sprites (video); Code.org 3b Lesson 9: Game Lab online levels, Sprite Properties (video); Code.org lesson slides",
  "formative": "Code check: students correctly modify at least three sprite properties. (Lesson 2)",
  "summative": null,
  "lessons": [
    {
      "number": 1,
      "duration": "~50-60 min",
      "title": "Code.org 3b Lesson 8: Sprites",
      "objective": "Create sprites, name them clearly, assign images and place them on the screen.",
      "vocabulary": [
        {
          "term": "Sprite",
          "definition": "A character on the screen with properties that describe its location, movement and look."
        },
        {
          "term": "Animation Tab",
          "definition": "The part of Game Lab where you choose or draw the images for sprites."
        }
      ],
      "warmup": "'How much information would a program need to remember to draw a character?'",
      "main": [
        "Introduce sprites as one variable that holds everything about a character.",
        "Use createSprite(), setAnimation() and drawSprites(); explore the Animation tab.",
        "Students create and name sprites, assign images, position them on the canvas, and compare sprites with shape commands.",
        "Journal: why is a sprite easier than lots of separate shapes?"
      ],
      "code": "var cat = createSprite(200, 200);\ncat.setAnimation(\"cat\");\ndrawSprites();",
      "task": "Students create and name sprites, assign images, position them on the canvas, and compare sprites with shape commands.",
      "successChecklist": [
        "I created at least two clearly named sprites.",
        "Each sprite has an image and a position."
      ],
      "exitTicket": "Teacher check: at least two correctly named sprites with images and positions.",
      "notes": "Support: Provide a sprite setup checklist and model sprite naming conventions. Extension: Students create a themed scene with several sprites and explain why sprites are useful. This is a full new concept. Avoid combining with sprite properties.",
      "codeOrgActivities": [
        "Game Lab online levels",
        "Introduction to Sprites (video)"
      ],
      "literacyStrategy": {
        "name": "Frayer Model",
        "note": "Frayer Model for 'Sprite' contrasting it with a plain shape drawn by rect() or ellipse()."
      }
    },
    {
      "number": 2,
      "duration": "~50-60 min",
      "title": "Code.org 3b Lesson 9: Sprite Properties",
      "objective": "Use dot notation to change sprite properties such as position, scale and rotation.",
      "vocabulary": [
        {
          "term": "Property",
          "definition": "A label for a characteristic of a sprite, such as its location and appearance."
        },
        {
          "term": "Dot Notation",
          "definition": "The way to use a sprite's properties in Game Lab: the sprite's name, a dot, then the property (cat.x)."
        },
        {
          "term": "Scale",
          "definition": "A sprite property that makes it bigger or smaller (1 is normal size)."
        },
        {
          "term": "Rotation",
          "definition": "A sprite property that turns it by a number of degrees."
        }
      ],
      "warmup": "Show one sprite in three different sizes and angles: 'What changed, and what stayed the same?'",
      "main": [
        "Introduce properties and dot notation: cat.x, cat.y, cat.scale, cat.rotation.",
        "Predict, then test changes to each property.",
        "Students adjust sprite properties, test visual changes, and create a scene that communicates a setting or mood.",
        "Save a screenshot for the portfolio."
      ],
      "code": "cat.scale = 0.5;\ncat.rotation = 20;\ncat.x = 100;",
      "task": "Students adjust sprite properties, test visual changes, and create a scene that communicates a setting or mood.",
      "successChecklist": [
        "I changed at least three sprite properties.",
        "The changes make my scene clearer."
      ],
      "exitTicket": "Code check: students correctly modify at least three sprite properties.",
      "notes": "Support: Provide a property table with examples and expected outputs. Extension: Students use variables to control selected sprite properties. Reinforce saving and screenshot evidence for portfolio.",
      "codeOrgActivities": [
        "Game Lab online levels",
        "Sprite Properties (video)"
      ]
    }
  ],
  "planChangeNote": "Plan v2: switched from the Design Process unit to Code.org Unit 3b Interactive Animations and Games (students found the worksheet-heavy unit boring)."
});
