<template>
    <div class="wrapper">
        <HomeLayout>
            <MovingCalculator/>
        </HomeLayout>
    </div>
</template>

<script>

import HomeLayout from "@/layouts/HomeLayout";
import MovingCalculator from "@/views/Calculator/MovingCalculator";

export default {
    name: "App",
    components: {
        HomeLayout,
        MovingCalculator
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    background-color: #112541;
    min-height: 100vh;
}
</style>
