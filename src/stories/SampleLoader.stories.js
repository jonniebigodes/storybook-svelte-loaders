import SampleLoaderComponent from "./SampleLoaderComponent.svelte";
import fetch from "node-fetch";

export default {
  component: SampleLoaderComponent,
  title: "LoaderExample",
};

// Initial approach renders undefined
/* 
export const SampleStory = (args, { loaded: { todo } }) => ({
  Component: SampleLoaderComponent,
  props: {
    ...args,
    todo,
  },
});

SampleStory.loaders = [
  async () => ({
    todo: (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json(),
  }),
];


export const SampleStory = (args, { loaded: { todo } }) => {
  console.log(`todo:${JSON.stringify(todo, null, 2)}`);
  return {
    Component: SampleLoaderComponent,
    props: {
      ...args,
      todo,
    },
  };
};
// using async here returns =>todo:[object Promise]
/* SampleStory.loaders = [
  async () => ({
    todo: (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json(),
  }),
]; 

SampleStory.loaders = [
  async () => ({
    todo: await fetchTodo(),
  }),
];

async function fetchTodo() {
  try {
    const fetchRequest = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const response = fetchRequest.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}*/

export const SampleStory = (args, { loaded: { todo } }) => {
  console.log(`todo:${JSON.stringify(todo, null, 2)}`);
  return {
    Component: SampleLoaderComponent,
    props: {
      ...args,
      todo,
    },
  };
};
SampleStory.loaders = [
  async () => ({
    todo: await (
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
    ).json(),
  }),
];

// global (preview.js)
export const AnotherStory = (args, { loaded: { currentUser } }) => {
  console.log(`currentUser:${JSON.stringify(currentUser, null, 2)}`);
  return {
    Component: SampleLoaderComponent,
    props: {
      ...args,
      todo: currentUser,
    },
  };
};

//
