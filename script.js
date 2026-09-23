/**
 * Global Constants
 */
const CHECKOUT_URL = "#"; // Replace with real checkout URL when ready

document.addEventListener("DOMContentLoaded", () => {
    // 1. Set current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Checkout links function normally through their HTML href attributes

    // 3. FAQ Accordion Logic
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            // Toggle active class on header
            this.classList.toggle("active");
            
            // Get content panel
            const content = this.nextElementSibling;
            
            // Toggle max-height for smooth transition
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // 4. Modal Logic for Image Gallery
    const modal = document.getElementById("imageModal");
    const closeModal = document.querySelector(".close-modal");
    
    // Close modal when clicking on X
    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Close modal when clicking outside of image
    if (modal) {
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // 5. Carousel Logic (Infinite Marquee)
    const track = document.querySelector('.carousel-track');
    
    if (track) {
        // Clone all items to create the infinite loop effect
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        // Remove old manual navigation buttons
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        if (prevBtn) prevBtn.remove();
        if (nextBtn) nextBtn.remove();
    }

    // 6. Upsell Modal Logic
    const basicBtns = document.querySelectorAll(".basic-btn");
    const upsellModal = document.getElementById("upsellModal");
    const closeUpsell = document.getElementById("closeUpsell");
    const upsellDecline = document.querySelector(".upsell-decline");

    basicBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (upsellModal) {
                upsellModal.style.display = "flex";
            }
        });
    });

    if (closeUpsell) {
        closeUpsell.addEventListener("click", () => {
            upsellModal.style.display = "none";
        });
    }

    if (upsellDecline) {
        upsellDecline.addEventListener("click", (e) => {
            e.preventDefault();
            upsellModal.style.display = "none";
            if (upsellDecline.getAttribute("href") && upsellDecline.getAttribute("href") !== "#") {
                window.open(upsellDecline.getAttribute("href"), "_blank");
            }
        });
    }

    // Close upsell modal when clicking outside
    if (upsellModal) {
        window.addEventListener("click", (e) => {
            if (e.target === upsellModal) {
                upsellModal.style.display = "none";
            }
        });
    }
});

// Function called by inline onclick in HTML
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    if (modal && modalImg) {
        modalImg.src = element.src;
        modal.style.display = "flex";
    }
}
