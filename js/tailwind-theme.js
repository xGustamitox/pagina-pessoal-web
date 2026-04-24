const themeBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Verificar preferência guardada no navegador
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}