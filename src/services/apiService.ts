import axios from 'axios';

const apiRegistry = axios.create({
    baseURL: 'https://registry.npmjs.org',
});

export default {
    async getPackagesByName(packageName: string) {
        return await apiRegistry.get(`/-/v1/search?text=${packageName}`);
    },

    async getPackageDetails(packageName: string) {
        return await apiRegistry.get(`/${packageName}`);
    },
};
