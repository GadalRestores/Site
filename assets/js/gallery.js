/* ==========================================
   BEFORE / AFTER COMPARISON SLIDER
========================================== */

const slider = document.querySelector(".comparison-slider");

if (slider) {

    const after = slider.querySelector(".comparison-after");
    const handle = slider.querySelector(".slider-handle");
    const line = slider.querySelector(".slider-line");

    let dragging = false;

    function updateSlider(clientX) {

        const rect = slider.getBoundingClientRect();

        let position = clientX - rect.left;

        if (position < 0) position = 0;
        if (position > rect.width) position = rect.width;

        const percent = (position / rect.width) * 100;

        after.style.clipPath = `inset(0 0 0 ${percent}%)`;

        handle.style.left = percent + "%";

        line.style.left = percent + "%";
    }

    function startDrag(e) {

        dragging = true;

        if (e.touches) {
            updateSlider(e.touches[0].clientX);
        } else {
            updateSlider(e.clientX);
        }

    }

    function drag(e) {

        if (!dragging) return;

        if (e.touches) {
            updateSlider(e.touches[0].clientX);
        } else {
            updateSlider(e.clientX);
        }

    }

    function stopDrag() {

        dragging = false;

    }

    slider.addEventListener("mousedown", startDrag);
    window.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", stopDrag);

    slider.addEventListener("touchstart", startDrag);
    window.addEventListener("touchmove", drag);
    window.addEventListener("touchend", stopDrag);

}