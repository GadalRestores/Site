/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    button.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");

        faqItems.forEach(other => {

            other.classList.remove("active");

            other.querySelector(".faq-answer").style.maxHeight = null;

        });

        if(!isOpen){

            item.classList.add("active");

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});