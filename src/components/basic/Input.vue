<template>
  <div :class="$style.content">
    <input
      :class="$style.input"
      placeholder="New task"
    />
  </div>
</template>

<style lang="scss" module>
.content {
  width: 100%;
  .input {
    border: none;
    width: 20rem;
    height: 2rem;
    background:rgba($color: #dddddd, $alpha: 1.0);
  }
}
</style>
