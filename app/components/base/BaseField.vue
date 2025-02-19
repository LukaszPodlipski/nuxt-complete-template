<script setup lang="ts">
  import type { Option } from '@/app/types/common';

  const emit = defineEmits(['update:modelValue']);

  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Array] as PropType<string | string[] | number | number[]>,
      required: false,
      default: '',
    },
    fieldType: {
      type: String as PropType<'text' | 'singleSelect' | 'textArea'>,
      required: false,
      default: 'text',
    },
    errors: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    fieldProps: {
      type: Object,
      default: () => {},
    },
    icons: {
      type: Object as PropType<{
        left?: string;
        right?: string;
      }>,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array as PropType<(Option<string | number | boolean> | string)[]>,
      default: () => [],
    },
  });

  /* Models */
  const textModelValue = computed(() => {
    return props.modelValue as string;
  });

  const singleselectModelValue = computed(() => {
    return props.modelValue as string | boolean;
  });

  /* Options */
  const parsedOptions = computed<Option<number | string | boolean>[]>(() => {
    return props.options.map((option) => {
      if (typeof option === 'string') {
        return { label: option, value: option };
      }
      return option;
    });
  });

  /* Utils */
  const defaultProps = computed(() => ({
    errors: props.errors,
    placeholder: props.placeholder,
    class: props.errors ? 'p-invalid' : '',
  }));

  const hintColorClass = computed(() => {
    if (props.disabled) return 'text-neutral-300';
    if (props.errors) return 'text-red-strong';
    return 'text-neutral-700';
  });

  const getOptionLabel = (value: string | number | boolean) => {
    const option = parsedOptions.value.find((option) => option.value === value);
    return option?.label;
  };
</script>

<template>
  <div class="field flex flex-col gap-1">
    <label class="text-body-m-md text-black">{{ label }}</label>
    <!-- Input Text -->
    <IconField
      v-if="fieldType === 'text'"
      :class="{
        'p-invalid': !!errors,
        'p-filled': !!textModelValue,
        'p-disabled': disabled,
      }"
    >
      <InputIcon v-if="icons.left">
        <Icon class="text-body-l" :name="`local:${icons.left}`" />
      </InputIcon>
      <InputText
        :model-value="textModelValue"
        v-bind="{ ...defaultProps, ...fieldProps }"
        type="text"
        @update:model-value="$emit('update:modelValue', $event)"
      />
      <InputIcon v-if="icons.right">
        <Icon class="text-body-l" :name="`local:${icons.right}`" />
      </InputIcon>
    </IconField>
    <!-- Single Select -->
    <Select
      v-else-if="fieldType === 'singleSelect'"
      :model-value="singleselectModelValue"
      :options="parsedOptions"
      option-label="label"
      option-value="value"
      :disabled="disabled"
      v-bind="{ ...defaultProps, ...fieldProps }"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <template #value="{ value }">
        <Icon class="text-body-l" :name="`local:${icons.left}`" />
        {{ value ? getOptionLabel(value) : placeholder }}
      </template>
    </Select>
    <!-- Text Area -->
    <Textarea
      v-if="fieldType === 'textArea'"
      v-model="textModelValue"
      rows="5"
      cols="30"
      v-bind="{ ...defaultProps, ...fieldProps }"
      @update:model-value="$emit('update:modelValue', $event)"
    />

    <div v-if="errors || hint" class="text-body-s flex items-center gap-1">
      <Icon :class="hintColorClass" name="local:info" class="text-body-m" />
      <span :class="hintColorClass">
        {{ errors || hint }}
      </span>
    </div>
  </div>
</template>
