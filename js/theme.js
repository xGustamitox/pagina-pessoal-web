const btn = document.getElementById('toggle-theme');
const body = document.body;

// Carrega a preferência salva no navegador
if (localStorage.getItem('pref-tema') === 'escuro') {
    body.classList.add('tema-escuro');
    if (btn) btn.classList.replace('btn-outline-dark', 'btn-outline-light');
}

if (btn) {
    btn.addEventListener('click', () => {
        body.classList.toggle('tema-escuro');
        
        if (body.classList.contains('tema-escuro')) {
            localStorage.setItem('pref-tema', 'escuro');
            btn.classList.replace('btn-outline-dark', 'btn-outline-light');
        } else {
            localStorage.setItem('pref-tema', 'claro');
            btn.classList.replace('btn-outline-light', 'btn-outline-dark');
        }
    });
}