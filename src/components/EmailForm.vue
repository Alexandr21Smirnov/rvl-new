<template>
  <form class="form">
    <h2>Enter Your Email</h2>
      <input
        placeholder="Enter Valid Email"
        class="input"
        v-model="zipCode"
      />
      <button
        class="btn"
        type="submit"
      >
        Send
      </button>
  </form>
</template>

<script>

export default {
  name: "EmailForm",

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
  width: 250px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
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
