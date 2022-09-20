import { defineStore } from 'pinia'

export const useStepperStore = defineStore('stepper', {
    state: () => ({
        currentStep: "zip-from",
        zipFrom: "",
        size: null,
        date: null,
        zipTo: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        provideQuotesInMorning: false,
    }),
})
