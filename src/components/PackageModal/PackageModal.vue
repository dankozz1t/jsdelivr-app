<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { usePackagesStore } from '@/stores/packages';

const store = usePackagesStore();
const dialog = ref(false);
const packageDetails = computed(() => store.currentPackage);

watch(
  () => store.currentPackage,
  (newValue) => {
    if (newValue) {
      dialog.value = true;
    }
  },
);
</script>

<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title>
        <h2 class="headline">{{ packageDetails.name }}</h2>
      </v-card-title>

      <v-card-text>
        <div v-if="packageDetails.description" class="mb-5">
          <h3>Description</h3>
          <p>{{ packageDetails.description }}</p>
        </div>

        <div v-if="packageDetails.homepage" class="mb-5">
          <h3>HomePage</h3>
          <a :href="packageDetails.homepage"> {{ packageDetails.homepage }}</a>
        </div>

        <div v-if="packageDetails.author" class="mb-5">
          <h3>Author</h3>
          <p>{{ packageDetails.author.name }}</p>
        </div>

        <div v-if="packageDetails.keywords">
          <h3>Keywords</h3>
          <v-item-group multiple>
            <v-item v-for="keyword in packageDetails.keywords" :key="keyword">
              <v-chip class="ma-1">
                {{ keyword }}
              </v-chip>
            </v-item>
          </v-item-group>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
