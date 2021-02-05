<template>
  <form @submit.prevent="submit">
    <input
      type="task"
      v-model="task"
      placeholder="Task"
    />
    <button type="submit">Create task</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    ...mapMutations(["createTask"]),
    submit() {
      this.createTask(this.task);
      this.task = "";
    },
  },
  
};
</script>

<style lang="scss">
@import "@/assets/styles/colors.scss";
form {
  display: flex;
  input {
    height: 2rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  button {
    width: 8rem;
    height: 2rem;
    border: none;
    color: $light-gray;
    border-radius: 0.25rem;
    margin-left: 1rem;
  }
}
</style>
