<script setup lang="ts">
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import PackagesTable from '@/components/PackagesTable/PackagesTable.vue';
import PackageModal from '@/components/PackageModal/PackageModal.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
  <v-app>
    <SearchBar />

    <v-main>
      <PackagesTable />
      <PackageModal />
    </v-main>

    <Footer />
  </v-app>
</template>
