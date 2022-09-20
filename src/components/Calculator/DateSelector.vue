<template>
    <div class="move-date-selector">
        <h3>Approximate Move Date</h3>
        <p>When you suppose to move?</p>
        <form class="form">
            <FullCalendar class="calendar" :options="calendarOptions" />
        </form>
    </div>
</template>

<script>
import '@fullcalendar/core/vdom';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useStepperStore } from "@/store/stepper.store";

export default {
    name: "MoveDateSelector",
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
                dateClick: this.onDateSelected,
            }
        }
    },
    methods: {
        onDateSelected(date) {
            const stepperStore = useStepperStore();

            stepperStore.$patch({
                date: date.dateStr
            });
            this.$emit("submit");
        }
    }
}
</script>

<style scoped>
    .fc::v-deep .fc-toolbar-title {
        font-size: 1rem;
    }
    .fc::v-deep .fc-daygrid-day-events {
        display: none;
    }
    .move-date-selector {
        padding: 20px;
        background-color: #3a4454;
        min-height: 100vh;
        position: relative;
        z-index: 20;
    }
    .calendar {
        background-color: white;
        color: #414c5e;
    }
    .calendar button {
        margin: 10px;
    }
    h3 {
        margin-bottom: 50px;
        font-size: 1.75rem;
    }
    p {
        color: #9f9f9f;
        margin-bottom: 10px;
    }
    .form {
        padding: 10px 5px 20px 5px;
        margin: 0 auto;
        width: 100%;
        min-height: 100vh;
    }
</style>
