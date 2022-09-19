<template>
  <form class="form">
    <h2>Where Are You Moving To</h2>
    <div class="form-wrapper">
      <input
        placeholder="Type ZIP/City"
        class="input"
        v-model="zipCode"
      />
      <button
        class="btn"
        type="submit"
      >
        Calculate
      </button>
    </div>
  </form>
</template>

<script>

export default {
  name: "MoveToForm",

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
.form {
  background-color: #112541;
  padding: 10px 5px 20px 5px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
h2 {
  color: white;
  margin-bottom: 15px;
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
  cursor: pointer;
}
</style>
