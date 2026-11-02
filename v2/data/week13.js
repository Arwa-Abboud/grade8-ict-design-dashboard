// Week 13: Nov 23 – Nov 27: Interactive Animations and Games (Code.org CSD 2026 Unit 3b (Interactive Animations and Games), Lesson 8: Sprites)
G8_WEEKS.push({
  "week": 13,
  "dates": "Nov 23 – Nov 27",
  "status": "content",
  "topic": "Interactive Animations and Games",
  "essentialQuestion": "How do sprites help programmers manage more complex images and animations?",
  "standards": "CS.MS.1.1, CS.MS.3.1, CS.MS.3.3: CS.MS.1.1: Complex problems can be broken into smaller parts to facilitate program implementation and review processes. CS.MS.3.1: Collaborative development of computational artifacts can be made more efficient by employing strategies for project management, crowdsourcing, and feedback. CS.MS.3.3: Programs can combine control structures, including nested loops and compound conditionals, to solve complex problems.",
  "lessonMapping": "Code.org CSD 2026 Unit 3b (Interactive Animations and Games), Lesson 8: Sprites",
  "evidenceOutcomes": "CS.MS.1.1 Evidence Outcomes - Students Can: a. Decompose problems and subproblems into parts to facilitate the design, implementation, and review of programs. CS.MS.3.3 Evidence Outcomes - Students Can: a. Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals; c. Systematically test and refine programs using a range of test cases. CS.MS.3.1 Evidence Outcomes - Students Can: b. Document programs in order to make them easier to follow, test, and debug. CS.MS.3.3 Evidence Outcomes - Students Can: a. Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals; c. Systematically test and refine programs using a range of test cases.",
  "walt": "We are learning to create sprites and assign images in Game Lab.",
  "wilf": [
    "I can create sprites, name them clearly, assign images, and place them on the screen."
  ],
  "keyConcepts": [
    "Sprites",
    "Animation tab",
    "Scene building"
  ],
  "crossCurricular": "Art: digital imagery and visual storytelling; Math: position and scale. Math: transformations and scale; Art: mood, composition, and layout.",
  "resources": "Code.org activities: Code.org 3b Lesson 8: Game Lab online levels, Introduction to Sprites (video); Code.org lesson slides",
  "formative": "Teacher check: at least two correctly named sprites with images and positions. (Lesson 1)",
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
      "duration": "-",
      "title": "No lesson: National Day celebrations",
      "objective": "No Grade 8 lesson this week (National Day celebrations).",
      "vocabulary": [],
      "warmup": null,
      "main": [],
      "code": null,
      "task": null,
      "successChecklist": [],
      "exitTicket": null,
      "notes": null
    }
  ],
  "planChangeNote": "Week 9 was not taught (MAP testing), so from Week 10 every lesson moved one week later. Code.org 3b Lessons 10-11 (Text, Captioned Scenes) no longer fit before exams."
});
