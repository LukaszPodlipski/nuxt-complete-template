<script setup lang="ts">
  import InputText from 'primevue/inputtext';
  import { useExampleStore } from '~/stores/example';

  const exampleStore = useExampleStore();

  /* Fetch data on the server, and store it in the store */
  const { data } = storeToRefs(exampleStore) as {
    data: Ref<Array<{ title: string }>>;
  };

  await useAsyncData('example', () => exampleStore.getExamplePosts()); // To fetch data on the client side add { server: false } or call getExamplePosts on mount

  const formattedData = computed(() => {
    if (!data.value) return null;
    return data.value[0];
  });

  const { value, errorMessage } = useField<string>(
    'Input',
    (inputValue) => !!inputValue
  );
  const { t } = useI18n();
</script>

<template>
  <div class="max-w flex w-full items-center justify-center p-10">
    <div class="flex flex-col items-start p-4">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">Nuxt Icons</h2>
          <div class="flex items-center gap-4">
            <Icon name="local:vue" class="text-primary text-body-l" />
            <span class="text-body-l">Local icon - Vue Icon module</span>
          </div>
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">PrimeVue Unstyled Hybrid Mode</h2>
          <Button
            class="bg-primary text-body-l cursor-pointer rounded-sm px-2 py-3"
            label="+ TailwindCSS"
          />
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">VeeValidate</h2>
          <InputText v-model="value" type="text" :invalid="!!errorMessage" />
          <small
            class="text-body-s"
            :class="errorMessage ? 'text-warning' : 'text-secondary'"
          >
            {{ errorMessage || 'Input valid' }}
          </small>
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">i18n</h2>
          <span class="text-secondary text-body-m">{{ t('example') }}</span>
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">Nuxt Image</h2>
          <NuxtImg
            class="self-center"
            src="/nuxt-logo.png"
            alt="Nuxt Image"
            width="300"
          />
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">Nuxt Fonts</h2>
          <span class="text-secondary text-body-m">Default font: Inter</span>
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">Pinia</h2>
          <NuxtImg
            class="self-center"
            src="https://pinia.vuejs.org/logo.svg"
            alt="Pinia Logo"
            width="50"
          />
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">SSR External API fetch</h2>
          <div v-if="formattedData" class="text-body-m max-w-[300px]">
            {{ formattedData }}
          </div>
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">And more:</h2>
          <span class="text-body-m">- Husky</span>
          <span class="text-body-m">- Vue use</span>
          <span class="text-body-m">- Nuxt Viewport</span>
          <span class="text-body-m">- Eslint + Prettier</span>
        </div>
      </div>
    </div>
  </div>
</template>
