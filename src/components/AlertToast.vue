<template>
  <div v-if="toast" class="toast toast-start">
    <div
      class="alert font-bold"
      :style="`background-color: var(--color-base-content); color: black`"
    >
      <span>Tênis {{ productName }} {{ message }} com sucesso!</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  toast: boolean
  productName: string
  message: string
}>()
</script>
