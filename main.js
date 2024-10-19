// Find all the "Add to Card" buttons on the page. NOTE: The button class changes based on aspect ratio
var buttonClass = "offer-cta axp-offers__global__merchantOfferCta___qKBIE btn btn-size-md btn-secondary offer-cta-v css-261oxr"
var offerButtons = Array.from(document.getElementsByClassName(buttonClass)).filter(btn => btn.title == "Add to Card");
console.log(offerButtons)
var index;
for (index = 0; index < offerButtons.length; ++index) {
    console.log("Clicking offer button");
    offerButtons[index].click();
    // Wait to be nice to AMEX servers :)
    await new Promise(r => setTimeout(r, 500));
}