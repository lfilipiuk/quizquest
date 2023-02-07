const flashcardData = [
  {
    category: "HTML Fundamentals",
    description:
      "HTML is the standard markup language for creating web pages and web applications.",
    flashcards: [
      {
        id: 1,
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
      },
      {
        id: 2,
        question: "What is an HTML tag?",
        answer:
          "An HTML tag is a code that defines the structure and content of a web page",
      },
      {
        id: 3,
        question: "What is an HTML element?",
        answer:
          "An HTML element is a combination of an HTML tag, its attributes, and its content",
      },
      {
        id: 4,
        question: "What is the purpose of the <head> element in HTML?",
        answer:
          "The <head> element in HTML contains information about the document that is not displayed on the web page",
      },
      {
        id: 5,
        question: "What is the purpose of the <body> element in HTML?",
        answer:
          "The <body> element in HTML contains the content of the web page that is displayed to the user",
      },
      {
        id: 6,
        question: "What is the purpose of the <h1> to <h6> elements in HTML?",
        answer:
          "The <h1> to <h6> elements in HTML are used to create headings for different sections of a web page",
      },
      {
        id: 7,
        question: "What is the purpose of the <p> element in HTML?",
        answer: "The <p> element in HTML is used to create paragraphs of text",
      },
      {
        id: 8,
        question: "What is the purpose of the <ul> element in HTML?",
        answer:
          "The <ul> element in HTML is used to create an unordered list of items",
      },
      {
        id: 9,
        question: "What is the purpose of the <ol> element in HTML?",
        answer:
          "The <ol> element in HTML is used to create an ordered list of items",
      },
      {
        id: 10,
        question: "What is the purpose of the <li> element in HTML?",
        answer:
          "The <li> element in HTML is used to create a list item in a <ul> or <ol> element",
      },
    ],
  },
  {
    category: "CSS Fundamentals",
    description:
      "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
    flashcards: [
      {
        id: 11,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
      },
      {
        id: 12,
        question: "What is the purpose of CSS in web development?",
        answer:
          "CSS is used to control the appearance of a web page, including layout, colors, and font styles.",
      },
      {
        id: 13,
        question: "How do you apply CSS styles to a web page?",
        answer:
          "CSS styles can be applied to a web page in three ways: inline styles, internal stylesheets, and external stylesheets.",
      },
      {
        id: 14,
        question: "What is the syntax for writing CSS selectors?",
        answer: "CSS selectors use the syntax `element{property: value;}`.",
      },
      {
        id: 15,
        question: "What is the syntax for specifying a class selector in CSS?",
        answer:
          "Class selectors use the syntax `.class-name{property: value;}`.",
      },
      {
        id: 16,
        question: "What is the syntax for specifying an id selector in CSS?",
        answer: "ID selectors use the syntax `#id-name{property: value;}`.",
      },
      {
        id: 17,
        question:
          "What is the difference between class and id selectors in CSS?",
        answer:
          "Class selectors can be used multiple times on a page, while id selectors should only be used once. ID selectors have a higher specificity than class selectors.",
      },
      {
        id: 18,
        question: "What is the CSS box model?",
        answer:
          "The CSS box model refers to the layout of HTML elements on a page. It consists of content, padding, borders, and margins.",
      },
      {
        id: 19,
        question: "What is the difference between padding and margin in CSS?",
        answer:
          "Padding is the space within an element, between the element's content and its border. Margin is the space outside of an element, surrounding the element and its border.",
      },
      {
        id: 20,
        question: "What is the purpose of the CSS clear property?",
        answer:
          "The clear property is used to specify on which sides of an element other floating elements are not allowed to float.",
      },
    ],
  },
  {
    category: "React Fundamentals",
    description: "React is a JavaScript library for building user interfaces.",
    flashcards: [
      {
        id: 21,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
      },
      {
        id: 22,
        question: "What are the benefits of using React?",
        answer:
          "React offers several benefits, including improved performance, increased modularity and easier maintenance.",
      },
      {
        id: 23,
        question: "What is a component in React?",
        answer:
          "A component in React is a reusable piece of UI code that encapsulates logic and presentation.",
      },
      {
        id: 24,
        question: "What is JSX?",
        answer:
          "JSX is a syntax extension for JavaScript that allows you to write HTML-like elements in your React components.",
      },
      {
        id: 25,
        question: "What is a state in React?",
        answer:
          "A state in React is an object that holds data that can change over time and can be used to render a component.",
      },
      {
        id: 26,
        question: "What is a prop in React?",
        answer:
          "A prop in React is a property passed from a parent component to a child component.",
      },
      {
        id: 27,
        question: "What is the difference between state and props in React?",
        answer:
          "State is data that can change within a component, while props are data passed from a parent component to a child component.",
      },
      {
        id: 28,
        question: "What is a hook in React?",
        answer:
          "A hook in React is a special function that allows you to add state and other React features to functional components.",
      },
      {
        id: 29,
        question: "What is the Virtual DOM in React?",
        answer:
          "The Virtual DOM in React is a lightweight representation of the actual DOM that can be efficiently updated.",
      },
      {
        id: 30,
        question: "What is the purpose of React Router?",
        answer:
          "React Router is a library for managing client-side routing in React applications.",
      },
    ],
  },
];

export default flashcardData;
