<template>
    <div class="wrapper">
        <div class="movers-wrapper">
            <img class="check-mark-icon" src="@/assets/check-mark-filled.svg" />
            <span class="text">Movers Found</span>
            <img class="icon" src="@/assets/more-than-sign.svg" />
            <span class="text" style="color:#c2c1c1">View Quote</span>
        </div>
        <h2 class="title">Your Quote Is Ready !</h2>
        <div class="email-form">
            <form class="form">
                <h3 class="subtitle">Enter Your Email</h3>
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

            //Added email validation by regex
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value)) {
                alert('Invalid email');
                return;
            }

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
    .email-form {
        background-color: #414c5e;
        min-height: 100%;
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
    .form {
        padding: 10px 5px 20px 5px;
        height: 250px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .title {
        color: #000;
        margin-bottom: 30px;
    }
    .subtitle {
        color: white;
        font-size: 20px;
        margin-bottom: 15px;
    }
    .input {
        background-color: white;
        width: 250px;
        border-radius: 3px;
        font-size: 1.125rem;
        height: 50px;
        margin-bottom: 20px;
        text-align: center;
        border: none;
        padding: 10px 5px;
    }
    .btn {
        color: white;
        width: 150px;
        font-size: 1.125rem;
        font-weight: bold;
        height: 50px;
        border-radius: 3px;
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
