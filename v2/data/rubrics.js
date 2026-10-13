// Grade 8 ICT/Design — Term 1 (The Design Process) rubrics and formative scoring guides.
// Plain, skills-based language (not raw standards codes) — same style as the Design 1 project.
// Kept intentionally simple per Arwa's instruction; easy to edit/expand later.
var RUBRICS = {
  summative: {
    title: "Robot Faces: Interactive Animations Summative",
    subtitle: "Summative: Week 11 (inside the Weeks 11-13 assessment window). 100 points. Based on the Code.org Robot Faces rubric.",
    points: 100,
    categories: [
      {
        name: "Program Sequence",
        points: 20,
        levels: [
          { label: "Exceeds Expectations", range: "18-20", description: "Code is in the right order and every shape appears exactly as planned." },
          { label: "Meets Expectations", range: "14-17", description: "A few shapes are hidden behind others by mistake, but the face is clear." },
          { label: "Approaching Expectations", range: "9-13", description: "Many shapes are hidden or overlapping because of the order of the code." },
          { label: "Beginning", range: "0-8", description: "The order of the code is so wrong the output does not look like the planned face." }
        ]
      },
      {
        name: "Shapes and Coordinates",
        points: 25,
        levels: [
          { label: "Exceeds Expectations", range: "23-25", description: "Uses at least four different types of shape, each placed on purpose using the coordinate grid." },
          { label: "Meets Expectations", range: "18-22", description: "Uses at least three types of shape, placed using the coordinate grid." },
          { label: "Approaching Expectations", range: "12-17", description: "Uses one or two types of shape, or places them with default values." },
          { label: "Beginning", range: "0-11", description: "No shapes, or shapes not placed using coordinates." }
        ]
      },
      {
        name: "Variables and Randomness",
        points: 30,
        levels: [
          { label: "Exceeds Expectations", range: "27-30", description: "At least four variables with clear names, used correctly; randomNumber() makes the face look different each run." },
          { label: "Meets Expectations", range: "21-26", description: "At least three clearly named variables; at least two use randomNumber()." },
          { label: "Approaching Expectations", range: "13-20", description: "At least one variable, or randomness used once." },
          { label: "Beginning", range: "0-12", description: "No variables or random numbers." }
        ]
      },
      {
        name: "Planning and Digital Artifact",
        points: 15,
        levels: [
          { label: "Exceeds Expectations", range: "14-15", description: "The planning guide is complete and the program clearly shows the planned robot face." },
          { label: "Meets Expectations", range: "11-13", description: "The planning guide is mostly complete and the face generally matches the plan." },
          { label: "Approaching Expectations", range: "7-10", description: "Some of the plan is used in the program." },
          { label: "Beginning", range: "0-6", description: "No planning guide, or it does not match the program." }
        ]
      },
      {
        name: "Reflection",
        points: 10,
        levels: [
          { label: "Exceeds Expectations", range: "9-10", description: "Explains clearly how testing and feedback improved the robot face, with a specific example." },
          { label: "Meets Expectations", range: "7-8", description: "Explains at least one improvement made after testing." },
          { label: "Approaching Expectations", range: "4-6", description: "Reflection is general, with no specific change described." },
          { label: "Beginning", range: "0-3", description: "No reflection submitted." }
        ]
      }
    ]
  },
  formatives: [
    {
      week: "3",
      title: "User Profile Evidence & Design Improvement",
      points: 10,
      categories: [
        { name: "Evidence-based reasoning", points: 5, description: "Improvement is clearly justified using specific user profile details." },
        { name: "Clarity", points: 5, description: "Improvement and reasoning are clearly written and easy to follow." }
      ]
    },
    {
      week: "4",
      title: "Focus Need & Design Criteria",
      points: 10,
      categories: [
        { name: "Focus need clarity", points: 5, description: "The selected need is specific and clearly stated, not vague." },
        { name: "Design criteria quality", points: 5, description: "Criteria are specific enough to actually check a solution against." }
      ]
    },
    {
      week: "5",
      title: "Paper Prototype User Test Notes",
      points: 10,
      categories: [
        { name: "Specific observations", points: 5, description: "Notes describe what the user actually did or said, linked to a screen." },
        { name: "Improvement suggestion", points: 5, description: "Suggested change is backed by an observation from the test." }
      ]
    },
    {
      week: "6",
      title: "Improved Screen & User Needs",
      points: 10,
      categories: [
        { name: "Feedback categories and improved screen", points: 5, description: "Feedback is sorted into clear categories and the improved screen responds to one of them." },
        { name: "Need statements", points: 5, description: "Need statements are backed by specific evidence from the user interview." }
      ]
    },
    {
      week: "8",
      title: "Animation and Game Design for Users",
      points: 10,
      categories: [
        { name: "Matching designs to users", points: 5, description: "Each design is matched to a user with a clear reason." },
        { name: "Own design", points: 5, description: "The student's design clearly shows who it is for and what it does." }
      ]
    },
    {
      week: "9",
      title: "Annotated Code: Parameters",
      points: 10,
      categories: [
        { name: "Accurate drawing", points: 5, description: "Shapes are placed and sized as intended, with at least three shapes." },
        { name: "Parameter labels", points: 5, description: "Each parameter in the sample is correctly labelled (x, y, width, height)." }
      ]
    },
    {
      week: "10",
      title: "Variables and Random Numbers",
      points: 10,
      categories: [
        { name: "Variables used correctly", points: 5, description: "At least one clearly named variable controls part of the drawing." },
        { name: "randomNumber() and range", points: 5, description: "randomNumber() is used correctly and the student explains the range." }
      ]
    },
    {
      week: "12",
      title: "Sprites and Sprite Properties",
      points: 10,
      categories: [
        { name: "Sprites created", points: 5, description: "At least two clearly named sprites with images and positions." },
        { name: "Properties changed", points: 5, description: "At least three sprite properties are changed to improve the scene." }
      ]
    },
    {
      week: "13",
      title: "Readable Text (Peer Review)",
      points: 10,
      categories: [
        { name: "Readability", points: 5, description: "Text size, contrast and placement make it easy to read." },
        { name: "Purpose", points: 5, description: "The text clearly supports the scene for its audience." }
      ]
    },
    {
      week: "14",
      title: "Captioned Scenes (Portfolio)",
      points: 20,
      categories: [
        { name: "Sequence and coordinates", points: 5, description: "Elements appear as intended and are placed using the coordinate grid." },
        { name: "Sprites and properties", points: 5, description: "At least two sprites, each with a property changed after creation." },
        { name: "Text", points: 5, description: "At least two readable lines of text that suit the scene." },
        { name: "Improvement and reflection", points: 5, description: "At least one change made from peer feedback, explained in the reflection." }
      ]
    }
  ]
};
