<template>
  <div>
    <div
      class="bg-background-secondary fixed flex w-full items-center justify-start gap-4 px-6 py-4"
    >
      <Icon name="local:vue" class="text-secondary text-3xl" />
      <span class="text-secondary text-2xl font-bold">
        Nuxt Complete Template - v4 compatible
      </span>
    </div>
    <div class="pt-24">
      <slot />
    </div>
  </div>
</template>
