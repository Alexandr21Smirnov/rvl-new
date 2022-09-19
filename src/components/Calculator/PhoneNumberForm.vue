<template>
    <div class="phone-number-form">
        <form class="form">
            <h2>What Is The Best Number<br>To Reach You?</h2>
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
        line-height: 30px;
    }
    .input {
        background-color: white;
        width: 250px;
        text-align: center;
        border-radius: 5px;
        margin-bottom: 20px;
        border: none;
        padding: 10px 5px;
    }
    .btn {
        color: white;
        width: 150px;
        border-radius: 5px;
        border: none;
        background-color: rgb(227, 125, 0);
        padding: 10px 5px;
        cursor: pointer;
        font-weight: bold;
    }
</style>