export default {
    actions: {},
    mutations: {},
    state: {
      post: [{ task: "newTask1" }, { task: "newTask2" }, { task: "newTask3" }],
    },
    getters: {
      allTask(state) {
        return state.post;
      },
    },
  };
  