// Grade 8 ICT/Design — Term 1 (The Design Process) rubrics and formative scoring guides.
// Plain, skills-based language (not raw standards codes) — same style as the Design 1 project.
// Kept intentionally simple per Arwa's instruction; easy to edit/expand later.
var RUBRICS = {
  summative: {
    title: "Digital App Prototype: Design Process Summative",
    subtitle: "Summative: evidence and rubric scores collected in Weeks 11-13 (Code.org Lessons 14-19). 100 points. The Week 14 App Showcase is not graded.",
    points: 100,
    categories: [
      {
        name: "Design Process Explanation",
        points: 20,
        levels: [
          { label: "Exceeds Expectations", range: "18-20", description: "Clearly and specifically explains the full journey — the user need, research, prototyping, and how the idea evolved — with real evidence at each stage." },
          { label: "Meets Expectations", range: "14-17", description: "Explains the design process with the key stages present, minor gaps in detail." },
          { label: "Approaching Expectations", range: "9-13", description: "Describes some of the design process but skips stages or lacks specific evidence." },
          { label: "Beginning", range: "0-8", description: "Design process explanation is missing or very unclear." }
        ]
      },
      {
        name: "Working Digital Prototype",
        points: 25,
        levels: [
          { label: "Exceeds Expectations", range: "23-25", description: "All planned screens are built and fully linked with working navigation events; the app is easy to move through from start to finish." },
          { label: "Meets Expectations", range: "18-22", description: "Most screens are built and linked correctly, with only minor navigation issues." },
          { label: "Approaching Expectations", range: "12-17", description: "Some screens exist but navigation is incomplete or unreliable." },
          { label: "Beginning", range: "0-11", description: "Few or no screens are built, or navigation does not work." }
        ]
      },
      {
        name: "Feedback Incorporation",
        points: 15,
        levels: [
          { label: "Exceeds Expectations", range: "14-15", description: "Clear evidence that real user/peer feedback shaped multiple specific changes to the final product." },
          { label: "Meets Expectations", range: "11-13", description: "Some feedback was incorporated with at least one clear example." },
          { label: "Approaching Expectations", range: "7-10", description: "Feedback was collected but barely reflected in the final product." },
          { label: "Beginning", range: "0-6", description: "No evidence feedback was collected or used." }
        ]
      },
      {
        name: "Bugs/Features Handling",
        points: 15,
        levels: [
          { label: "Exceeds Expectations", range: "14-15", description: "Bugs and features were tracked, prioritized sensibly, and meaningful fixes/additions were made." },
          { label: "Meets Expectations", range: "11-13", description: "Bugs/features were tracked and some were addressed." },
          { label: "Approaching Expectations", range: "7-10", description: "A bugs/features list exists but shows little follow-through." },
          { label: "Beginning", range: "0-6", description: "No evidence of tracking or fixing bugs/features." }
        ]
      },
      {
        name: "Collaboration & Progress",
        points: 15,
        levels: [
          { label: "Exceeds Expectations", range: "14-15", description: "Took on a clear role, built their assigned screens on time, and helped the team combine and link them." },
          { label: "Meets Expectations", range: "11-13", description: "Completed their assigned screens and contributed to combining the app, with minor delays." },
          { label: "Approaching Expectations", range: "7-10", description: "Completed some assigned work but relied heavily on teammates." },
          { label: "Beginning", range: "0-6", description: "Little evidence of contribution to the team app." }
        ]
      },
      {
        name: "Reflection",
        points: 10,
        levels: [
          { label: "Exceeds Expectations", range: "9-10", description: "Honest, specific reflection naming real strengths and a genuine area for improvement." },
          { label: "Meets Expectations", range: "7-8", description: "Reflection covers strengths and improvement with some specificity." },
          { label: "Approaching Expectations", range: "4-6", description: "Reflection is generic or surface-level." },
          { label: "Beginning", range: "0-3", description: "No meaningful reflection included." }
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
      title: "Paper Prototype & Testing Notes",
      points: 20,
      categories: [
        { name: "Prototype completeness", points: 5, description: "Includes all key screens needed for the app idea to make sense." },
        { name: "Addresses user need", points: 5, description: "Prototype is clearly designed around a real, identified user need." },
        { name: "User testing quality", points: 5, description: "Real testing was conducted with a genuine tester/observer, and notes are specific." },
        { name: "Revision based on feedback", points: 5, description: "At least one visible, meaningful revision was made after testing." }
      ]
    },
    {
      week: "9",
      title: "Market Research & UI Elements",
      points: 10,
      categories: [
        { name: "Research quality", points: 5, description: "Evaluation identifies real strengths and gaps in similar apps." },
        { name: "UI element choices", points: 5, description: "Chosen UI elements suit their purpose and can be built in App Lab." }
      ]
    },
    {
      week: "10",
      title: "Team Paper Prototype & Test Summary",
      points: 10,
      categories: [
        { name: "Complete user flow", points: 5, description: "Team prototype shows every screen and where each button leads." },
        { name: "Test summary", points: 5, description: "Priority changes are backed by what users did or said during testing." }
      ]
    }
  ]
};
