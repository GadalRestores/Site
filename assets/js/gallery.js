/* ==========================================
   GADAL RESTORES
   RESULTS SHOWCASE SLIDER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".comparison-slider");

    if (!slider) return;

    const after = slider.querySelector(".comparison-after");
    const handle = slider.querySelector(".slider-handle");
    const line = slider.querySelector(".slider-line");

    let isDragging = false;
    let sliderWidth = 0;
    let sliderLeft = 0;
    let currentPercent = 50;

    function cacheSliderBounds() {

        const rect = slider.getBoundingClientRect();

        sliderWidth = rect.width;
        sliderLeft = rect.left;

    }

    function render(percent) {

        percent = Math.max(0, Math.min(100, percent));

        currentPercent = percent;

        after.style.clipPath = `inset(0 0 0 ${percent}%)`;

        handle.style.left = `${percent}%`;

        line.style.left = `${percent}%`;

    }

    function updateFromClientX(clientX) {

        const position = clientX - sliderLeft;

        const percent = (position / sliderWidth) * 100;

        requestAnimationFrame(() => {

            render(percent);

        });

    }

    function startDrag(e) {

        isDragging = true;

        cacheSliderBounds();

        slider.classList.add("dragging");

        const x = e.touches ? e.touches[0].clientX : e.clientX;

        updateFromClientX(x);

    }

    function drag(e) {

        if (!isDragging) return;

        const x = e.touches ? e.touches[0].clientX : e.clientX;

        updateFromClientX(x);

    }

    function stopDrag() {

        isDragging = false;

        slider.classList.remove("dragging");

    }

    /* Mouse */

    slider.addEventListener("mousedown", startDrag);

    window.addEventListener("mousemove", drag);

    window.addEventListener("mouseup", stopDrag);

    /* Touch */

    slider.addEventListener("touchstart", startDrag, {
        passive: true
    });

    window.addEventListener("touchmove", drag, {
        passive: true
    });

    window.addEventListener("touchend", stopDrag);

    /* Click to Move */

    slider.addEventListener("click", (e) => {

        if (isDragging) return;

        cacheSliderBounds();

        updateFromClientX(e.clientX);

    });

    /* Window Resize */

    window.addEventListener("resize", () => {

        cacheSliderBounds();

        render(currentPercent);

    });

    /* Initial Setup */

    cacheSliderBounds();

    render(50);

});