<template>
  <div id="main-page">
    <right-side-bar></right-side-bar>
    <nav-bar></nav-bar>
    <side-bar></side-bar>

    <div id="article-element">
      <article-card
        v-for="card in cards"
        :key="card.id"
        :title-data="card.titleData"
        :quality-data="card.qualityData"
        :time-data="card.timeData"
        :price-data="card.priceData"
      ></article-card>
    </div>
  </div>
</template>

<script>
import ArticleCard from "./components/ArticleCard.vue";
import NavBar from "./components/NavBar.vue";
import RightSideBar from "./components/RightSideBar.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    ArticleCard,
    NavBar,
    SideBar,
    RightSideBar,
  },

  data() {
    return {
      cards: [
        {
          id: 1,
          titleData: "MK4 2004",
          qualityData: "Koristeno",
          timeData: "21.1.2020",
          priceData: "2000",
          imageData: "",
        },
        {
          id: 2,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "45000",
          imageData: "",
        },
        {
          id: 3,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "800000",
          imageData: "", //nezz kako da
          //bindam slike kao ostale data elemente
        },
        {
          id: 4,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "1000",
          imageData: "",
        },
        {
          id: 1,
          titleData: "MK4 2004",
          qualityData: "Koristeno",
          timeData: "21.1.2020",
          priceData: "2000",
          imageData: "",
        },
        {
          id: 2,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "45000",
          imageData: "",
        },
        {
          id: 3,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "800000",
          imageData: "", //nezz kako da
          //bindam slike kao ostale data elemente
        },
        {
          id: 4,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "1000",
          imageData: "",
        },
        {
          id: 1,
          titleData: "MK4 2004",
          qualityData: "Koristeno",
          timeData: "21.1.2020",
          priceData: "2000",
          imageData: "",
        },
        {
          id: 2,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "45000",
          imageData: "",
        },
        {
          id: 3,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "800000",
          imageData: "", //nezz kako da
          //bindam slike kao ostale data elemente
        },
        {
          id: 4,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "1000",
          imageData: "",
        },
        {
          id: 1,
          titleData: "MK4 2004",
          qualityData: "Koristeno",
          timeData: "21.1.2020",
          priceData: "2000",
          imageData: "",
        },
        {
          id: 2,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "45000",
          imageData: "",
        },
        {
          id: 3,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "800000",
          imageData: "", //nezz kako da
          //bindam slike kao ostale data elemente
        },
        {
          id: 4,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "1000",
          imageData: "",
        },
        {
          id: 1,
          titleData: "MK4 2004",
          qualityData: "Koristeno",
          timeData: "21.1.2020",
          priceData: "2000",
          imageData: "",
        },
        {
          id: 2,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "45000",
          imageData: "",
        },
        {
          id: 3,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "800000",
          imageData: "", //nezz kako da
          //bindam slike kao ostale data elemente
        },
        {
          id: 4,
          titleData: "MK5 2014",
          qualityData: "Novo",
          timeData: "21.1.2020",
          priceData: "1000",
          imageData: "",
        },
      ],
    };
  },
};
</script>

<style>
#right-bar {
  border: 1px solid black;
  height: 50px;
}

#article-element {
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  width: 55%;
}

#nav-bar {
  display: flex;
  justify-content: center;
}

#main-page {
  justify-content: center;
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
