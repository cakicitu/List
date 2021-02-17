<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input type="text" required v-model="enteredName" />
      </ion-item>
      <ion-item>
        <!-- <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" required v-model="enteredImageUrl" /> -->
        <ion-thumbnail slot="start">
          <img :src="takenImageUrl" />
        </ion-thumbnail>
        <ion-button type="button" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
      </ion-item>
      <ion-item>
        <ion-label
          v-for="kontakt in kontakte"
          :key="kontakt.id"
          :kontakt="kontakt"
        >
          {{}}
        </ion-label>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="full">Submit</ion-button>
  </form>
</template>
<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

// import { Plugins } from "@capacitor/core";
const { Contacts, Camera } = Plugins;

// const { Camera } = Plugins;

export default {
  emits: ["save-kontakt"], //änderung
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon,
  },
  data() {
    return {
      contactNumber: "",
      enteredName: "",
      enteredDescription: "",
      enteredImageUrl: "",
      contacts: [],
      // previewImageUrl: null;
      takenImageUrl: null,
      camera,
      Contacts,
    };
  },
  methods: {
    async loadContacts() {
      Contacts().then((results) => {
        console.log(results);
        this.contacts = results.contacts;
      });
    },
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 50,
      });
      this.takenImageUrl = photo.webPath;
    },
    submitForm() {
      const kontaktData = {
        //änderung
        name: this.enteredName,
        imageUrl: this.takenImageUrl,
        description: this.enteredDescription,
      };
      this.$emit("save-kontakt", kontaktData); //änderung
    },
  },
};
</script>
