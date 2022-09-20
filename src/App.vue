<template>
  <div class="wrapper">
      <HomeLayout>
          <MovingCalculator/>
      </HomeLayout>
  </div>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout";
import MovingCalculator from "@/views/Calculator/MovingCalculator";
export default {
  name: "App",
  components: {
      HomeLayout,
      MovingCalculator
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  min-height: 100vh;
  color: white;
}
.wrapper {
  min-height: 100vh;
}
</style>
