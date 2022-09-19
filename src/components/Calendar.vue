<template>
  <div class="calendar-wrapper">
    <h3>Approximate Move Date</h3>
    <p>When you suppose to move?</p>
    <form class="form">
      <FullCalendar :options="calendarOptions" />
    </form>
  </div>
</template>

<script>
import '@fullcalendar/core/vdom';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
  name: "Calendar",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendar: null,
      calendarOptions: {
      plugins: [ dayGridPlugin, interactionPlugin ],
      initialView: 'dayGridMonth',
      selectable: true,
      dateClick: this.handleDateClick,
      }
    }
  },
  watch: {
    calendar() {
      this.$emit('submit', this.calendar )
    }
  },
  methods: {
    handleDateClick(arg) {
      console.log('date click! ' + arg.dateStr)
      this.$emit('submit', this.calendar )
    }
  }
};
</script>

<style scoped>
.calendar-wrapper{
  padding: 20px;
}
h3 {
  margin-bottom: 50px;
}
p {
  color: grey;
}
.form {
  padding: 10px 5px 20px 5px;
  margin: 0 auto;
  width: 600px;
  height: 6 00px;
}
</style>
