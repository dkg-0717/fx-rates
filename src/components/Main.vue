<template>
  <main>
    <div class="wrapper">
      <div class="graphic-container">
        <div class="graphic">
          <template v-if="state.error === ''">
            <p class="graphic-title">Graphic</p>
            <div class="c3" id="chart"></div>
          </template>
          <template v-else>
            <Error :msg="state.error" />
          </template>
        </div>
        <div class="compare-container">
          <p class="compare-title">Compare</p>
          <div class="compare-inputs">
            <CompareInputs :rateSelected="rateSelected" :symbols="symbols" :chart="chart" />
          </div>
          <div class="compare-list">
            <CompareList :rateSelected="rateSelected" :chart="chart" />
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="main-container">
        <div class="table-container">
          <ranking-table />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import c3 from "c3";
import { onMounted, inject, ref, reactive } from "vue";
import Error from "./shared/Error.vue";
import CompareInputs from "./CompareInputs.vue";
import CompareList from "./CompareList.vue";
import RankingTable from "./RankingTable.vue";
import { sortRates } from "../utils/sort.js";
import { convertToMXN, convertToArray } from "../utils/convert.js";
import { getSymbols, compareRates, getLatest } from "../services/fixer.js";

const { state, actions, getters } = inject("rates");
const symbols = ref([]);
let chart = ref(null);
let rateSelected = reactive({ name: "" });

const getData = async () => {
  const latest = await getLatest();
  if (!latest.error) {
    symbols.value = convertToArray(latest.rates);
    actions.setRanking(sortRates(latest.rates));
    const data = convertToMXN(latest);
    actions.setRawData(data);
    actions.setRates(data);
  } else {
    actions.setError(latest.error);
    actions.showToast(true);
  }
};

onMounted(async () => {
  await getData();
  const filter = getters.dataToCompare();
  if (filter) {
    chart.value = c3.generate({
      data: {
        columns: filter,
        type: "bar",
      },
      bar: {
        width: {
          ratio: 0.5,
        },
      },
      legend: {
        show: true,
      },
    });
  }
});
</script>