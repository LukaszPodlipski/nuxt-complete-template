import humps from 'humps';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    onRequest: async (config) => {
      ///////////////////////// PARAMS TRANSFORMATION //////////////////////////////////////
      const { body, params, query } = config.options;
      if (body) {
        if (!(body instanceof FormData)) {
          config.options.body = humps.decamelizeKeys(body);
        }
      }
      if (params) {
        if (!(params instanceof FormData)) {
          config.options.params = humps.decamelizeKeys(params);
        }
      }
    },
    onResponse: (config) => {
      ///////////////////////// PARAMS TRANSFORMATION //////////////////////////////////////
      config.response._data = humps.camelizeKeys(config.response._data);
    },
  });

  return {
    provide: {
      api,
    },
  };
});
