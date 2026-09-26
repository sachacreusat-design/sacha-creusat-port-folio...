const btnSombre = document.getElementById('btn-sombre');

btnSombre.addEventListener('click', function() {
    document.body.classList.toggle('mode-sombre');
    
    if (document.body.classList.contains('mode-sombre')) {
        btnSombre.textContent = 'Mode clair';
    } else {
        btnSombre.textContent = 'Mode sombre';
    }
});
