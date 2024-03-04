<script setup lang="ts">
import { computed } from 'vue';
import { usePackagesStore } from '@/stores/packages';

const store = usePackagesStore();
const packages = computed(() => store.packages);

const headers = [
  { text: 'Package Name', value: 'package.name' },
  { text: 'Author Name', value: 'package.author.name' },
  { text: 'Version', value: 'package.version' },
  { text: 'Actions', value: 'action', sortable: false },
];

const onShowPackageDetailsClick = (packageItem) => {
  store.setCurrentPackage(packageItem.package.name);
};
</script>

<template>
  <v-data-table :headers="headers" :items="packages" :headers-length="80" class="elevation-1">
    <template v-slot:item.action="{ item }">
      <v-btn icon @click="onShowPackageDetailsClick(item)">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>
