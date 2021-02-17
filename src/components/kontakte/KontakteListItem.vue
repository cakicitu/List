<template>
  <ion-item :router-link="`/kontakte/${kontakt.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="kontakt.image" :alt="kontakt.name"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ kontakt.name }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
export default {
  props: ["kontakt"],
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
};
</script>
