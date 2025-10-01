<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">{{ label }}:</legend>
    <input v-model="model" :type="type" class="input" :placeholder="placeholder" />
  </fieldset>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Entre com o dado',
    required: false,
  },
  placeholder: {
    type: String,
    default: 'Digite aqui',
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
})

const model = defineModel<string | number>({
  type: [String, Number],
})
</script>
