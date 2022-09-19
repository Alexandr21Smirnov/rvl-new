<template>
    <div class="zip-form">
        <form class="form">
            <h2 v-if="!isZipValid">Enter Your ZIP(From)</h2>
            <h2 v-else>From: Long Island City, NY</h2>
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
        </form>
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
            this.isZipValid = this.value.length > 5;
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
    width: 100px;
    border-radius: 5px;
    margin-right: 10px;
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