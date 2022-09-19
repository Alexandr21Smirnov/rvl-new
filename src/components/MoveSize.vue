<template>
  <div class="wrapper">
    <h3 class="title">Select Your Move Size</h3>
    <div class="btn-wrapper">
      <button
        class="btn"
        type="submit"
        v-for="size in sizes"
        @click.prevent="clickHandler(size.value)"
      >
        {{size.text}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZipForm",
  data() {
    return {
      sizes: [{
        text: 'STUDIO',
        value: 'STUDIO'
      },{
        text: '1 BEDROOM',
        value: '1 BEDROOM'
      }
      ,{
        text: '2 BEDROOM',
        value: '2 BEDROOM'
      }
      ,{
        text: '3 BEDROOM',
        value: '3 BEDROOM'
      }
      ,{
        text: '4+ BEDROOM',
        value: '4+ BEDROOM'
      }
      ,{
        text: 'OFICCE/COMMERTIAL',
        value: 'OFICCE/COMMERTIAL'
      }]
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
  flex-direction: column;
  background-color: #112541;
}
.title {
  color: white;
}
.btn {
  color: white;
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: rgb(227, 125, 0);
  padding: 10px 10px;
  margin-top: 15px;
  cursor: pointer;
}
.btn-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
