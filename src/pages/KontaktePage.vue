<template>
  <base-layout page-title="All Contacs">
    <template v-slot:actions-end>
      <ion-button router-link="/kontakte/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <kontakte-list :kontakte="kontakte"></kontakte-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import KontakteList from "../components/kontakte/KontakteList.vue";
export default {
  components: {
    KontakteList,
    IonButton,
    IonIcon,
  },
  data() {
    return { add };
  },
  computed: {
    kontakte() {
      return this.$store.getters.kontakte;
    },
  },
};
</script>
