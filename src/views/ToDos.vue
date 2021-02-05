<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <label>ToDos</label>
    </div>
    <div :class="$style.content">
      <TaskForm />
      <div :class="$style.list">
        <div v-for="post in allTask" :key="post.task">
          <p :class="$style.task" v-if="post.task">{{ post.task }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm";
import { mapGetters } from "vuex";
export default {
  components: {
    TaskForm,
  },
  computed: mapGetters(["getActivities", "allTask"]),
  data() {
    return {
      task: "",
    };
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/fonts";
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .header {
    background: $gray;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    label {
      color: white;
    }
  }
  .content {
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 18rem;
      margin: 1rem;
      .task {
        color: $dark-gray;
        padding: 0.5rem 0.5rem 0;
        box-shadow: inset 0px -1px 0px 0px rgb(0 0 0 / 20%);
        box-sizing: border-box;
      }
    }
  }
}
</style>
