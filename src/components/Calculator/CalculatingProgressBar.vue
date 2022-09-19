<template>
    <div class="calculating-progress-bar">
        <div class="check-mark" v-if="percentage >= 50">
            CHECK MARK! CHANGE WITH ICON!
        </div>
        <div v-if="percentage < 25">
            Calculating...
        </div>
        <div v-else-if="percentage >= 25 && percentage < 50">
            Searching For Movers...
        </div>
        <div v-else-if="percentage >= 50">
            We Found <span class="accent">{{ moversCount }}</span> Movers in Your Area!
        </div>
        <div class="progress-bar">
            <div class="bar" :style="barStyles"></div>
        </div>
        <div class="percentage">
            {{ percentage }}%
        </div>
    </div>
</template>

<script>
export default {
    name: "CalculatingProgressBar",
    data: () => ({
        percentage: 0,
        moversCount: 0
    }),
    computed: {
        barStyles() {
            return {
                width: this.percentage + "%"
            }
        }
    },
    mounted() {
        this.initSearching();
    },
    methods: {
        initSearching() {
            this.moversCount = 0;

            setInterval(() => {
                this.percentage += 15;

                if (this.percentage > 50) {
                    this.moversCount = 1;
                }

                if (this.percentage > 75) {
                    this.moversCount = 2;
                }

                if (this.percentage > 90) {
                    this.moversCount = 4;
                }

                if (this.percentage >= 100) {
                    this.percentage = 100;

                    setTimeout(
                        () => this.$emit("submit"),
                        3000
                    );
                }
            }, 2000);
        }
    }
}
</script>

<style scoped>
    .calculating-progress-bar {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .progress-bar {
        width: 100%;
        height: 10px;
        border-radius: 10px;
        border: none;
        background-color: gray;
    }
    .bar {
        background-color: green;
        border-radius: 10px;
        height: 100%;
        width: 0;
        transition: width 1s ease;
    }
    .accent {
        color: green;
    }
</style>