import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      kontakte: [
        {
          id: "m1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg",
          name: "Person 1",
          description: "Beschreibung 1",
        },
        {
          id: "m2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg",
          name: "Person 2",
          description: "Beschreibung 2",
        },
        {
          id: "m3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg",
          name: "Person 3",
          description: "Beschreibung 3",
        },
      ],
    };
  },
  mutations: {
    addKontakt(state, kontaktData) {
      const newKontakt = {
        id: new Date().toISOString(),
        name: kontaktData.name,
        image: kontaktData.imageUrl,
        description: kontaktData.description,
      };

      state.kontakte.unshift(newKontakt);
    },
  },
  actions: {
    addKontakt(context, kontaktData) {
      context.commit("addKontakt", kontaktData);
    },
  },
  getters: {
    kontakte(state) {
      return state.kontakte;
    },
    kontakt(state) {
      return (kontaktId) => {
        return state.kontakte.find((kontakt) => kontakt.id === kontaktId);
      };
    },
  },
});

export default store;
