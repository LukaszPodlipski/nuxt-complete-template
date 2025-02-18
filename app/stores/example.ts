import useExampleApi from '~/api/useExampleApi';

const { getExamplePosts } = useExampleApi();

export const useExampleStore = defineStore('example', {
  state: () => ({
    data: <unknown>null,
  }),
  actions: {
    async getExamplePosts() {
      const resp = await getExamplePosts();
      this.data = resp;
      return resp;
    },
  },
});
