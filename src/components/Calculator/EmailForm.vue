<template>
    <div class="email-form">
        <form class="form">
            <h2>Enter Your Email</h2>
            <input
                placeholder="Enter Valid Email"
                class="input"
                type="email"
                v-model="value"
            />
            <button
                class="btn"
                type="submit"
                @click.prevent="onSubmit"
            >
                Send
            </button>
        </form>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useStepperStore } from "@/store/stepper.store";

export default {
    name: "EmailForm",
    data: () => ({
        value: "",
    }),
    computed: {
        ...mapState(useStepperStore, [ "email" ])
    },
    mounted() {
        this.value = this.email;
    },
    methods: {
        onSubmit() {
            this.value = this.value.trim();

            //Add email validation by regex

            if (!this.value.length) {
                console.log("Email is empty");
                return;
            }

            useStepperStore().$patch({
                email: this.value
            });
            this.$emit('submit');
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
    }
    .input {
        background-color: white;
        width: 250px;
        border-radius: 5px;
        margin-bottom: 20px;
        text-align: center;
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