<template>
    <div class="name-form">
        <form class="form">
            <h2>What Is Your Name?</h2>
            <div class="form-wrapper">
                <input
                    placeholder="First Name"
                    class="input"
                    v-model="firstNameValue"
                    @keydown.enter="onSubmit"
                />
                <input
                    placeholder="Last Name"
                    class="input"
                    v-model="lastNameValue"
                    @keydown.enter="onSubmit"
                />
            </div>
            <button
                class="btn"
                type="submit"
                @click.prevent="onSubmit"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useStepperStore } from "@/store/stepper.store";

export default {
    name: "NameForm",
    data: () => ({
        firstNameValue: "",
        lastNameValue: "",
    }),
    computed: {
        ...mapState( useStepperStore, [ "firstName", "lastName" ])
    },
    mounted() {
        this.firstNameValue = this.firstName;
        this.lastNameValue = this.lastName;
    },
    methods: {
        onSubmit() {
            this.firstNameValue = this.firstNameValue.trim();
            this.lastNameValue = this.lastNameValue.trim();

            if (
                !this.firstNameValue.length ||
                !this.lastNameValue.length
            ) {
                console.log("first name or last name is empty");
                return;
            }

            useStepperStore().$patch({
                firstName: this.firstNameValue,
                lastName: this.lastNameValue
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
    }
    .input {
        background-color: white;
        width: 150px;
        border-radius: 5px;
        margin-bottom: 20px;
        margin-right: 10px;
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