import { ref } from 'vue';
import { defineStore } from 'pinia';
import apiService from '@/services/apiService';

export const usePackagesStore = defineStore('packages', () => {
  const packages = ref([]);
  const currentPackage = ref(null);

  async function packagesByName(packageName: string) {
    await apiService
      .getPackagesByName(packageName)
      .then((value) => {
        packages.value = value.data.objects;
      })
      .catch((error) => {
        console.error('Error', error);
        packages.value = [];
      });
  }

  async function setCurrentPackage(packageName: string) {
    await apiService
      .getPackageDetails(packageName)
      .then((value) => {
        currentPackage.value = value.data;
      })
      .catch((error) => {
        console.error('Error:', error);
        currentPackage.value = null;
      });
  }

  return { packages, currentPackage, packagesByName, setCurrentPackage };
});
