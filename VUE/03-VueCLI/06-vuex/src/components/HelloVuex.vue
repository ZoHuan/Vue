<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.overAge }}</h2>
    <h2>{{ $store.state.info }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex"
  //   props: {
  //     counter: Number,
  //   },
};
</script>

<style></style>
