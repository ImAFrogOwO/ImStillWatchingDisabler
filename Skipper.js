const Notification = document.querySelector("body > ytd-app > ytd-popup-container");

const Listner = new MutationObserver((List,Observer) =>
{
    const PopupButton = document.getElementById("confirm-button");
    if (PopupButton) { PopupButton.click(); }

});