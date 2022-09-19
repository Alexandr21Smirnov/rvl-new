<template>
  <div class="wrapper">
    <h3 class="title">Due to the time...<br>some movers are currently offline</h3>
    <p class="text" style="color:grey">In order to receive an exact quote,<br>Movers must gather some final<br>details of your move.</p>
    <div class="text">Would you like additional movers to<br> Provide quotes in the morning?</div>
      <button
        class="btn"
        type="submit"
      >
        Yes
      </button>
      <button
        class="btn-no"
        type="submit"
      >
        No
      </button>
  </div>
</template>

<script>

export default {
  name: "OfflineCard",

  data() {
    return {
      calculate: null
    }
  },
  methods: {
    clickHandler() {
      this.$emit('submit', calculate )
    }
  }
};
</script>

<style scoped>
.wrapper {
  background-color: #112541;
  padding: 10px 5px 20px 5px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.title {
  margin-bottom: 15px;
  line-height: 30px;
}
.text {
  margin-bottom: 15px;
  line-height: 21px;
}
.input {
  background-color: white;
  width: 100px;
  border-radius: 5px;
  margin-right: 10px;
  border: none;
  padding: 10px 5px;
}
.btn {
  color: white;
  width: 100px;
  border-radius: 5px;
  border: none;
  background-color: rgb(227, 125, 0);
  padding: 10px 5px;
  margin-top: 10px;
  cursor: pointer;
}
.btn-no {
  color: white;
  width: 100px;
  border-radius: 5px;
  border: 1px solid grey;
  background-color: transparent;
  padding: 10px 5px;
  margin-top: 15px;
  cursor: pointer;
}
</style>
