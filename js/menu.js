const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');

    nav.classList.toggle('active');

    const isActive = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', isActive);

    if (isActive) {
        event.currentTarget.setAttribute('arial-label', 'Fechar menu')
    }else{
        event.currentTarget.setAttribute('arial-label', 'Abrir menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);