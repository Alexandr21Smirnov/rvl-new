<template>
    <div class="home-layout" :class="currentStep">
        <header class="header">
            <img class="logo" src="@/assets/logo.jpg" alt="logo">
            <a class="phone-link" href="tell:8778041606">
                <img class="phone-icon" src="@/assets/call.svg" />
                (877) 804 1606
            </a>
        </header>
        <main class="main">
            <slot></slot>
        </main>
        <footer class="footer">
            <a href="#" class="link border">Join Our Network</a>
            <a href="#" class="link border">Privacy Policy</a>
            <a href="#" class="link border">Terms of Use</a>
            <a href="#" class="link">Don't Sell my Information</a>
        </footer>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useStepperStore } from "@/store/stepper.store";

export default {
    name: "HomeLayout",
    computed: {
        ...mapState(useStepperStore, [ "currentStep" ])
    },
}
</script>

<style scoped>
    .home-layout {
        background-color: rgba(244, 242, 242, 0.714);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        width: 370px;
        min-height: 100vh;
        margin: 0 auto;
    }
    .main {
        flex: 1 1 auto;
    }
    .home-layout.size-selector .footer,.home-layout.size-selector .header, .home-layout.date-selector .footer, .home-layout.date-selector .header {
        display: none;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    .header {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    }
    .footer {
        padding: 0px 5px 20px 5px;
        display: flex;
        justify-content: space-between;
        font-size: 0.55rem;
    }

    .logo {
        width: 120px;
        height: 50px;
    }
    .phone-icon {
        width: 20px;
        height: 20px;
        background-color: rgb(10, 91, 167);
        padding: 5px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .phone-link {
        color:rgb(10, 91, 167);
        font-weight: bold;
        font-size: 1rem;
        text-decoration: underline;
        display: flex;
        align-items: center;
    }
    .border {
        border-right:1px solid #000;
    }
    .link {
        padding: 5px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
