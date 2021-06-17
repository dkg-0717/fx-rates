<template>
  <input
    class="symbols-input"
    list="elements"
    autocomplete="off"
    v-model="rateSelected.name"
    :disabled="symbols.length === 0"
  />
  <datalist id="elements">
    <option v-for="(element,index) in symbols" :key="index" :value="element.name"></option>
  </datalist>
  <button
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
    @click="addFxRate"
    :disabled="symbols.length === 0"
  >add to compare</button>
</template>

<script setup>
import { defineProps, inject } from "vue";

const { actions, getters } = inject("rates");

const props = defineProps({
  chart: Object,
  symbols: Object,
  rateSelected: Object,
});
console.log(props);
const addFxRate = () => {
  const isValid = getters.validRate(props.rateSelected.name);
  if (isValid) {
    const response = actions.addRateToCompare(props.rateSelected.name);
    if (response) {
      const lastRate = getters.lastRate(props.rateSelected.name);
      props.chart.load({
        columns: lastRate,
      });
    }
    props.rateSelected.name = "";
  } else {
    props.rateSelected.name = "";
  }
};
</script>