<script setup lang="ts">
import { ref } from 'vue';
import { usePackagesStore } from '@/stores/packages';

const packageName = ref('');
const store = usePackagesStore();

const onSearchClick = () => {
  store.packagesByName(packageName.value);
};
</script>

<template>
  <v-app-bar app>
    <v-text-field
      v-model="packageName"
      label="Search packages"
      single-line
      hide-details
      @keyup.enter="onSearchClick"
    ></v-text-field>

    <v-btn icon @click="onSearchClick">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>
