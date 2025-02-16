<script setup lang="ts">
  import InputText from 'primevue/inputtext';

  const { value, errorMessage } = useField<string>(
    'Input',
    (inputValue) => !!inputValue
  );
  const { t } = useI18n();
</script>

<template>
  <div class="flex min-h-screen w-full items-center justify-center p-10">
    <div class="flex flex-col items-start p-4">
      <h1 class="text-2xl font-bold text-white">Nuxt Template</h1>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-3">
          <h2 class="text-2xl font-bold text-white">Nuxt Icons</h2>
          <div class="flex items-center gap-2">
            <Icon name="local:vue" class="text-secondary text-2xl" />
            <span class="text-white">Local icon - Vue Icon module</span>
          </div>
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-2xl font-bold text-white">
            PrimeVue Unstyled Hybrid Mode
          </h2>
          <Button
            class="bg-primary cursor-pointer rounded-sm px-2 py-3 text-white"
            label="+ TailwindCSS"
          />
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-2xl font-bold text-white">VeeValidate</h2>
          <InputText v-model="value" type="text" />
          <small
            class="h-[15px]"
            :class="errorMessage ? 'text-warning' : 'text-secondary'"
          >
            {{ errorMessage || 'Input valid' }}
          </small>
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-2xl font-bold text-white">i18n</h2>
          <span class="text-secondary">{{ t('example') }}</span>
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3">
          <h2 class="text-2xl font-bold text-white">Nuxt Image</h2>
          <NuxtImg
            class="self-center"
            src="/nuxt-logo.png"
            alt="Nuxt Image"
            width="300"
          />
        </div>
        <div class="app-separator" />
        <div class="flex flex-col gap-3 text-white">
          <h2 class="text-2xl font-bold text-white">And more:</h2>
          <span>- Husky</span>
          <span>- Vue use</span>
          <span>- Nuxt Viewport</span>
          <span>- Eslint + Prettier</span>
        </div>
      </div>
    </div>
  </div>
</template>
