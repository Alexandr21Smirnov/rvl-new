<template>
  <form class="form">
    <h2>What Is Your Name?</h2>
    <div class="form-wrapper">
      <input
        placeholder="First Name"
        class="input"
        v-model="zipCode"
      />
      <input
        placeholder="Last Name"
        class="input"
        v-model="zipCode"
      />
    </div>
      <button
        class="btn"
        type="submit"
      >
        Submit
      </button>
  </form>
</template>

<script>

export default {
  name: "NameForm",

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
  width: 150px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: 10px;
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
