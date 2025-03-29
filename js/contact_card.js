/**
 * @author nokarin-dev
 * @license MIT
 * @copyright nokarin-dev
 * @file contact_card.js
 */

document.addEventListener("DOMContentLoaded", () => {
    const contactCard = document.getElementById("contact-card");
    const contactButton = document.getElementById("contact-button");

    contactButton.addEventListener("click", () => {
        contactCard.classList.remove("hidden");
    });

    document.addEventListener("click", (event) => {
        if (contactCard.contains(event.target) && !event.target.closest(".form-container")) {
            contactCard.classList.add("hidden");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            contactCard.classList.add("hidden");
        }
    });
});