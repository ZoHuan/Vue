<template>
  <button @click="modalOpen = true">打开一个对话框</button>

  <Teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>这是对话框</div>
      <button @click="modalOpen = false">关闭</button>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ModalButton",
  setup() {
    const modalOpen = ref(false);
    return {
      modalOpen,
    };
  },
});
</script>

<style>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
