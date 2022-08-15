<script setup lang="ts">
import { RouterView } from "vue-router";
import { useLocale } from '@/locales/useLocale';

const { getLocale } = useLocale();

</script>

<template>
  <div>{{ getLocale }}</div>
  <RouterView />
</template>
