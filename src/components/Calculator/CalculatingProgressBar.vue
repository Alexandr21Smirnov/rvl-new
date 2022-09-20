<template>
    <div class="calculating-progress-bar">
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
                <span class="location-text">Long Island City, NY</span>
            </div>
            <img class="arrow-icon" src="@/assets/arrow-right.svg" />
            <div class="text-wrapp">
                <img class="location-icon" src="@/assets/location.svg" />
                <span class="location-text">Los Angeles, CA</span>
            </div>
        </div>
        <div class="check-mark" v-if="percentage >= 50">
            <img class="check-mark-icon" src="@/assets/check-mark-filled.svg"  />
        </div>
        <div class="title" v-if="percentage < 25">
            Calculating...
        </div>
        <div class="title" v-else-if="percentage >= 25 && percentage < 50">
            Searching For Movers...
        </div>
        <div class="title" v-else-if="percentage >= 50">
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
            this.moversCount = 1;

            setInterval(() => {
                this.percentage += 25;

                if (this.percentage > 50) {
                    this.moversCount = 2;
                }

                if (this.percentage > 75) {
                    this.moversCount = 4;
                }

                if (this.percentage >= 100) {
                    this.percentage = 100;

                    setTimeout(
                        () => this.$emit("submit"),
                        2000
                    );
                }
            }, 1000);
        }
    }
}
</script>

<style scoped>
    .calculating-progress-bar {
        min-height: 100vh;
        padding: 20px;
    }
    .location-wrapp {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        margin-bottom: 20px;
        height: 40px;
    }
    .title {
        color: #000;
        font-style: italic;
        font-size: 1.25rem;
        margin-bottom: 10px;
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
    .check-mark {
        margin-bottom: 20px;
    }
    .check-mark-icon {
        width: 40px;
        height: 40px;
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
        align-self: start;
        padding-bottom: 5px;
    }
    .arrow-icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        margin-left: 5px;
        align-self: center;
    }
    .text {
        color: #808080;
    }
    .text span {
        color: #b4b4b4;
    }
    .text-wrapp {
        display: flex;
    }
    .location-text {
        color: #b4b4b4;
        font-size: 0.95rem;
    }
    .progress-bar {
        width: 100%;
        height: 10px;
        border-radius: 10px;
        border: none;
        background-color: #808080;
        margin-bottom: 10px;
    }
    .bar {
        background-color: #05ad05;
        border-radius: 10px;
        height: 100%;
        width: 0;
        transition: width 1s ease;
    }
    .accent {
        color: #05ad05;
    }
    .percentage {
        color:#808080;
        font-size: 1.25rem;
    }
</style>
