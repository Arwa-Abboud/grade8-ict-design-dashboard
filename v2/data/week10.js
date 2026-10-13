// Week 10: Nov 2 – Nov 6: Interactive Animations and Games (Code.org CSD 2026 Unit 3b (Interactive Animations and Games), Lesson 5: Variables; Lesson 6: Random Numbers)
G8_WEEKS.push({
  "week": 10,
  "dates": "Nov 2 – Nov 6",
  "status": "content",
  "topic": "Interactive Animations and Games",
  "essentialQuestion": "How can variables help us store and reuse information in a program? How can randomness make a program behave differently each time it runs?",
  "standards": "CS.MS.1.2, CS.MS.3.1, CS.MS.3.3: CS.MS.1.2: Data can be collected, transformed and analyzed to develop computational models. CS.MS.3.1: Collaborative development of computational artifacts can be made more efficient by employing strategies for project management, crowdsourcing, and feedback. CS.MS.3.3: Programs can combine control structures, including nested loops and compound conditionals, to solve complex problems.",
  "lessonMapping": "Code.org CSD 2026 Unit 3b (Interactive Animations and Games), Lesson 5: Variables; Lesson 6: Random Numbers",
  "evidenceOutcomes": "CS.MS.3.1 Evidence Outcomes - Students Can: b. Document programs in order to make them easier to follow, test, and debug. CS.MS.3.3 Evidence Outcomes - Students Can: a. Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals; c. Systematically test and refine programs using a range of test cases. CS.MS.1.2 Evidence Outcomes - Students Can: a. Collect data using computational tools and transform the data to make it more useful and reliable. CS.MS.3.3 Evidence Outcomes - Students Can: a. Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals; c. Systematically test and refine programs using a range of test cases.",
  "walt": "We are learning to create variables and use them to label values in code. We are learning to use random numbers to create variation in a program.",
  "wilf": [
    "I can create a variable, assign it a value, and use it to control part of a drawing.",
    "I can use randomNumber() with variables to make a program generate different outputs."
  ],
  "keyConcepts": [
    "Variables",
    "Assigning values",
    "Random numbers",
    "Ranges",
    "Testing repeated runs"
  ],
  "crossCurricular": "Math: algebraic thinking; English: clear naming and explanation. Math: probability and number ranges; Science: repeated trials and observation.",
  "resources": "Code.org activities: Code.org 3b Lesson 5: Game Lab online levels, Variables (reference); Code.org 3b Lesson 6: Game Lab online levels, Random Numbers (reference); Code.org lesson slides",
  "formative": "Teacher check: program uses randomNumber() correctly and student explains the range. (Lesson 2)",
  "summative": null,
  "lessons": [
    {
      "number": 1,
      "duration": "~50-60 min",
      "title": "Code.org 3b Lesson 5: Variables",
      "objective": "Learn to create variables and use them to label values in code.",
      "vocabulary": [
        {
          "term": "Variable",
          "definition": "A label for a piece of information used in a program."
        },
        {
          "term": "Assign",
          "definition": "To give a variable a value, using the = sign."
        }
      ],
      "warmup": "Input, output, storage, processing: 'Where does a computer keep information it needs later?'",
      "main": [
        "Introduce variables as labelled storage, using the Introduction to Variables video.",
        "Model var size = 100; and using size as a parameter.",
        "Students predict variable output, modify values, and use variables to control position, size, or color in a scene.",
        "Reflection: why is a good variable name important?"
      ],
      "code": "var size = 100;\nellipse(200, 200, size, size);",
      "task": "Use at least one variable to control the position, size or color of a shape in a drawing.",
      "successChecklist": [
        "I can create a variable and give it a value.",
        "My variable controls part of my drawing."
      ],
      "exitTicket": "Exit ticket: define variable and explain one variable used in their code.",
      "notes": "Support: Provide partially completed code with missing variable names/values. Extension: Students use one variable in more than one place to show reuse and efficiency. This lesson may need the full period because variables are a new concept.",
      "codeOrgActivities": [
        "Game Lab online levels",
        "Variables (reference)"
      ],
      "literacyStrategy": {
        "name": "Frayer Model",
        "note": "Frayer Model for 'Variable': a labelled box for a value, not just any word in the code."
      }
    },
    {
      "number": 2,
      "duration": "~50-60 min",
      "title": "Code.org 3b Lesson 6: Random Numbers",
      "objective": "Learn to use random numbers to create variation in a program.",
      "vocabulary": [
        {
          "term": "Random Number",
          "definition": "A number the computer picks by chance from a range, so the result can change each time the program runs."
        },
        {
          "term": "Range",
          "definition": "The smallest and largest numbers that randomNumber() can choose between."
        }
      ],
      "warmup": "Run the same program three times: 'Why is the picture different each time?'",
      "main": [
        "Introduce randomNumber(min, max) and test it with repeated runs.",
        "Learn to update a value stored in a variable.",
        "Students run programs multiple times, record how outputs change, then use randomNumber() to create a randomized image.",
        "Explain the range you chose and why."
      ],
      "code": "var x = randomNumber(50, 350);\nellipse(x, 200, 60, 60);",
      "task": "Use randomNumber() with variables to make a picture that changes every time it runs.",
      "successChecklist": [
        "My program uses randomNumber() correctly.",
        "I can explain the range I chose."
      ],
      "exitTicket": "Teacher check: program uses randomNumber() correctly and student explains the range.",
      "notes": "Support: Provide a visual number range and starter code with one random value. Extension: Students randomize more than one property, such as size, location, or color. Do not combine with the mini-project. Students need time to experiment and test.",
      "codeOrgActivities": [
        "Game Lab online levels",
        "Random Numbers (reference)"
      ]
    }
  ],
  "planChangeNote": "Plan v2: switched from the Design Process unit to Code.org Unit 3b Interactive Animations and Games (students found the worksheet-heavy unit boring)."
});
