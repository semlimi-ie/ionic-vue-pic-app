<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :allMemories="allMemoriesList"> </memories-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import MemoriesList from "../components/memories/MemoriesList.vue";

export default {
  components: {
    MemoriesList,
    IonButton,
    IonIcon,
  },
  // mounted() {
  //   console.log("allMemoriesList in mounted", this.allMemoriesList);
  // },
  data() {
    return {
      add,
    };
  },
  computed: {
    allMemoriesList() {
      return this.$store.getters.getMemories;
    },
  },
};
</script>

<style scoped></style>
