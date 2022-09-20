<template>
    <div class="movers-offline-warning">
        <img class="icon" src="@/assets/moon.svg" />
        <h3 class="title">Due to the time...<br>some movers are currently offline</h3>
        <p class="text text-grey">In order to receive an exact quote,<br>Movers must gather some final<br>details of your move.</p>
        <div class="text">Would you like additional movers to<br> Provide quotes in the morning?</div>
        <button
            class="btn"
            type="submit"
            @click="onApprove"
        >
            Yes
        </button>
        <button
            class="btn-no"
            type="submit"
            @click="onReject"
        >
            No
        </button>
    </div>
</template>

<script>
import { useStepperStore } from "@/store/stepper.store";

export default {
    name: "MoversOfflineWarning",
    methods: {
        onApprove() {
            useStepperStore().$patch({ provideQuotesInMorning : true });
            this.$emit("submit");
        },
        onReject() {
            useStepperStore().$patch({ provideQuotesInMorning : false });
            this.$emit("submit");
        }
    }
}
</script>

<style scoped>
    .movers-offline-warning {
        background-color: #414c5e;
        padding: 10px 5px 20px 5px;
        min-height: 300px;
        margin: 20px 10px;
        border: none;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .title {
        margin-bottom: 15px;
        line-height: 30px;
    }
    .icon {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
    }
    .text {
        margin-bottom: 15px;
        line-height: 21px;
    }
    .text-grey {
        color: #ababab;
        font-style: italic;
    }
    .btn {
        color: white;
        font-weight: bold;
        width: 100px;
        border-radius: 5px;
        border: none;
        background-color: rgb(227, 125, 0);
        padding: 10px 5px;
        margin-top: 10px;
        cursor: pointer;
    }
    .btn-no {
        color: white;
        font-weight: bold;
        width: 100px;
        border-radius: 5px;
        border: 1px solid grey;
        background-color: transparent;
        padding: 10px 5px;
        margin-top: 15px;
        cursor: pointer;
    }
</style>
