// Grade 8 ICT/Design — Term 1 (The Design Process) rubrics and formative scoring guides.
// Plain, skills-based language (not raw standards codes) — same style as the Design 1 project.
// Kept intentionally simple per Arwa's instruction; easy to edit/expand later.
var RUBRICS = {
  summative: {
    title: "App Presentation — Design Process Final Project",
    subtitle: "Summative Checkpoint — Week 14 — 100 points — closes out the Design Process unit",
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
        name: "Presentation Delivery",
        points: 15,
        levels: [
          { label: "Exceeds Expectations", range: "14-15", description: "Presents clearly and confidently, covering every part of the required format within time." },
          { label: "Meets Expectations", range: "11-13", description: "Presents clearly with most required parts covered." },
          { label: "Approaching Expectations", range: "7-10", description: "Presentation is unclear, disorganized, or missing key parts." },
          { label: "Beginning", range: "0-6", description: "Presentation is missing or does not communicate the project." }
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
      week: "10",
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
      title: "Prototype & Reflection",
      points: 10,
      categories: [
        { name: "Prototype effort", points: 5, description: "A genuine attempt to address the chosen need, not just decoration." },
        { name: "Reflection quality", points: 5, description: "Design rationale clearly explains a change and links it to feedback/user need." }
      ]
    },
    {
      week: "6",
      title: "Usability Notes & Redesign",
      points: 10,
      categories: [
        { name: "Usability observations", points: 5, description: "Notes are specific and evidence-based, not just 'good' or 'bad'." },
        { name: "Redesign quality", points: 5, description: "Redesign clearly fixes the specific issue identified during testing." }
      ]
    },
    {
      week: "8",
      title: "Feedback Categories & Improvement",
      points: 10,
      categories: [
        { name: "Categorization", points: 5, description: "Feedback is sorted into logical, clearly labeled categories." },
        { name: "Improvement justification", points: 5, description: "Chosen improvement is clearly linked to specific feedback received." }
      ]
    },
    {
      week: "9",
      title: "App Idea & User Need",
      points: 10,
      categories: [
        { name: "Need statement evidence", points: 5, description: "Need statements are backed by specific evidence from the interview text." },
        { name: "App idea relevance", points: 5, description: "App idea is clearly and directly linked to the identified need." }
      ]
    },
    {
      week: "11",
      title: "Market Research & Feature List",
      points: 10,
      categories: [
        { name: "Research quality", points: 5, description: "Comparison identifies real strengths/gaps in a competitor app." },
        { name: "Feature list revision", points: 5, description: "Revised feature list shows clear evidence of learning from research." }
      ]
    },
    {
      week: "12",
      title: "UI Elements & Annotations",
      points: 10,
      categories: [
        { name: "Appropriate UI element use", points: 5, description: "Added elements are appropriate for their purpose, not just decoration." },
        { name: "Annotation clarity", points: 5, description: "Annotations clearly explain each element's role." }
      ]
    },
    {
      week: "13",
      title: "Test Summary & Digital Screens",
      points: 10,
      categories: [
        { name: "Test summary clarity", points: 5, description: "Test summary clearly identifies priority changes for the digital version." },
        { name: "Digital screen progress", points: 5, description: "At least one screen exists in App Lab reflecting testing feedback." }
      ]
    }
  ]
};
