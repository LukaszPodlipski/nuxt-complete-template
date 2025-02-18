<script setup lang="ts">
  import { useExampleStore } from '~/stores/example';

  const exampleStore = useExampleStore();

  /* Fetch data on the server, and store it in the store */
  const { data } = storeToRefs(exampleStore) as {
    data: Ref<Array<{ title: string }>>;
  };

  await useAsyncData('example', () => exampleStore.getExamplePosts()).then(
    () => true
  ); // To fetch data on the client side add { server: false } or call getExamplePosts on mount

  const formattedData = computed(() => {
    if (!data.value) return null;
    return data.value[0];
  });

  const { value: inputValue, errorMessage } = useField<string>(
    'Input',
    (inputValue) => !!inputValue
  );

  const { value: singleSelectValue, errorMessage: singleSelectErrorMessage } =
    useField<string>(
      'Single Select',
      (singleSelectValue) => !!singleSelectValue
    );

  const { value: textAreaValue, errorMessage: textAreaErrorMessage } =
    useField<string>('Text Area', (textAreaValue) => !!textAreaValue);

  const options = [
    { label: 'New York', value: 'NY' },
    { label: 'Los Angeles', value: 'LA' },
    { label: 'Chicago', value: 'CHI' },
  ];

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
          <BaseButton icon="vue" label="Button" />
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-h2-md">VeeValidate</h2>
          <div class="flex flex-col gap-6">
            <BaseField
              v-model="inputValue"
              field-type="text"
              hint="This is a hint"
              placeholder="Placeholder text..."
              :errors="errorMessage"
              :invalid="!!errorMessage"
              label="Input text"
              :icons="{
                left: 'vue',
              }"
            />
            <BaseField
              v-model="singleSelectValue"
              field-type="singleSelect"
              hint="This is a hint"
              placeholder="Placeholder text..."
              :errors="singleSelectErrorMessage"
              label="Single Select"
              :options="options"
              :icons="{
                left: 'vue',
              }"
            />
            <BaseField
              v-model="textAreaValue"
              field-type="textArea"
              hint="This is a hint"
              placeholder="Placeholder text..."
              :errors="textAreaErrorMessage"
              label="Text Area"
            />
          </div>
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
