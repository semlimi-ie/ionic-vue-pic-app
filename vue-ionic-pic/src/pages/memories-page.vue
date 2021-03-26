<template>
  <base-layout page-title="All Memories">
    <ion-list>
      <ion-item
        v-for="eachMemory in allMemories"
        :router-link="`/memory-details/${eachMemory.id}`"
        :key="eachMemory.id"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="eachMemory.image" :alt="eachMemory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ eachMemory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  data() {
    return {};
  },
  computed: {
    allMemories() {
      return this.$store.getters.getMemories;
    },
  },
};
</script>

<style scoped></style>
