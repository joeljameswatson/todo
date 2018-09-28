import { v4 } from "node-uuid";

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: "hey",
      completed: true
    },
    {
      id: v4(),
      text: "ho",
      completed: true
    },
    {
      id: v4(),
      text: "let’s go",
      completed: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter => delay(500).then(() => fakeDatabase.todos);
