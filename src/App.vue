<template>
  <Header />
  <RouterView />
  <Footer />

</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'TildaSans', Arial, sans-serif;
  color: goldenrod;
	display: flex;
	flex-direction: column;
	min-height: 100%;
}

.width100 {
    width: 100%;
}

html,
body {
	height: 100%;
  background-color: #111;
}

.content {
	flex: 1 0 auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: goldenrod;
}

a:hover {
  color: gold;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
}

@font-face {
  font-family: "JACKPORT";
  src: local("JACKPORT"),
    url(./fonts/Jackport/JACKPORT_REGULAR_NCV.ttf) format("truetype");
}

@font-face {
  font-family: "Actay";
  src: local("Actay"),
    url(./fonts/Actay/ActayWide-Bold.otf) format("truetype");
}

@font-face {
  font-family: "Versus";
  src: local("Versus"),
    url(./fonts/Versus/versus.otf) format("truetype");
}

@font-face {
  font-family: "Jost";
  src: local("Jost"),
    url(./fonts/Jost/Jost-VariableFont_wght.ttf) format("truetype");
}

@media (max-width: 1200px) and (min-width: 768px) {
  .container {
    padding: 0% 2% 0;
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  .container {
    padding: 0% 2% 0;
  }
}

</style>
