<template>
    <div class="moving-calculator">
        <template v-for="step in steps">
            <component
                v-if="step.alias === currentStep"
                :is="step.component"
                @submit="onSubmit"
            ></component>
        </template>
    </div>
</template>

<script>

import { mapState } from "pinia";
import { useStepperStore } from "@/store/stepper.store";

import ZipFrom from "@/components/Calculator/ZipFrom";
import ZipTo from "@/components/Calculator/ZipTo";
import SizeSelector from "@/components/Calculator/SizeSelector";
import DateSelector from "@/components/Calculator/DateSelector";
import CalculatingProgressBar from "@/components/Calculator/CalculatingProgressBar";
import EmailForm from "@/components/Calculator/EmailForm";
import NameForm from "@/components/Calculator/NameForm";
import PhoneNumberForm from "@/components/Calculator/PhoneNumberForm";
import MoversOfflineWarning from "@/components/Calculator/MoversOfflineWarning";
import RequestSubmitted from "@/components/Calculator/RequestSubmitted";

export default {
    name: "MovingCalculator",
    components: {
        ZipFrom,
        ZipTo,
        SizeSelector,
        DateSelector,
        CalculatingProgressBar,
        EmailForm,
        NameForm,
        PhoneNumberForm,
        MoversOfflineWarning,
        RequestSubmitted
    },
    data: () => ({
       steps: [
           {
               alias: "zip-from",
               component: "ZipFrom"
           },
           {
               alias: "size-selector",
               component: "SizeSelector"
           },
           {
               alias: "date-selector",
               component: "DateSelector"
           },
           {
               alias: "zip-to",
               component: "ZipTo"
           },
           {
               alias: "calculating-progress-bar",
               component: "CalculatingProgressBar"
           },
           {
               alias: "email-form",
               component: "EmailForm"
           },
           {
               alias: "name-form",
               component: "NameForm"
           },
           {
               alias: "phone-number-form",
               component: "PhoneNumberForm"
           },
           {
               alias: "movers-offline-warning",
               component: "MoversOfflineWarning"
           },
           {
               alias: "request-submitted",
               component: "RequestSubmitted"
           }
       ]
    }),
    computed: {
        ...mapState(useStepperStore, [ "currentStep" ])
    },
    methods: {
        onSubmit() {
            const stepperStore = useStepperStore();
            const stepIndex = this.steps.findIndex( step => step.alias === this.currentStep );

            if (stepIndex === -1 || stepIndex + 1 >= this.steps.length) return;

            stepperStore.$patch({
                currentStep: this.steps[stepIndex + 1].alias
            });
        }
    }
}
</script>

<style scoped>

</style>