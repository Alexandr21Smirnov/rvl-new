<template>
    <div class="wrapper">
    <div class="info-block">
        <div class="text-wrapp">
        <img class="icon" src="@/assets/home-icon.svg" />
        <div class="text">Size: <span>Studio</span></div>
        </div>
        <div class="text-wrapp">
        <img class="icon" src="@/assets/calendar.svg" />
        <div class="text">Date: <span>Sep 27, 2022</span></div>
        </div>
    </div>
    <div class="location-wrapp">
        <div class="text-wrapp">
            <img class="location-icon" src="@/assets/location.svg"  />
            <span>Long Island City, NY</span>
        </div>
        <img class="arrow-icon" src="@/assets/arrow-right.svg" />
        <div class="text-wrapp">
            <img class="location-icon" src="@/assets/location.svg" />
            <span v-if="!isZipValid">Unknown...</span>
            <span v-else>Los Angeles, CA</span>
        </div>
    </div>
    <div class="zip-form">
        <form class="form">
            <h2 class="zip-title" v-if="!isZipValid">Where Are You Moving To ?</h2>
            <div class="text-wrapp" v-else>
                <h2 class="zip-title">To: Los Angeles, CA</h2>
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
                    Calculate
                </button>
            </div>
            <div class="disclaimer">
                <img class="disclaimer-icon" src="@/assets/disclaimer.jpg" />
                <img class="disclaimer-lock-icon" src="@/assets/lock-disclaimer.jpg" />
            </div>
        </form>
    </div>
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
        ...mapState( useStepperStore, [ "zipTo" ] )
    },
    watch: {
        value() {
            this.isZipValid = this.value.length >= 5;
        }
    },
    mounted() {
        this.value = this.zipTo;
    },
    methods: {
        onSubmit() {
            this.value = this.value.trim();

            if (!this.value.length) {
                console.log("Zip code is empty");
                return;
            }

            useStepperStore().$patch({
                zipTo: this.value
            });
            this.$emit('submit');
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    padding-top: 40px;
}
.location-wrapp {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    margin-bottom: 40px;
    height: 40px;
}
.info-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 50px;
    max-width: 170px;
    margin: 0 auto;
    margin-bottom: 20px;
}
.text-wrapp {
    display: flex;
    flex-direction: inline;
    align-items: center;
    justify-content: center;
}
.zip-form {
    min-height: 100%;
}
.form {
    background-color: #414c5e;
    padding: 10px 5px 20px 5px;
    min-height: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}
.icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.location-icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
.mark-icon {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    align-self: center;
    margin-top: -10px;
}
.arrow-icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    margin-left: 5px;
    align-self: center;
}
.zip-title {
    color: white;
    margin-top: 20px;
    margin-bottom: 25px;
}
.text {
    color: #808080;
}
.text-wrapp {
    display: flex;
}
span{
    color: #b4b4b4;
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
