<template>
     <div class="wrapper">
        <div class="movers-wrapper">
            <img class="check-mark-icon" src="@/assets/check-mark-filled.svg" />
            <span class="text">Movers Found</span>
            <img class="icon" src="@/assets/more-than-sign.svg" />
            <span class="text" style="color:#c2c1c1">View Quote</span>
        </div>
        <h2 class="title">Your Quote Is Ready !</h2>
        <div class="name-form">
            <form class="form">
                <h3 class="subtitle">What Is Your Name?</h3>
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
            <div class="disclaimer">
                <img class="lock-icon" src="@/assets/lock.svg" />
                <p class="disclaimer-text">Your information is safe with us.</p>
                <img class="disclaimer-icon" src="@/assets/disclaimer.jpg" />
            </div>
        </div>
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
    .wrapper {
        padding: 20px 0;
    }
    .movers-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 30px;
        width: 300px;
        height: 40px;
        border: 1px solid #c2c1c1;
        border-radius: 3px;
    }
    .form-wrapper {
        display: flex;
        justify-content: space-between;
        width: 320px;
    }
    .name-form {
        background-color: #414c5e;
        min-height: 100%;

    }
    .form {
        padding: 10px 5px 20px 5px;
        display: flex;
        height: 250px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .text {
        color: grey;
        font-weight: bold;
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
    .title {
        color: #000;
        margin-bottom: 30px;
    }
    .subtitle {
        color: white;
        font-size: 1.25rem;
        margin-bottom: 15px;
    }
    .input {
        background-color: white;
        border-radius: 3px;
        font-size: 1.125rem;
        height: 50px;
        width: 150px;
        margin-bottom: 20px;
        text-align: center;
        border: none;
        padding: 10px 5px;
    }
    .btn {
        color: white;
        border-radius: 3px;
        font-size: 1.125rem;
        height: 50px;
        width: 150px;
        border: none;
        background-color: rgb(227, 125, 0);
        padding: 10px 5px;
        cursor: pointer;
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
        margin-left: 10px;
        margin-right: 15px;
        font-size: 0.8rem;
    }
</style>
