let a = [
  {
    Tittle: "Learn JavaScript",
    Content:
      "<h1>Learn JavaScript</h1><p>JavaScript is a high-level, dynamic, and interpreted programming language. It is primarily used for client-side scripting, allowing developers to add interactive elements to websites.</p><ul><li>Variables and Data Types</li><li>Functions and Conditional Statements</li><li>Loops and Arrays</li><li>Object-Oriented Programming</li></ul>",
    Slug: "learn-javascript",
    Views: 100,
    Auther: "John Doe",
    isPublished: true,
  },
  {
    Tittle: "Mastering React",
    Content:
      "<h1>Mastering React</h1><p>React is a JavaScript library for building user interfaces. It's used for handling the view layer for web and mobile apps.</p><ul><li>Components and Props</li><li>State and Lifecycle</li><li>Handling Events</li><li>Conditional Rendering</li></ul>",
    Slug: "mastering-react",
    Views: 50,
    Auther: "Jane Smith",
    isPublished: true,
  },
  {
    Tittle: "Getting Started with Node.js",
    Content:
      "<h1>Getting Started with Node.js</h1><p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It's used for building scalable server-side applications.</p><ul><li>Installing Node.js</li><li>Creating a Node.js Project</li><li>Modules and Dependencies</li><li>Event-Driven Programming</li></ul>",
    Slug: "getting-started-with-nodejs",
    Views: 200,
    Auther: "Bob Johnson",
    isPublished: true,
  },
  {
    Tittle: "Building a RESTful API",
    Content:
      "<h1>Building a RESTful API</h1><p>A RESTful API is an architectural style for designing networked applications. It's based on the idea of resources, which are identified by URIs.</p><ul><li>Defining API Endpoints</li><li>Handling HTTP Requests</li><li>API Security</li><li>API Documentation</li></ul>",
    Slug: "building-a-restful-api",
    Views: 150,
    Auther: "Alice Brown",
    isPublished: true,
  },
  {
    Tittle: "Understanding CSS Grid",
    Content:
      "<h1>Understanding CSS Grid</h1><p>CSS Grid is a two-dimensional layout system for the web. It's used for creating responsive and flexible grid-based layouts.</p><ul><li>Grid Containers and Items</li><li>Grid Template Areas</li><li>Grid Auto-Placement</li><li>Grid Gaps and Gutters</li></ul>",
    Slug: "understanding-css-grid",
    Views: 120,
    Auther: "Mike Davis",
    isPublished: true,
  },
  {
    Tittle: "Introduction to TypeScript",
    Content:
      "<h1>Introduction to TypeScript</h1><p>TypeScript is a superset of JavaScript that adds optional static typing and other features. It's used for building large-scale JavaScript applications.</p><ul><li>Type Annotations</li><li>Interfaces and Classes</li><li>Modules and Dependencies</li><li>Type Inference</li></ul>",
    Slug: "introduction-to-typescript",
    Views: 80,
    Auther: "Emily Chen",
    isPublished: true,
  },
  {
    Tittle: "Building a Chatbot with Node.js",
    Content:
      "<h1>Building a Chatbot with Node.js</h1><p>A chatbot is a computer program that simulates human conversation. It's used for building conversational interfaces for various applications.</p><ul><li>Defining Chatbot Intentions</li><li>Handling User Input</li><li>Generating Responses</li><li>Integrating with Messaging Platforms</li></ul>",
    Slug: "building-a-chatbot-with-nodejs",
    Views: 180,
    Auther: "David Lee",
    isPublished: true,
  },
];
for (let index = 0; index < a.length; index++) {
  const element = a[index];

  const promise = databases.createDocument(
    "66940c2b003dade0f366",
    "66940c3c00336cc1092d",
    ID.unique(),
    element
  );

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
}
