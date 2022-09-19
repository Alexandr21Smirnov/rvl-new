<template>
  <form class="form">
    <h2>Enter Your ZIP(From)</h2>
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
        View Rates
      </button>
    </div>
  </form>
</template>

<script>

export default {
  name: "ZipForm",

  data() {
    return {
      zipCode: null
    }
  },
  methods: {
    clickHandler() {
      this.$emit('submit', zipCode )
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
