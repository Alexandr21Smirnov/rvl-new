<template>
    <div class="move-size-selector">
        <h3 class="title">Select Your Move Size</h3>
        <div class="btn-wrapper">
            <button
                class="btn"
                type="submit"
                v-for="size in sizes"
                @click.prevent="onSizeSelect(size.value)"
            >
                {{ size.text }}
            </button>
        </div>
    </div>
</template>

<script>
import { useStepperStore } from "@/store/stepper.store";

export default {
    name: "MoveSizeSelector",
    data: () => ({
        sizes: [
            {
                text: 'STUDIO',
                value: 'studio'
            },
            {
                text: '1 BEDROOM',
                value: '1_bedroom'
            },
            {
                text: '2 BEDROOM',
                value: '2_bedroom'
            },
            {
                text: '3 BEDROOM',
                value: '3_bedroom'
            },
            {
                text: '4+ BEDROOM',
                value: '4_and_more_bedroom'
            },
            {
                text: 'OFICCE/COMMERTIAL',
                value: 'office_commertial'
            }
        ]
    }),
    methods: {
        onSizeSelect(size) {
            useStepperStore().$patch({ size });
            this.$emit('submit');
        }
    }
}
</script>

<style scoped>
    .move-size-selector {
        min-height: 100vh;
        position: relative;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #3a4454;
    }
    .title {
        color: white;
        margin-bottom: 15px;
    }
    .btn {
        color: white;
        width: 200px;
        height: 40px;
        border-radius: 3px;
        border: none;
        background-color: rgb(227, 125, 0);
        padding: 10px 10px;
        margin-top: 15px;
        cursor: pointer;
        font-weight: bold;
    }
    .btn-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
</style>
