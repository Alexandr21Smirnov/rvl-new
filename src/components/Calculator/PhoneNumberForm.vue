<template>
    <div class="wrapper">
     <div class="movers-wrapper">
            <img class="check-mark-icon" style="fill:#c2c1c1" src="@/assets/check-mark-filled.svg" />
            <span class="text" >Movers Found</span>
            <img class="icon" src="@/assets/more-than-sign-light.svg" />
            <span class="text" style="color:#c2c1c1">View Quote</span>
        </div>
        <div class="phone-number-form">
            <form class="form">
                <h2 class="title">What Is The Best Number<br>To Reach You?</h2>
                <input
                    placeholder="Enter Phone Number"
                    class="input"
                    type="number"
                    v-model="value"
                    @keydown.enter="onSubmit"
                />
                <button
                    class="btn"
                    type="submit"
                    @click.prevent="onSubmit"
                >
                    Get My Quotes Now
                </button>
            </form>
            <div class="disclaimer">
                <img class="lock-icon" src="@/assets/lock.svg" />
                <p class="disclaimer-text">Your information is safe with us.</p>
                <img class="disclaimer-icon" src="@/assets/disclaimer.jpg" />
            </div>
            <div class="privacy-policy">
                By clicking on the "GET MY QUOTES" button, I agree to the Terms of Use,
                Privacy Policy and Disclaimer.
                <br>My "click" provides espress written consent to be contacted directly by companies to quote my move or offer other
                products or services via emails, text messages, or calls/prerecorded messages via automatic dialing systems even if I am on a DNC list.
                Consent is not a condition of purchasing any product or service.
            </div>
        </div>
    </div>
</template>

<script>
import { useStepperStore } from "@/store/stepper.store";
import { mapState } from "pinia";

export default {
    name: "PhoneNumberForm",
    data: () => ({
        value: ""
    }),
    computed: {
        ...mapState(useStepperStore, [ "phoneNumber" ])
    },
    mounted() {
        this.value = this.phoneNumber;
    },
    methods: {
        onSubmit() {
            this.value = this.value.toString().trim();

            if (!this.value.length) {
                console.log("Phone number is requred");
                return;
            }

            useStepperStore().$patch({
                phoneNumber: this.value
            });
            this.$emit("submit");
        }
    }
}
</script>

<style scoped>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: none;
    }
    .wrapper {
        background-color: #414c5e;
        min-height: 400px;
        margin: 20px 10px;
        padding: 20px;
        border: none;
        border-radius: 10px;
    }
    .movers-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }
    .text {
        color: grey;
        font-weight: bold;
        font-size: 0.9rem;
    }
    .icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        margin-left: 5px;
    }
    .check-mark-icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    .form {

        padding: 10px 5px 20px 5px;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .title {
        color: white;
        margin-bottom: 15px;
        font-size: 1.2rem;
        line-height: 30px;
    }
    .input {
        background-color: white;
        width: 300px;
        font-size: 1.125rem;
        height: 50px;
        text-align: center;
        border-radius: 3px;
        margin-bottom: 20px;
        border: none;
        padding: 10px 5px;
    }
    .btn {
        color: white;
        width: 200px;
        font-size: 1.125rem;
        font-weight: bold;
        height: 50px;
        border-radius: 3px;
        border: none;
        background-color: rgb(227, 125, 0);
        padding: 10px 5px;
        cursor: pointer;
        font-weight: bold;
    }
    .disclaimer {
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(226, 159, 51, 0.577);
        padding: 0 20px 20px;
    }
    .lock-icon {
        width: 15px;
        height: 15px;
    }
    .disclaimer-icon {
        width: 80px;
        height: 40px;
    }
    .disclaimer-text {
        font-size: 0.7rem;
        margin-left: 5px;
        margin-right: 5px;
    }
    .privacy-policy {
        font-size: 0.6rem;
        text-align: start;
        color: rgb(113, 120, 137);
    }
</style>
