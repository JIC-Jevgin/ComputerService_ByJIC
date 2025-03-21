document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementById("closeBtn");

    if (!localStorage.getItem("warningDismissed")) {
        setTimeout(() => {
            modal.classList.add("show");
            document.body.classList.add("modal-open");
        }, 1000);
    }

    closeBtn.onclick = function () {
        modal.classList.remove("show");
        localStorage.setItem("warningDismissed", "true");
        document.body.classList.remove("modal-open");
    };
});
document.getElementById("openModalBtn").addEventListener("click", function () {
    document.getElementById("myModal").classList.add("show");
    document.body.classList.add("modal-open");
});
