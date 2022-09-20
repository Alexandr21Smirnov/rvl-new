<template>
    <div class="request-submitted">
        <div class="text-wrapp">
        <div class="text">Studio - Sep 27, 2022</div>
        </div>
        <div class="location-wrapp">
            <div class="text-wrapp">
                <img class="location-icon" src="@/assets/location.svg"  />
                <span class="text">Long Island City, NY</span>
            </div>
            <img class="arrow-icon" src="@/assets/arrow-right.svg" />
            <div class="text-wrapp">
                <img class="location-icon" src="@/assets/location.svg" />
                <span class="text">Los Angeles, CA</span>
            </div>
        </div>
        <h2 class="title"> Your'e All Set !</h2>
        <p class="text-ordinary">Your request has been submitted.<br>Matched movers will contact you shortly.</p>
        <div class="confirm-block">
            <span class="confirm-text">Confirmation #:</span>
            <span class="confirm-number"> 564F 5789</span>
        </div>
        <p class="text-small">Movers must gather some final details about<br> the items you are moving, in order to provide an exact quote.</p>
        <div class="text-big">Be sure to answer when call is recevied.</div>
        <div class="card">
            <p class="card-title">If you prefer not to wait, call now:</p>
            <a href="tel:8555350895" class="card-button">
                <img class="icon" src="@/assets/call.svg" />
                <span class="number">855-535-0895</span>
            </a>
            <div class="card-hours">Hours: <span>&#9679; Now Open</span></div>
            <p class="text-ordinary">Open 7 days a week. Closes today at 8:30 PM</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "RequestSubmitted"
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: white;
    }
  .request-submitted {
    padding: 20px;
  }
  .location-wrapp {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        margin-bottom: 40px;
        height: 40px;

    }
    .text-wrapp {
        display: flex;
        flex-direction: inline;
        align-items: center;
        justify-content: center;
    }
    .location-icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    .arrow-icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        margin-left: 5px;
        align-self: center;
    }
    .text {
        color: #b4b4b4;
        font-size: 0.8rem;
    }
    .text-wrapp {
        display: flex;
    }
    .title {
        color: #414c5e;
        margin-bottom: 10px;
        font-weight: bold;
    }
    .text-ordinary {
        font-style: italic;
        font-size: 0.8rem;
        color: #808080;
        margin-bottom: 15px;
    }
    .confirm-block {
        padding: 5px 10px;
        border-radius: 15px;
        background-color: #e1e1e1;
        width: 250px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    .confirm-text {
        color: #000;
        font-style: italic;
    }
    .confirm-number {
        color: #05ad05;
        font-weight: bold;
    }
    .text-small {
        font-size: 0.7rem;
        color: #808080;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .text-big {
        font-size: 1rem;
        color: #000;
        margin-bottom: 30px;
    }
    .card {
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
    }
    .card-title {
        color: #414c5e;
        font-weight: bold;
        font-size: 0.9rem;
        margin-bottom: 10px;
    }
    .icon {
        width: 30px;
        height: 30px;
    }
    .card-button {
        background-color: rgb(255, 145, 10);
        display: flex;
        height: 50px;
        margin: 0 auto;
        margin-bottom: 15px;
        padding: 10px;
        width: 250px;
        align-items: center;
    }
    .number {
        align-self: center;
        margin: 0 auto;
        font-weight: bold;
        font-size: 1.2rem;
    }
    .card-hours {
        color: #000;
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
    .card-hours span {
        color: #05ad05;
    }
</style>
