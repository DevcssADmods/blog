function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const themeToggle = document.querySelector(".theme-toggle");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
}

/* Subir imagen de perfil */
document.getElementById("upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            const profilePic = document.getElementById("profile-pic");
            profilePic.innerHTML = "";
            profilePic.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

/* Modo oscuro */
document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background-color: #333;
            color: white;
        }
        .dark-mode .red {
            background: #444;
        }
        .dark-mode .icon-btn {
            background: #666;
            color: white;
        }
        .dark-mode .arrow-btn {
            background: darkblue;
        }
    `;
    document.head.appendChild(style);
});