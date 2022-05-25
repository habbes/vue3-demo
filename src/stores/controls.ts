import { reactive } from "vue";
import type { FilterBy, SortBy } from "@/core";

function createControlsStore() {
  const controls = reactive({
    filterBy: 'all' as FilterBy,
    sortBy: 'priority' as SortBy,
  })

  return controls;
}

const controls = createControlsStore();

export const useControlsStore = () => controls;
