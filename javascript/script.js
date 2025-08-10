import { firebaseConfig } from './firebase-config';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Inicializa o app e o banco de dados
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// para o formulário no seu script.js
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = contactForm.querySelector('input[placeholder="Nome"]').value;
    const telefone = contactForm.querySelector('input[placeholder="Telefone"]').value;
    const email = contactForm.querySelector('input[placeholder="E-mail"]').value;
    const mensagem = contactForm.querySelector('textarea[placeholder="Mensagem"]').value;

    try {
        await addDoc(collection(db, "contatos"), {
            nome: nome,
            telefone: telefone,
            email: email,
            mensagem: mensagem,
            dataEnvio: new Date()
        });
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
        alert('Erro ao enviar mensagem.');
    }
});

$(document).ready(function() {
    // Menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Seções da página
    const sections = $('#home, #services, #about');
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });
});

// Seu código ScrollReveal começa aqui
ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.service', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#testimonial_img', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
});

ScrollReveal().reveal('.feedback', {
    origin: 'right',
    duration: 1000,
    distance: '20%'
});

ScrollReveal().reveal('#about', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
});

ScrollReveal().reveal('#contact', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
});

ScrollReveal().reveal('#form', {
    origin: 'right',
    duration: 1000,
    distance: '20%'
});

ScrollReveal().reveal('#about_img', {
    origin: 'right',
    duration: 1000,
    distance: '20%'
});