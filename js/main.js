(function(){
    // Sidebar Toggler
    const menuBar = document.querySelector('#menu-bar');
    const sidebar = document.querySelector('#sidebar');
    const hamburgerMenu = menuBar.parentElement;
    
    menuBar.addEventListener('click', toggleSidebar);
    
    function toggleSidebar(event){
        event.preventDefault();
        
        toggleElements();
    }

    // Nav links toggle navbar
    document.querySelectorAll('#navbar ul li a').forEach(links => {
        links.addEventListener('click', function(){
            toggleElements();
        });
    });

    document.querySelector('#exit-sidebar').addEventListener('click', () => {
        toggleElements();
    })

    function toggleElements(){
        hamburgerMenu.classList.toggle('active');
        sidebar.classList.toggle('active')
    }

    // Smooth Scroll Effect
    $('#navbar ul li a, .showcase-content .btn, #scroll-top').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
    
            const hash = this.hash;
    
            $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 60
            },
            800
            );
        }
    });

    const elements = document.querySelectorAll('section');

    window.addEventListener('scroll', checkViewport)
    window.addEventListener('load', checkViewport)

    function checkViewport(){
        isInViewport(elements);
    }

    function isInViewport(elements){
        elements.forEach(element => {
            let position = element.getBoundingClientRect();

            position.top < window.innerHeight - (window.innerHeight / 3) && position.bottom >= 0 ? changeNavLinks(element) : null;
        })
    }

    function changeNavLinks(element){
        const navbar = document.querySelector('#navbar');
        const navLinks = navbar.querySelectorAll('ul li a');
        const activeLink = navbar.querySelector('a.active');
        activeLink.classList.remove('active');

        navLinks.forEach(link => {
            const target = link.getAttribute('href');
            const targetID = `#${element.id}`

            if(target === targetID){
                link.classList.add('active');
            }
        })
    }
})();