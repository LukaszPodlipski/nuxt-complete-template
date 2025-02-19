<script setup lang="ts">
  type Icons = {
    left?: {
      name: string;
      size?: number;
    };
    right?: {
      name: string;
      size?: number;
    };
  };

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
    icons: {
      type: Object as PropType<Icons>,
      default: () => ({}),
    },
    type: {
      type: String as PropType<'primary' | 'outlined' | 'text'>,
      default: 'primary',
    },
  });
</script>

<template>
  <Button :label="label" :disabled="disabled" :class="[{ loading }, type]">
    <span v-if="loading && icons.left" class="pi pi-spin pi-spinner"></span>
    <Icon
      v-else-if="icons.left"
      :name="`local:${icons.left.name}`"
      :size="icons.left.size ? `${icons.left.size}px` : undefined"
    />
    <span v-if="!loading && label">{{ label }}</span>
    <span v-else-if="label">{{ $t('common.loading') }}...</span>
    <Icon
      v-if="icons.right"
      :name="`local:${icons.right.name}`"
      :size="icons.right.size ? `${icons.right.size}px` : undefined"
    />
  </Button>
</template>
