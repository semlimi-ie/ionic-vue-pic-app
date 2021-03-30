<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <ion-img :src="singleMemory.image" :alt="singleMemory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ singleMemory.title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
export default {
  props: ["singleMemory"],
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
};
</script>

<style lang="scss" scoped></style>
