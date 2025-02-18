const getExamplePosts = async () => {
  const resp = await useAPI('/posts', { method: 'GET' });
  return resp;
};

export default () => ({
  getExamplePosts,
});
