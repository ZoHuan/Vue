<template>
  <h2>子级组件</h2>
  <hr />
  <GrandSon />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GrandSon from "./GrandSon.vue";

export default defineComponent({
  name: "Son-",
  components: {
    GrandSon,
  },
});
</script>

<style></style>
