<template>
  <ion-list>
    <kontakte-list-item
      v-for="kontakt in kontakte"
      :key="kontakt.id"
      :kontakt="kontakt"
    ></kontakte-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import KontakteListItem from "./KontakteListItem";
export default {
  props: ["kontakte"], //änderung
  components: {
    IonList,
    KontakteListItem,
  },
};
</script>
