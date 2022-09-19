<template>
    <div class="move-date-selector">
        <h3>Approximate Move Date</h3>
        <p>When you suppose to move?</p>
        <form class="form">
            <FullCalendar :options="calendarOptions" />
        </form>

        <button @click="$emit('submit')">Submit</button>
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
    .move-date-selector {
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
        height: 600px;
    }
</style>