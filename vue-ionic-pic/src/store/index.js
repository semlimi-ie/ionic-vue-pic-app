import { createStore } from "vuex";
// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

const store = createStore({
  // const store = new Vuex.Store({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1800&h=1200&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F07%2F21%2Fcascade-mountains-range-USMNTNS0720.jpg",
          title: "A trip to the mountains",
          description: "It was a really nice trip!",
        },
        {
          id: "m2",
          image:
            "https://blog1.fkimg.com/wp-content/uploads/2019/06/ka-anapali-beach-610x350.jpg",
          title: "Surfing the sea side",
          description: "Feeling the cool breeze",
        },
        {
          id: "m3",
          image:
            "https://indonesiaexpat.id/wp-content/uploads/2017/04/Malaysian-Peranakan-Cuisine-Image-via-Lipstiq.jpg",
          title: "Good eating",
          description: "So yummy!!",
        },
      ],
    };
  },

  getters: {
    getMemories(state) {
      return state.memories;
    },
    getMemoryById(state) {
      return (memoryId) => {
        return state.memories.find(
          (singleMemory) => singleMemory.id === memoryId
        );
      };
    },
  },
  mutations: {
    ADD_MEMORY(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        image: memoryData.imageUrl,
        title: memoryData.title,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory({ commit }, memoryData) {
      commit("ADD_MEMORY", memoryData);
    },
  },
});

export default store;
