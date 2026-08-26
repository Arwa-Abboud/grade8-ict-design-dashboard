// Week 14 — Nov 30 – Dec 4 — The Design Process (Code.org CSD Unit 4, Lessons 15-21: Build Digital Prototype, Events,
// Linking Screens, Testing, Bugs and Features, Updating Prototype, App Presentation)
// COMPRESSED FINAL WEEK: with Week 7 = break and Week 15 = exams, the Colorado curriculum's final two
// content-weeks (13 total content weeks for only 12 available calendar slots) are combined here — both
// are continuous parts of the same final build/test/present arc, so nothing new is being added, just
// compressed into the last week before exams. Flag to Arwa: confirm exact dates once the school's Term 1
// exam-week placement is finalized.
G8_WEEKS.push({
  week: 14,
  dates: "Nov 30 – Dec 4",
  status: "content",
  topic: "The Design Process",
  essentialQuestion: "How can events create navigation in an app prototype, and how do we present a full design process, not just the final app?",
  standards: "CS.MS.3.1, CS.MS.3.3, CS.MS.2.2 — CS.MS.3.1: Collaborative development of computational artifacts can be made more efficient by employing project management, crowdsourcing, and feedback. CS.MS.3.3: Programs can combine control structures, including nested loops and compound conditionals, to solve complex problems. CS.MS.2.2: The way that users interact with devices can provide useful information for improving the design.",
  lessonMapping: "Code.org CSD Unit 4, Lessons 15-17: Build Digital Prototype, Events, Linking Screens; Lessons 18-21: Testing, Bugs and Features, Updating Prototype, App Presentation",
  evidenceOutcomes: "CS.MS.3.1 — b. Document programs in order to make them easier to follow, test, and debug. c. Seek and incorporate feedback from team members and users to refine a solution that meets user needs. d. Distribute tasks and maintain a project timeline. CS.MS.3.3 — a. Design and iteratively develop programs that combine control structures. c. Systematically test and refine programs using a range of test cases. CS.MS.2.2 — a. Recommend improvements to the design of computing devices, based on an analysis of how users interact with the devices. c. Discuss issues of bias and accessibility in the design of existing technologies.",
  walt: "We are learning to use events and linked screens to build an interactive prototype, then test, refine, and present it.",
  wilf: [
    "I can build screens and use events to move between them.",
    "I can explain my team's design process, feedback, bugs/features, and final improvements."
  ],
  keyConcepts: ["Event-driven programming", "Screen linking", "Debugging", "Bug/feature prioritization", "Presentation"],
  crossCurricular: "Math/Logic: condition-action thinking; English: user instructions and oral presentation; Design: portfolio.",
  resources: "Code.org Lessons 15-21; App Lab; team task board; presentation template; peer review guide",
  formative: null,
  summative: "App Presentation — final Design Process project checkpoint (design process, feedback, bugs/features, improvements, and reflection)",
  lessons: [
    {
      number: 1,
      title: "Building, Linking & Debugging Your App",
      duration: "~50-60 min",
      objective: "Build the remaining screens of your app and use events to link them into a working, navigable prototype.",
      vocabulary: [
        { term: "Event", definition: "Something that happens when a user does an action — like tapping a button — that tells the app to do something in response." },
        { term: "Link (Screens)", definition: "Connecting one screen to another so tapping something on one screen takes the user to the next." },
        { term: "Debug", definition: "Finding and fixing something that isn't working correctly in your app." }
      ],
      warmup: "Teams pull up their App Lab project from last week — what screens exist so far?",
      main: [
        "Teacher demo: using onEvent blocks to make a button navigate to another screen.",
        "Teams finish building any remaining screens from their tested paper prototype.",
        "Teams add navigation events to link all their screens together.",
        "Teams test their own app: click through every screen to check the navigation actually works, fixing (debugging) any broken links.",
        "Keep a running 'bugs/features' list of anything not yet finished or working — this feeds directly into tomorrow's lesson."
      ],
      code: null,
      task: "Build and link all your app's screens with working navigation events, and keep a running bugs/features list of what's left to fix or add.",
      successChecklist: [
        "All planned screens exist in App Lab.",
        "Navigation between screens works when tested.",
        "Bugs/features list is specific enough to act on tomorrow."
      ],
      exitTicket: "'What's the top item on your bugs/features list going into tomorrow?'",
      notes: "This is a build-heavy work session — expect to circulate constantly for App Lab troubleshooting and pair programming support."
    },
    {
      number: 2,
      title: "Final Testing, Fixes & App Presentation",
      duration: "~50-60 min",
      objective: "Test your app, prioritize and fix remaining issues, then present your full design process to the class.",
      vocabulary: [
        { term: "Bug", definition: "Something in your app that doesn't work the way it's supposed to." },
        { term: "Feature", definition: "Something your app does or offers — a planned capability, whether finished yet or not." },
        { term: "Presentation", definition: "Sharing your work and explaining your process and decisions to an audience." },
        { term: "Reflection", definition: "Thinking back on what you did, what worked, what didn't, and what you'd do differently." }
      ],
      warmup: "Teams review their bugs/features list from yesterday and pick their top priorities for today.",
      main: [
        "Teams run a final round of testing on their app, working through their bugs/features list by priority.",
        "Teams make final updates/fixes where time allows.",
        "Introduce the presentation format: purpose/user need, design process journey, feedback received, bugs/features, final app demo, and one honest reflection.",
        "Teams prepare their presentation using the provided template and assigned roles.",
        "Teams present their app and design process to the class (or in small groups, depending on time)."
      ],
      code: null,
      task: "Finish testing/fixing your app, then present your full design process — not just the final app — using the presentation template.",
      successChecklist: [
        "Presentation covers the full design journey: user need, process, feedback, and final app.",
        "Includes an honest reflection on what worked and what could be improved."
      ],
      exitTicket: "Summative submission: App Presentation (design process, feedback, bugs/features, improvements, reflection). See the Rubrics tab for scoring criteria.",
      notes: "This closes out the Design Process unit before exams. If time is tight, presentations can run in small groups simultaneously rather than one at a time to the whole class."
    }
  ]
});
