<template>
  <button :class="$style.button">
    <label>{{ textButton }}</label>
  </button>
</template>

<script>
export default {
  props: {
    textButton: String,
  },
};
</script>

<style lang="scss" module>
.button {
  width: 6rem;
  height: 2rem;
  background: rgba($color: #adadad, $alpha: 1);
  border: none;
}
</style>
