$(document).ready(function() {
    // Menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Seções da página
    const sections = $('#home, #services, #about'); // Seções que correspondem aos links
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        // Mudança de sombra no cabeçalho
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        // Encontrar a seção ativa
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96; // Ajuste para o tamanho do cabeçalho
            const sectionBottom = sectionTop + section.outerHeight();

            // Verifica se a posição de rolagem está dentro da seção
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Sai do loop ao encontrar a seção ativa
            }
        });

        // Atualizar os itens de navegação
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });
});


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
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#about', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#contact', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#form', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#about', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#about_img', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});