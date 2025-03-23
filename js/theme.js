const themeButton = document.getElementById("theme-button");
const themeDropdown = document.getElementById("theme-dropdown");
const currentThemeText = document.getElementById("current-theme");
const themeOptions = document.querySelectorAll(".theme-option");

function applyTheme(theme) {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        localStorage.removeItem("theme");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
    currentThemeText.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
}

// Set theme on page load
const savedTheme = localStorage.getItem("theme") || "system";
applyTheme(savedTheme);

// Toggle dropdown visibility
themeButton.addEventListener("click", () => {
    themeDropdown.classList.toggle("hidden");
});

// Apply selected theme
themeOptions.forEach(option => {
    option.addEventListener("click", (e) => {
        const selectedTheme = e.target.dataset.theme;
        applyTheme(selectedTheme);
        themeDropdown.classList.add("hidden");
    });
});

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!themeButton.contains(e.target) && !themeDropdown.contains(e.target)) {
        themeDropdown.classList.add("hidden");
    }
});