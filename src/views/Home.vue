<template>
  <div class="home">
    <ToDos />
  </div>
</template>

<script>
// @ is an alias to /src
import ToDos from "./ToDos.vue";

export default {
  name: "Home",
  components: {
    ToDos,
  },
};
</script>
