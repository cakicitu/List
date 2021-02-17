<template>
  <base-layout page-title="Add a Contact" page-default-back-link="/kontakte">
    <create-kontakte-form @save-kontakt="saveKontakt"></create-kontakte-form>
  </base-layout>
</template>
<script>
import BaseLayout from "../components/base/BaseLayout.vue";
import CreateKontakteForm from "../components/kontakte/CreateKontaktForm.vue";
export default {
  components: {
    BaseLayout,
    CreateKontakteForm,
  },
  methods: {
    saveKontakt(kontaktData) {
      this.$store.dispatch("addKontakt", kontaktData);
      this.$router.replace("/kontakte");
    },
  },
};
</script>
