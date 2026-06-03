const darkLightToggle = document.getElementById('dark-light-toggle');

darkLightToggle.addEventListener('click', function() {
    const isDark = document.body.classList.toggle('dark-mode');
    darkLightToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});