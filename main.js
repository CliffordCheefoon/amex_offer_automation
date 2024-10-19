var offerButtons = Array.from(document.querySelectorAll('button[title="Add to Card"]'));
var index;
for (index = 0; index < offerButtons.length; ++index) {
    console.log("Clicking offer button");
    offerButtons[index].click();
    // Wait  to be considerate to the AMEX servers
    await new Promise(r => setTimeout(r, 1000));
}