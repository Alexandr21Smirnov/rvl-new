<template>
    <div class="wrapper">
        <h2 class="title">Moving Cost Calculator</h2>
        <img class="icon" src="@/assets/calculator.svg" />
        <div class ="subtitle">Enter Your Zip Below</div>
        <img class="arrow-icon" src="@/assets/arrow-down.svg" />
        <div class="zip-form">
            <form class="form">
                <h2 class="zip-title" v-if="!isZipValid">Enter Your ZIP (From)</h2>
                <div class="text-wrapp" v-else>
                    <h2  class="zip-title"> From: Long Island City, NY</h2>
                    <img class="mark-icon" src="@/assets/check-mark.svg" />
                </div>
                <div class="form-wrapper">
                    <input
                        placeholder="Type ZIP/City"
                        class="input"
                        type="text"
                        v-model="value"
                        @keydown.enter="onSubmit"
                    />
                    <button
                        class="btn"
                        type="submit"
                        @click.prevent="onSubmit"
                    >
                        View Rates
                    </button>

                </div>
                <div class="disclaimer">
                    <img class="disclaimer-icon" src="@/assets/disclaimer.jpg" />
                    <img class="disclaimer-lock-icon" src="@/assets/lock-disclaimer.jpg" />
                </div>
            </form>
        </div>
        <div class="text">Long Distance Moving Nationwide</div>
        <ul class="list" >
            <li>
                Licensed
            </li>
            <li>
                &#9679; Insured
            </li>
            <li>
                &#9679; Trusted
            </li>
        </ul>
    </div>
</template>

<script>
import { useStepperStore } from "@/store/stepper.store";
import { mapState } from "pinia";

export default {
    name: "ZipFrom",
    data: () => ({
        value: "",
        isZipValid: false
    }),
    computed: {
        ...mapState( useStepperStore, [ "zipFrom" ] )
    },
    mounted() {
        this.value = this.zipFrom;
    },
    watch: {
        value() {
            this.isZipValid = this.value.length >= 5;
        }
    },
    methods: {
        onSubmit() {
            this.value = this.value.trim();

            if (!this.value.length) {
                console.log("Zip code is empty");
                return;
            }

            useStepperStore().$patch({
                zipFrom: this.value
            });
            this.$emit('submit');
        }
    }
}
</script>

<style scoped>
.wrapper {
    padding-top: 40px;
}
.subtitle {
    text-transform: uppercase;
    color: rgba(128, 128, 128, 0.679);
    font-weight: bold;
    margin-bottom: 5px;
}
.text-wrapp {
    display: flex;
}
.icon {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
}
.arrow-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
}
.mark-icon {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    align-self: center;
    margin-top: -10px;
}
.title {
    color:black;
    font-weight: bold;
    margin-bottom: 20px;
}
.text {
    color:#808080;
    margin-bottom: 10px;
    font-style: italic;
}
.list li {
    color: #808080;
    display: inline;
    font-style: italic;
    font-size: 0.8rem;
}
.form {
    background-color: #414c5e;
    padding: 10px 5px 20px 5px;
    margin-bottom: 10px;
    min-height: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}

.zip-title {
    color: white;
    margin-top: 20px;
    margin-bottom: 25px;
}
.input {
    background-color: white;
    width: 120px;
    height: 50px;
    border-radius: 3px;
    margin-right: 15px;
    text-align: center;
    font-size: 1rem;
    border: none;
    padding: 10px 5px;
}

.btn {
    color: white;
    width: 120px;
    height: 50px;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 3px;
    border: none;
    background-color: rgb(227, 125, 0);
    padding: 10px 5px;
    cursor: pointer;
}
.disclaimer {
        display: flex;
        width: 100%;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .disclaimer-lock-icon {
        width: 25px;
        height: 30px;
    }
    .disclaimer-icon {
        width: 60px;
        height: 30px;
    }
</style>
