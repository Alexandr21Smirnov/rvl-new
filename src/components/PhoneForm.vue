<template>
  <form class="form">
    <h2>What Is The Best Number<br>To Reach You?</h2>
      <input
        placeholder="Enter Phone Number"
        class="input"
        v-model="zipCode"
      />
      <button
        class="btn"
        type="submit"
      >
        Get My Quotes Now
      </button>
  </form>
</template>

<script>

export default {
  name: "PhoneForm",

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
  line-height: 30px;
}
.input {
  background-color: white;
  width: 250px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 20px;
  border: none;
  padding: 10px 5px;
}
.btn {
  color: white;
  width: 150px;
  border-radius: 5px;
  border: none;
  background-color: rgb(227, 125, 0);
  padding: 10px 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>
