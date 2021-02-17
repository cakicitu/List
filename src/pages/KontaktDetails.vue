<template>
  <base-layout
    :page-title="loadedKontakt ? loadedKontakt.title : 'Loading...'"
    page-default-back-link="/kontakte"
  >
    <h2 v-if="!loadedKontakt">Could not find a cantact for the given id.</h2>
    <kontakt-overview
      v-else
      :title="loadedKontakt.title"
      :image="loadedKontakt.image"
      :description="loadedKontakt.description"
    ></kontakt-overview>
  </base-layout>
</template>

<script>
import KontaktOverview from "../components/kontakte/KontaktOverview.vue";
export default {
  components: {
    KontaktOverview,
  },
  data() {
    return {
      kontaktId: this.$route.params.id,
    };
  },
  computed: {
    loadedKontakt() {
      return this.$store.getters.kontakt(this.kontaktId);
    },
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   },
  // },
};
</script>
