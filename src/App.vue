<template>
  <VAppLayout>
    <template #header>
      <VLayout fill horizontal justifyBetween>
        <VNavLink :to="{ name: 'home' }">Home</VNavLink>
        <VNavLink :to="{ name: 'new' }">+ New Task</VNavLink>
      </VLayout>
    </template>
    <RouterView />
  </VAppLayout>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import VAppLayout from './ui-components/VAppLayout.vue';
import VLayout from './ui-components/VLayout.vue';
import VNavLink from './ui-components/VNavLink.vue';
</script>