<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <label>ToDos</label>
    </div>
    <div :class="$style.content">
      <form :class="$style.form">
        <Input
          :class="$style.input"
          v-model="text"
          placeholder="Например, покормить кота"
        />
        <Button :class="$style.button" type="submit" textButton="Create" />
      </form>
      <div v-for="post in allTask" :key="post">
        {{ post.task }}
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/basic/Input";
import Button from "@/components/basic/Button";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Input,
    Button,
  },
  computed: mapGetters(["allTask"]),
  data() {
    return {
      task: "",
    };
  },
  methods: {
    ...mapMutations(["createTask"]),
    submit() {
      this.createTask({
        text: this.text,
      });
      this.text = "";
    },
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
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .form {
      display: flex;
      border: 0.1rem solid;
      border-radius: 0.25rem;
      input {
        background: none;
      }
      .button {
        background: none;
        label {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
