const botao = document.getElementById('botao-tema');

const body = document.body;

/* TEMA SALVO */
const temaSalvo = localStorage.getItem('tema');

temaEscuro(temaSalvo === 'escuro');

/* FUNÇÃO TEMA */
function temaEscuro(tipo) {

    if (tipo === true) {

        body.classList.add('escuro');

        botao.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        body.classList.remove('escuro');

        botao.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

}

/* BOTÃO TEMA */
botao.addEventListener('click', () => {

    const isEscuro =
        body.classList.toggle('escuro');

    temaEscuro(isEscuro);

    localStorage.setItem(
        'tema',
        isEscuro ? 'escuro' : 'claro'
    );

});

/* SCROLL SUAVE */
const navLinks =
    document.querySelectorAll('#menu .link');

navLinks.forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute('href')
            );

        if (target) {

            const headerHeight =
                document.querySelector('header')
                    .offsetHeight;

            const targetPosition =
                target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

        }

    });

});

/* COPIAR EMAIL */
function copiarEmail() {

    const email =
        "psicologa@email.com";

    navigator.clipboard.writeText(email);

    const alerta =
        document.getElementById(
            "alerta-copiado"
        );

    alerta.classList.add("mostrar");

    setTimeout(() => {

        alerta.classList.remove("mostrar");

    }, 2000);

}