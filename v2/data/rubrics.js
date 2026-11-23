// Grade 8 ICT/Design: Term 1 marks plan, rubrics and scoring guides.
// Recorded marks (100 total): 3 formatives x 10 (Design Process) + Summative 1 (50, Code.org 3b Lessons 1-6)
// + Summative 2 (20, Robot Faces). Every rubric has 3 criteria. Plain language; easy to edit later.
var RUBRICS = {
  overview: [
    { "code": "F1", "type": "Formative", "title": "Define and Prepare: Focus Need and Design Criteria", "week": "4", "points": 10 },
    { "code": "F2", "type": "Formative", "title": "Paper Prototype User Testing", "week": "5", "points": 10 },
    { "code": "F3", "type": "Formative", "title": "Feedback, Improved Screen and User Needs", "week": "6", "points": 10 },
    { "code": "S1", "type": "Summative", "title": "Interactive Animations: Lesson Completion (Code.org 3b Lessons 1-6)", "week": "8-11", "points": 50 },
    { "code": "S2", "type": "Summative", "title": "Robot Faces Mini-Project (Code.org 3b Lesson 7)", "week": "13", "points": 20 }
  ],
  summatives: [
    {
      "code": "S1",
      "title": "Summative 1: Interactive Animations Lesson Completion",
      "subtitle": "50 points. Code.org CSD 3b Lessons 1-6, checked on Code.org progress and the printed activity guides.",
      "points": 50,
      "categories": [
        {
          "name": "Lessons 1-2: Programming for a Purpose and Plotting Shapes",
          "points": 15,
          "levels": [
            { "label": "Exceeds Expectations", "range": "14-15", "description": "Everything complete and accurate." },
            { "label": "Meets Expectations", "range": "10-13", "description": "Most of it complete." },
            { "label": "Approaching Expectations", "range": "5-9", "description": "About half complete." },
            { "label": "Beginning", "range": "0-4", "description": "Little or nothing complete." }
          ]
        },
        {
          "name": "Lessons 3-4: Drawing in Game Lab and Shapes and Parameters",
          "points": 15,
          "levels": [
            { "label": "Exceeds Expectations", "range": "14-15", "description": "Every level complete." },
            { "label": "Meets Expectations", "range": "10-13", "description": "Most levels complete." },
            { "label": "Approaching Expectations", "range": "5-9", "description": "About half complete." },
            { "label": "Beginning", "range": "0-4", "description": "Little or nothing complete." }
          ]
        },
        {
          "name": "Lessons 5-6: Variables and Random Numbers",
          "points": 20,
          "levels": [
            { "label": "Exceeds Expectations", "range": "18-20", "description": "Every level complete." },
            { "label": "Meets Expectations", "range": "13-17", "description": "Most levels complete." },
            { "label": "Approaching Expectations", "range": "7-12", "description": "About half complete." },
            { "label": "Beginning", "range": "0-6", "description": "Little or nothing complete." }
          ]
        }
      ]
    },
    {
      "code": "S2",
      "title": "Summative 2: Robot Faces Mini-Project",
      "subtitle": "20 points. Code.org CSD 3b Lesson 7, Week 13. Program link, screenshot and reflection submitted via Toddle.",
      "points": 20,
      "categories": [
        {
          "name": "Shapes and Sequence",
          "points": 7,
          "levels": [
            { "label": "Exceeds Expectations", "range": "7", "description": "4+ shape types, placed with coordinates, in the right order." },
            { "label": "Meets Expectations", "range": "5-6", "description": "3 shape types; the face is clear." },
            { "label": "Approaching Expectations", "range": "3-4", "description": "1-2 shape types, or shapes hidden by the order." },
            { "label": "Beginning", "range": "0-2", "description": "Few or no shapes." }
          ]
        },
        {
          "name": "Variables and Randomness",
          "points": 8,
          "levels": [
            { "label": "Exceeds Expectations", "range": "8", "description": "4+ clearly named variables; randomNumber() changes the face each run." },
            { "label": "Meets Expectations", "range": "6-7", "description": "3 variables; at least 2 use randomNumber()." },
            { "label": "Approaching Expectations", "range": "3-5", "description": "1 variable, or randomness used once." },
            { "label": "Beginning", "range": "0-2", "description": "No variables or randomness." }
          ]
        },
        {
          "name": "Plan and Reflection",
          "points": 5,
          "levels": [
            { "label": "Exceeds Expectations", "range": "5", "description": "Complete plan; reflection gives a specific improvement." },
            { "label": "Meets Expectations", "range": "4", "description": "Plan mostly complete; one improvement explained." },
            { "label": "Approaching Expectations", "range": "2-3", "description": "Plan partly used; reflection is general." },
            { "label": "Beginning", "range": "0-1", "description": "No plan or no reflection." }
          ]
        }
      ]
    }
  ],
  formatives: [
    {
      "code": "F1",
      "week": "4",
      "title": "Formative 1: Define and Prepare: Focus Need and Design Criteria",
      "evidence": "Brainstorming User Needs Recording Sheet (Lesson 1) and Selecting a Focus Need Planning Sheet (Lesson 2).",
      "points": 10,
      "categories": [
        { "name": "User needs", "points": 3, "description": "Several needs written from the user's point of view." },
        { "name": "Focus need", "points": 3, "description": "One clear, specific need is chosen." },
        { "name": "Design criteria", "points": 4, "description": "Criteria link to the focus need and can be checked." }
      ]
    },
    {
      "code": "F2",
      "week": "5",
      "title": "Formative 2: Paper Prototype User Testing",
      "evidence": "Paper prototype and user test notes from Lesson 5 (Parts 1 and 2).",
      "points": 10,
      "categories": [
        { "name": "Prototype", "points": 3, "description": "The paper prototype is complete and easy to test." },
        { "name": "Test notes", "points": 4, "description": "Notes say what the user actually did or said." },
        { "name": "Improvement", "points": 3, "description": "One change is suggested, based on the test." }
      ]
    },
    {
      "code": "F3",
      "week": "6",
      "title": "Formative 3: Feedback, Improved Screen and User Needs",
      "evidence": "Code.org Lesson 6 Prototype Feedback and Improve a Screen; Code.org Lesson 7 User Interviews.",
      "points": 10,
      "categories": [
        { "name": "Feedback", "points": 3, "description": "Feedback is sorted into clear groups." },
        { "name": "Improved screen", "points": 4, "description": "The new screen fixes at least one piece of feedback." },
        { "name": "Need statements", "points": 3, "description": "Needs are backed by evidence from the interviews." }
      ]
    }
  ],
  // Informal checks: used for feedback during lessons, not recorded as marks.
  checks: [
    {
      "week": "3",
      "title": "User Profile Evidence & Design Improvement",
      "points": 10,
      "categories": [
        { "name": "Evidence-based reasoning", "points": 5, "description": "Improvement is clearly justified using specific user profile details." },
        { "name": "Clarity", "points": 5, "description": "Improvement and reasoning are clearly written and easy to follow." }
      ]
    },
    {
      "week": "8",
      "title": "Animation and Game Design for Users",
      "points": 10,
      "categories": [
        { "name": "Matching designs to users", "points": 5, "description": "Each design is matched to a user with a clear reason." },
        { "name": "Own design", "points": 5, "description": "The student's design clearly shows who it is for and what it does." }
      ]
    },
    {
      "week": "10",
      "title": "Annotated Code: Parameters",
      "points": 10,
      "categories": [
        { "name": "Accurate drawing", "points": 5, "description": "Shapes are placed and sized as intended, with at least three shapes." },
        { "name": "Parameter labels", "points": 5, "description": "Each parameter in the sample is correctly labelled (x, y, width, height)." }
      ]
    },
    {
      "week": "11",
      "title": "Variables and Random Numbers",
      "points": 10,
      "categories": [
        { "name": "Variables used correctly", "points": 5, "description": "At least one clearly named variable controls part of the drawing." },
        { "name": "randomNumber() and range", "points": 5, "description": "randomNumber() is used correctly and the student explains the range." }
      ]
    },
    {
      "week": "14",
      "title": "Sprites Setup Check",
      "points": 10,
      "categories": [
        { "name": "Sprites created", "points": 5, "description": "At least two clearly named sprites with images and positions." },
        { "name": "Clear names", "points": 5, "description": "Sprite names describe what each sprite is (e.g. cat, sun), not sprite1." }
      ]
    }
  ]
};
