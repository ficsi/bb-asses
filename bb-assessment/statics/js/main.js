(function () {
    // retina query
    let count = 0;
    let modern_media_query = window.matchMedia("screen and (-webkit-min-device-pixel-ratio:2)");
    if (modern_media_query.matches) {
        count++
    }
    console.log(count)

    function toggleMenu() {
        let active = false;
        let panels = document.querySelectorAll('.expander__panel');
        let hamburger = document.querySelector('.menu-toggle');
        let m_menu = document.querySelector('.header-bottom');

        hamburger.addEventListener('click', function () {
            m_menu.style.display = m_menu.style.display === 'block'
                ? 'none' : 'block'
        })
        panels.forEach(function (el) {
            el.style.display = 'none';
            el.parentElement.addEventListener('click', function () {
                el.style.display = el.style.display === 'none' ? '' : 'none';
            })
        })

        console.log(panels)
    }
    function slider() {
        var imgLen = document.querySelector('.slideshow');
        var images = document.querySelectorAll('.slideshow__slide img');
        var counter = 0;

        if (counter <= images.length) {
            setInterval(function () {
                images[0].src = images[counter].src;
                console.log(images[counter].src);
                counter++;
                console.log(counter)
                if (counter === images.length) {
                    counter = 1;
                }
            }, 4000);
        }
    }

    if(window.innerWidth < 1024){
        toggleMenu();
    }


    slider();
}())

