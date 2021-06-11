<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th :class="{ }">
          <span class="underline cursor-pointer">Ranking</span>
        </th>
        <th>Name</th>
        <th>Price</th>
        <!-- <th>Detail</th> -->
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(r,index) in state.ranking"
        :key="r.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td class="td-ranking">
          <b># {{ index+1 }}</b>
        </td>
        <td class="td-ranking-name">
          <!-- <img
            v-if="`https://static.coincap.io/assets/icons/${getName(r).toLowerCase()}@2x.png`"
            :src="`https://static.coincap.io/assets/icons/${getName(r).toLowerCase()}@2x.png`"
            alt
          />-->
          {{ getName(r) }}
        </td>
        <td>${{getPrice(r)}}</td>
        <!-- <td class="hidden sm:block">
          <button>
            <span>Detalle</span>
          </button>
        </td>-->
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { inject } from "vue";

const { state } = inject("rates");

const getName = (r) => {
  return Object.entries(r)[0][0];
};

const getPrice = (r) => {
  return Object.entries(r)[0][1];
};
</script>