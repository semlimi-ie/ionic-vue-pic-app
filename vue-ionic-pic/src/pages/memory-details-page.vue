<template>
  <base-layout
    :page-title="loadedMemory.title"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find the memory for the given id.</h2>
    <memory-overview
      v-else
      :title="loadedMemory.title"
      :description="loadedMemory.description"
      :image="loadedMemory.image"
    >
    </memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview.vue";
export default {
  components: {
    MemoryOverview,
  },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.getMemoryById(this.memoryId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
