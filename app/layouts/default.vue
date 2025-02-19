<template>
  <div>
    <div
      class="bg-neutral-white fixed flex w-full items-center justify-start gap-4 px-6 py-4"
    >
      <Icon name="local:vue" class="text-font-brand text-3xl" />
      <span class="text-font-brand text-h2">
        Nuxt Complete Template - v4 compatible
      </span>
    </div>
    <div class="pt-24">
      <slot />
    </div>
  </div>
</template>
