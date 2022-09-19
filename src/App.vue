<template>
  <div class="wrapper">
    <ZipForm v-if="!route || route=='zipForm'" @submit="onZipFormSubmit"/>
    <MoveSize v-else-if="route =='moveSize'" @submit="onSizeSubmit"/>
    <Calendar v-else-if="route =='calendar'" @submit="onCalendarSubmit"/>
    <MoveToForm  v-else-if="route =='moveToForm'" @submit="onMoveToFormSubmit"/>
    <ProgressBar v-else-if="route =='progressBar'" :percentage="percentage"/>
    <EmailForm />
    <NameForm />
    <PhoneForm />
    <OfflineCard />
  </div>
</template>

<script>
import ZipForm from "./components/ZipForm.vue";
import MoveSize from "./components/MoveSize.vue";
import Calendar from "./components/Calendar.vue";
import ProgressBar from "./components/ProgressBar.vue";
import MoveToForm from "./components/MoveToForm.vue";
import EmailForm from "./components/EmailForm.vue";
import NameForm from "./components/NameForm.vue";
import PhoneForm from "./components/PhoneForm.vue";
import OfflineCard from "./components/OfflineCard.vue";

export default {
  name: "App",
  components: {
    ZipForm,
    MoveSize,
    Calendar,
    ProgressBar,
    MoveToForm,
    EmailForm,
    NameForm,
    PhoneForm,
    OfflineCard
},
  data() {
    return {
      zipCode: null,
      size: null,
      calendar: null,
      calculate: null,
      percentage: 0,
      route: 'zipForm',
    }
  },
  mounted() {
    setInterval(() => {
      this.percentage +=25
      if( this.percentage > 100) {
        this.percentage = 100
      }
    }, 2500)
  },
  methods: {
    onZipFormSubmit(zipCode) {
      this.zipCode = zipCode
      this.route = 'moveSize'


    },
    onSizeSubmit(size) {
      this.size=size
      this.route = 'calendar'
    },
    onCalendarSubmit(calendar) {
      this.calendar=calendar
      this.route = 'moveToForm'
    },
    onMoveToFormSubmit(calculate) {
      this.calculate=calculate
      this.route = 'progressBar'
    }
  }
};
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
  background-color: #112541;
  min-height: 100vh;
}
</style>
