<template>
  <ul>
    <li v-for="(rate,index) in state.compare" :key="index">
      <template v-if="rate !== 'MXN'">
        <div class="cr-list-container">
          <div class="cr-item">
            <span>{{ index}}.-</span>
            <p>{{ rate }}</p>
          </div>
          <div class="cr-delete">
            <button
              class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded"
              @click="removeItem(rate)"
            >remove</button>
          </div>
        </div>
      </template>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, inject } from "vue";

const props = defineProps({
  chart: Object,
});

const { state, actions } = inject("rates");

const removeItem = (rate) => {
  actions.removeRate(rate);
  props.chart.unload({
    ids: [rate],
  });
};
</script>