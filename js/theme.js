const themeButtons = document.querySelectorAll("#theme-button");
const themeDropdowns = document.querySelectorAll("#theme-dropdown");
const themeOptions = document.querySelectorAll(".theme-option");
const currentThemeTexts = document.querySelectorAll("#current-theme");

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

    currentThemeTexts.forEach(text => {
        text.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    });
}

// Set theme on page load
const savedTheme = localStorage.getItem("theme") || "system";
applyTheme(savedTheme);

// Toggle dropdown visibility
themeButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        themeDropdowns[index].classList.toggle("hidden");
        e.stopPropagation();
    });
});

// Apply selected theme
themeOptions.forEach(option => {
    option.addEventListener("click", (e) => {
        const selectedTheme = e.target.dataset.theme;
        applyTheme(selectedTheme);

        themeDropdowns.forEach(dropdown => dropdown.classList.add("hidden"));
    });
});

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
    themeDropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target) && ![...themeButtons].some(btn => btn.contains(e.target))) {
            dropdown.classList.add("hidden");
        }
    });
});
