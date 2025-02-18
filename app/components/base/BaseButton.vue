<script setup lang="ts">
  defineProps({
    label: {
      type: String,
      required: false,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'primary' | 'outlined'>,
      default: 'primary',
    },
  });
</script>

<template>
  <Button :label="label" :disabled="disabled" :class="[{ loading }, type]">
    <span v-if="loading && icon" class="pi pi-spin pi-spinner"></span>
    <Icon v-else-if="icon" :name="`local:${icon}`" />
    <span v-if="!loading && label">{{ label }}</span>
    <span v-else-if="label">{{ $t('common.loading') }}...</span>
  </Button>
</template>
