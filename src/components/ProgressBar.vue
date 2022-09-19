<template>
  <div class="wrapper">
    <div class="progress-bar">
      <div class="bar" :style="barStyles"></div>
    </div>
</div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  },
  computed: {
    barStyles() {
      return {
        width: this.percentage + "%"
      }
    }
  },
  methods: {
    clickHandler(value) {
      this.$emit('submit', value)
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-bar {

  width: 300px;
  height: 10px;
  border-radius: 10px;
  border: none;
  background-color: gray;
}
.bar {
  background-color: green;
  border-radius: 10px;  
  height: 100%;
  width: 0;
  transition: width 2s ease;
 }
</style>
