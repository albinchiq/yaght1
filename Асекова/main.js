// main.js

// Переключение темы
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  // Сохраняем текущую тему в localStorage
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Загрузка темы из localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
});

// Бургер меню
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Закрытие меню при клике вне его области
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
}