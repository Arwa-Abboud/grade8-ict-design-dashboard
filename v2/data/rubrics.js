// Grade 8 ICT/Design: Term 1 marks plan, rubrics and scoring guides.
// Recorded marks (100 total): 3 formatives x 10 (Design Process) + Summative 1 (50, lesson completion)
// + Summative 2 (20, Robot Faces). Plain, skills-based language; easy to edit later.
var RUBRICS = {
  overview: [
    { "code": "F1", "type": "Formative", "title": "Define and Prepare: Focus Need and Design Criteria", "week": "4", "points": 10 },
    { "code": "F2", "type": "Formative", "title": "Paper Prototype User Testing", "week": "5", "points": 10 },
    { "code": "F3", "type": "Formative", "title": "Feedback, Improved Screen and User Needs", "week": "6", "points": 10 },
    { "code": "S1", "type": "Summative", "title": "Interactive Animations: Lesson Completion (Code.org 3b Lessons 1-6 and 8)", "week": "8-14", "points": 50 },
    { "code": "S2", "type": "Summative", "title": "Robot Faces Mini-Project (Code.org 3b Lesson 7)", "week": "13", "points": 20 }
  ],
  summatives: [
    {
      "code": "S1",
      "title": "Summative 1: Interactive Animations Lesson Completion",
      "subtitle": "50 points. Code.org CSD 3b Lessons 1-6 and 8, checked on Code.org progress and the printed activity guides. Final mark entered after Lesson 8 (Week 14).",
      "points": 50,
      "categories": [
        {
          "name": "Lessons 1-2: Programming for a Purpose and Plotting Shapes",
          "points": 10,
          "levels": [
            { "label": "Exceeds Expectations", "range": "10", "description": "Animation and Game Design for Users guide and Drawing Shapes worksheet fully complete and accurate; every level done." },
            { "label": "Meets Expectations", "range": "7-9", "description": "Both activities and all required levels complete, with minor gaps." },
            { "label": "Approaching Expectations", "range": "4-6", "description": "About half of the activities and levels complete." },
            { "label": "Beginning", "range": "0-3", "description": "Little or no work started." }
          ]
        },
        {
          "name": "Lessons 3-4: Drawing in Game Lab and Shapes and Parameters",
          "points": 10,
          "levels": [
            { "label": "Exceeds Expectations", "range": "10", "description": "Every Game Lab level complete, including the challenge levels." },
            { "label": "Meets Expectations", "range": "7-9", "description": "All required levels complete; challenge levels may be skipped." },
            { "label": "Approaching Expectations", "range": "4-6", "description": "About half of the required levels complete." },
            { "label": "Beginning", "range": "0-3", "description": "Little or no work started." }
          ]
        },
        {
          "name": "Lessons 5-6: Variables and Random Numbers",
          "points": 10,
          "levels": [
            { "label": "Exceeds Expectations", "range": "10", "description": "Every level complete, including the challenge levels." },
            { "label": "Meets Expectations", "range": "7-9", "description": "All required levels complete; challenge levels may be skipped." },
            { "label": "Approaching Expectations", "range": "4-6", "description": "About half of the required levels complete." },
            { "label": "Beginning", "range": "0-3", "description": "Little or no work started." }
          ]
        },
        {
          "name": "Lesson 8: Sprites",
          "points": 10,
          "levels": [
            { "label": "Exceeds Expectations", "range": "10", "description": "Every level complete, including the challenge levels." },
            { "label": "Meets Expectations", "range": "7-9", "description": "All required levels complete; challenge levels may be skipped." },
            { "label": "Approaching Expectations", "range": "4-6", "description": "About half of the required levels complete." },
            { "label": "Beginning", "range": "0-3", "description": "Little or no work started." }
          ]
        },
        {
          "name": "Check Your Understanding questions (all lessons)",
          "points": 10,
          "levels": [
            { "label": "Exceeds Expectations", "range": "10", "description": "Every end-of-lesson question answered, with clear and correct explanations." },
            { "label": "Meets Expectations", "range": "7-9", "description": "Every question answered; most answers correct." },
            { "label": "Approaching Expectations", "range": "4-6", "description": "Some questions answered, or answers are very brief." },
            { "label": "Beginning", "range": "0-3", "description": "Few or no questions answered." }
          ]
        }
      ]
    },
    {
      "code": "S2",
      "title": "Summative 2: Robot Faces Mini-Project",
      "subtitle": "20 points. Code.org CSD 3b Lesson 7, Week 13. Based on the Code.org Robot Faces rubric. Program link, screenshot and reflection submitted via Toddle.",
      "points": 20,
      "categories": [
        {
          "name": "Program Sequence",
          "points": 3,
          "levels": [
            { "label": "Exceeds Expectations", "range": "3", "description": "Code is in the right order and every shape appears exactly as planned." },
            { "label": "Meets Expectations", "range": "2", "description": "A few shapes are hidden behind others by mistake, but the face is clear." },
            { "label": "Approaching Expectations", "range": "1", "description": "Many shapes are hidden or overlapping because of the order of the code." },
            { "label": "Beginning", "range": "0", "description": "The order of the code is so wrong the output does not look like the planned face." }
          ]
        },
        {
          "name": "Shapes and Coordinates",
          "points": 5,
          "levels": [
            { "label": "Exceeds Expectations", "range": "5", "description": "Uses at least four different types of shape, each placed on purpose using the coordinate grid." },
            { "label": "Meets Expectations", "range": "4", "description": "Uses at least three types of shape, placed using the coordinate grid." },
            { "label": "Approaching Expectations", "range": "2-3", "description": "Uses one or two types of shape, or places them with default values." },
            { "label": "Beginning", "range": "0-1", "description": "No shapes, or shapes not placed using coordinates." }
          ]
        },
        {
          "name": "Variables and Randomness",
          "points": 6,
          "levels": [
            { "label": "Exceeds Expectations", "range": "6", "description": "At least four variables with clear names, used correctly; randomNumber() makes the face look different each run." },
            { "label": "Meets Expectations", "range": "4-5", "description": "At least three clearly named variables; at least two use randomNumber()." },
            { "label": "Approaching Expectations", "range": "2-3", "description": "At least one variable, or randomness used once." },
            { "label": "Beginning", "range": "0-1", "description": "No variables or random numbers." }
          ]
        },
        {
          "name": "Planning and Digital Artifact",
          "points": 3,
          "levels": [
            { "label": "Exceeds Expectations", "range": "3", "description": "The planning guide is complete and the program clearly shows the planned robot face." },
            { "label": "Meets Expectations", "range": "2", "description": "The planning guide is mostly complete and the face generally matches the plan." },
            { "label": "Approaching Expectations", "range": "1", "description": "Some of the plan is used in the program." },
            { "label": "Beginning", "range": "0", "description": "No planning guide, or it does not match the program." }
          ]
        },
        {
          "name": "Reflection",
          "points": 3,
          "levels": [
            { "label": "Exceeds Expectations", "range": "3", "description": "Explains clearly how testing and feedback improved the robot face, with a specific example." },
            { "label": "Meets Expectations", "range": "2", "description": "Explains at least one improvement made after testing." },
            { "label": "Approaching Expectations", "range": "1", "description": "Reflection is general, with no specific change described." },
            { "label": "Beginning", "range": "0", "description": "No reflection submitted." }
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
        {
          "name": "User needs and focus need",
          "points": 5,
          "description": "Several user needs are recorded from the user's point of view, and the selected focus need is specific and clearly stated, not vague."
        },
        {
          "name": "Design criteria",
          "points": 5,
          "description": "Criteria are linked to the focus need and specific enough to actually check a solution against."
        }
      ]
    },
    {
      "code": "F2",
      "week": "5",
      "title": "Formative 2: Paper Prototype User Testing",
      "evidence": "Paper prototype and user test notes from Lesson 5 (Parts 1 and 2).",
      "points": 10,
      "categories": [
        {
          "name": "Specific observations",
          "points": 5,
          "description": "Notes describe what the user actually did or said, linked to a screen or part of the prototype."
        },
        {
          "name": "Improvement suggestion",
          "points": 5,
          "description": "The suggested change is backed by an observation from the test."
        }
      ]
    },
    {
      "code": "F3",
      "week": "6",
      "title": "Formative 3: Feedback, Improved Screen and User Needs",
      "evidence": "Code.org Lesson 6 Prototype Feedback and Improve a Screen; Code.org Lesson 7 User Interviews.",
      "points": 10,
      "categories": [
        {
          "name": "Feedback and improved screen",
          "points": 5,
          "description": "Feedback is sorted into clear categories and the improved screen responds to at least one of them."
        },
        {
          "name": "Need statements",
          "points": 5,
          "description": "Need statements are backed by specific evidence from the user interviews."
        }
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
