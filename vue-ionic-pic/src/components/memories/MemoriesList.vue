<template>
  <ion-list>
    <memory-list-item
      v-for="eachMemory in allMemories"
      :key="eachMemory.id"
      :singleMemory="eachMemory"
      :router-link="`/memory-details/${eachMemory.id}`"
    ></memory-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import MemoryListItem from "./MemoryListItem.vue";
export default {
  props: ["allMemories"],
  components: {
    IonList,
    MemoryListItem,
  },
};
</script>

<style lang="scss" scoped></style>
