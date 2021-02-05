import { v4 as uuidv4 } from "uuid";

export default {
  actions: {},
  mutations: {
    createTask(state, newTask) {
      if (newTask) {
        let task = { task: newTask, id: uuidv4() };
        state.post.unshift(task);
        localStorage.setItem("post", JSON.stringify(state.post));
      }
    },
  },
  state: {
    post: [],
  },
  getters: {
    allTask(state) {
      return state.post;
    },
  },

};
