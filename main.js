/* =====================================
   TYPED.JS TEXT ANIMATION
===================================== */
document.addEventListener("DOMContentLoaded", function () {

    var typingSpeed = window.innerWidth < 768 ? 60 : 80;

    if (document.querySelector(".text")) {
        new Typed(".text", {
            strings: [
                "Frontend Developer",
                "Angular Developer",
                "UI/UX Designer",
                "Web Designer"
            ],
            typeSpeed: typingSpeed,
            backSpeed: 45,
            backDelay: 1200,
            startDelay: 500,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: "|"
        });
    }

    /* =====================================
       CONTACT FORM → WHATSAPP + EMAIL
       (NO HTML CHANGE)
    ===================================== */
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // stop reload

            const name = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const message = form.querySelector("textarea").value.trim();

            if (!name || !email || !message) {
                alert("Please fill all the fields.");
                return;
            }

            const finalMessage =
`Hello Kavin Kishore 👋

Name: ${name}
Email: ${email}

Message:
${message}`;

            const encodedMessage = encodeURIComponent(finalMessage);

            /* ---------- WHATSAPP ---------- */
            const whatsappNumber = "919080309351"; // Your WhatsApp number
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, "_blank");

            /* ---------- EMAIL ---------- */
            const mailURL = `mailto:ekavinkishore28@email.com?subject=Portfolio Contact from ${name}&body=${encodedMessage}`;
            window.location.href = mailURL;

            form.reset();
        });
    }

    /* =====================================
       ACTIVE NAVBAR LINK ON SCROLL
    ===================================== */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

});
