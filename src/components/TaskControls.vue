<template>
  <VLayout horizontal justifyBetween>
    <VLayout horizontal itemsCenter gapSmall>
      <VStatusButton
        :active="controls.filterBy === 'all'"
        @click="controls.filterBy = 'all'"
      >
        <VText small>All</VText>
      </VStatusButton>
      <VStatusButton
        :active="controls.filterBy === 'active'"
        @click="controls.filterBy = 'active'"
      >
        <VText small>Active</VText>
      </VStatusButton>
      <VStatusButton
        :active="controls.filterBy === 'done'"
        @click="controls.filterBy = 'done'"
      >
        <VText small>Completed</VText>
      </VStatusButton>
    </VLayout>
    <VLayout horizontal itemsCenter gapSmall>
      <VStatusButton
        :active="controls.sortBy === 'priority'"
        @click="controls.sortBy = 'priority'"
      >
        <VText small>Sort by priority</VText>
      </VStatusButton>
      <VStatusButton
        :active="controls.sortBy === 'dueDate'"
        @click="controls.sortBy = 'dueDate'"
      >
        <VText small>Sort by due date</VText>
      </VStatusButton>
    </VLayout>
  </VLayout>
</template>
<script setup lang="ts">
import { useControlsStore } from "@/stores";

import VStatusButton from "../ui-components/VStatusButton.vue";
import VText from "@/ui-components/VText.vue";
import VLayout from "../ui-components/VLayout.vue";

const controls = useControlsStore();
</script>