document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Toggle dark mode
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "Toggle Dark Mode";
    themeToggle.classList.add("theme-toggle");
    document.body.insertBefore(themeToggle, document.body.firstChild);

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Image modal viewer
    const images = document.querySelectorAll(".portfolio-item img");
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = `<div class="modal-content"><span class="close">&times;</span><img src="" alt="Expanded View"></div>`;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector("img");
    const closeModal = modal.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
