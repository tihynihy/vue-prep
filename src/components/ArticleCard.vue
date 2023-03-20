<template>
  <div id="main-con">
    <div id="card">
      <div id="img-con">
        <img src="../assets/golf.jpeg" alt="" />
      </div>
      <div id="about-article">
        <div id="title-con">Model: {{ titleData }}</div>
        <div id="detail-con">
          <div id="quality-con">Quality: {{ qualityData }}</div>
          <div id="row-info">
            <div id="time-con">Time: {{ timeData }}</div>
            <div id="price-con">{{ priceData }} KM</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["titleData", "qualityData", "timeData", "priceData"],

  data() {
    return {};
  },
};
</script>
<style>
#quality-con {
  text-align: left;
  margin-left: 5px;
}

#title-con {
  text-align: left;
  margin-left: 5px;
}

#about-article {
  margin-top: 20px;
}

#row-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px;
  margin-left: 5px;
}

#card {
  display: flex;
  flex-direction: column;
}

#img-con img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  border: 1px solid black;
}

#img-con {
  width: 250px;
  height: 150px;
}

#main-con {
  display: flex;
  justify-content: center;
  margin: 2px;
}

#card {
  width: 250px;
  height: 250px;
  border: 2px solid black;
  background-color: rgb(186, 240, 186);
  border-radius: 10px;
}

#card:hover {
  background-color: aquamarine;
  transform: scale(1.5);
}
</style>