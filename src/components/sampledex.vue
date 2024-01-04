<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <h1>{{ value }}</h1>
</template>

<script>

export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
};

</script>