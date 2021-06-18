import fetch from 'node-fetch';

async function fetchTopTodo() {
  try {
    const fetchRequest = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const response = fetchRequest.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const loaders = [
  async () => ({
    currentUser: await fetchTopTodo(),
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}