<template >
  <div class="error-msg">
    <p>{{ msg }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  msg: String,
});
</script>

<style>
.error-msg {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>