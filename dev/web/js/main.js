document.addEventListener('DOMContentLoaded', () => {
	// polyfill flat
	// if (!Array.prototype.flat) Array.prototype.flat = function () {
	// 	return (function f(arr) {
	// 	return arr.reduce(
	// 			(a, v) =>
	// 	Array.isArray(v)
	// 				? a.concat(f(v))
	// 				: a.concat(  v )
	// 			, []
	// 		)
	// 	})(this)
    // };

    const headerTopNav = document.querySelector('.header__top')
    const headerNavWrapper = document.querySelector('.header__nav')
    const headerMenu = document.querySelector('.header__list')
    const searchElement = document.querySelector('.search')
    const headerPhone = document.querySelector('.header__phone')
    const headerSocials = document.querySelector('.header__socials')
    const buttonsUserWrap = document.querySelector('.header__buttons')
    const headerLogo = document.querySelector('.header__logo')

    if(document.documentElement.clientWidth < 992) {
        headerNavWrapper.insertAdjacentElement('beforeend', headerPhone)
        headerNavWrapper.insertAdjacentElement('beforeend', searchElement)
    } else {
        headerTopNav.insertBefore(headerPhone, buttonsUserWrap)
        headerTopNav.insertAdjacentElement('beforeend', searchElement)
    }
    // if(document.documentElement.clientWidth < 466) {
    //     const createLi  = document.createElement('li')
    //     createLi.append(headerSocials)
    //     headerMenu.insertAdjacentElement('beforeend', createLi)
    // }

    window.addEventListener('resize', function (e) {
        if(document.documentElement.clientWidth < 992) {
            headerNavWrapper.insertAdjacentElement('beforeend', headerPhone)
            headerNavWrapper.insertAdjacentElement('beforeend', searchElement)
        } else {
            headerTopNav.insertBefore(headerPhone, buttonsUserWrap)
            headerTopNav.insertAdjacentElement('beforeend', searchElement)
        }
    });

    const menuBtn = document.querySelectorAll('.header__title-menu')

    if(menuBtn.length && document.documentElement.clientWidth < 992) {
        menuBtn.forEach(el => {
            el.addEventListener('click', function() {
                this.querySelector('.hide-nav').classList.toggle('active')
                this.nextElementSibling.classList.toggle('active')
            })
        })
    }
    


    function preloaderElement() {
        return `
            <div class="preloader">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
                <div class="circle circle-3"></div>
                <div class="circle circle-4"></div>
                <div class="circle circle-5"></div>
            </div>
        `
    }

	function createRipple(e) {
		const button = e.target.closest('.g-btn--animate');
		const ripple = document.querySelectorAll(".ripple");

		if (ripple) ripple.forEach( el => el.remove() )

		const circle = document.createElement("span");
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;
	  
		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${e.offsetX - radius }px`;
		circle.style.top = `${e.offsetY - radius }px`;
		circle.classList.add("ripple");

		button.appendChild(circle);
	}
	
	const buttons = document.querySelectorAll('.g-btn--animate');
	if(buttons.length) buttons.forEach( el => el.addEventListener('click', createRipple) )
    
    const topBannerSlider = new Swiper('.top-banner-slider', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.top-right',
            prevEl: '.top-left',
        },
    })

    const studiosSlider = new Swiper('.our-studios-slider', {
        spaceBetween: 30,
        pagination: {
            el: '.our-studios-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 } 
        }
    })
    const consultantSlider = new Swiper('.consultants-slider', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 }
        }
    })

    const defaultStaticSlider = new Swiper('.static-slider', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1199: { slidesPerView: 4 }
        }
    })

	
    let scrollAnimationItems = document.querySelectorAll('[data-n]');
    let startFlag = true
    if (scrollAnimationItems.length) window.addEventListener('scroll', showAfterScroll);

    const startedCallback = (elems, callback) => elems.forEach( el => callback(el))

    function animateNumber(el, step = 1 ,interval = 50) {
        let _max = el.dataset.n
        let count = 0

        if(_max > 100) step = 10
        else if(_max > 1000) step = 15

        let startTimer = setInterval(() => {
            count = count + step
            el.textContent = count

            if(count >= _max) {
                el.textContent = _max
                clearInterval(startTimer)
            }
        }, interval / 2); 
    }

    function showAfterScroll() {
        for (let i = 0; i < scrollAnimationItems.length; i++) {
            if ((scrollAnimationItems[i].getBoundingClientRect().top < document.documentElement.clientHeight / 1.5 &&
                scrollAnimationItems[i].getBoundingClientRect().top > 0)) {
                    startFlag && startedCallback(scrollAnimationItems, animateNumber)
                    startFlag = false
            }
        }
    }
    // Временные события для календаря
    const eventsList = [
        {
            title: 'Event1',
            start: '2020-12-12',
            display: 'background',
            color: 'red',
        },
        {
            title: 'Event1',
            start: '2020-12-15',
            display: 'background',
            color: 'red',
        },
        {
            title: 'Event1',
            start: '2020-12-31',
            display: 'background',
            color: 'red',
        },
        {
            title: 'Event1',
            start: '2020-12-31',
            display: 'background',
            color: 'red',
        },
        {
            title: 'Event1',
            start: '2021-01-21',
            display: 'background',
            color: 'red',
        },
        {
            title: 'Event1',
            start: '2021-02-02',
            display: 'background',
            color: 'red',
        },
    ]

    const calendarEl = document.getElementById('calendar');
    

    if(calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'ru',
            height: 'auto',
            timeZone: 'Europe/Moscow',
            headerToolbar: {
              start: 'prev',
              center: 'title',
              end: 'next'
            },
            progressiveEventRendering: false,
            events: eventsList,
            eventContent: function(info) {
                const eventDate = eventsList.map( el => el.start)
                eventDate.forEach(item => {
                    let elem = document.querySelector(`[data-date="${item}"]`)
                    elem && elem.classList.add('active')
                })
            },
            dateClick: function(info) {
                const parentDate = info.dayEl
                if(parentDate.classList.contains('active')) {
                    alert(' Данный раздел в разработке')
                }
            }
        });
        calendar.render();
    }
    
    const typeRadioBtns = document.querySelectorAll('[name="interes-type"]')
    const categoryRadioBtns = document.querySelectorAll('[name="interes-category"]')
    const interesLinkWrap = document.querySelector('.interes-category-links')

    // test response array for category links
    const resp = [
        {
            title: 'Познавательное развитие',
            link: '#',
            imgUrl: 'web/images/general/interest/i3-1.png',
        },
        {
            title: 'Познавательное развитие',
            link: '#',
            imgUrl: 'web/images/general/interest/i3-2.png',
        },
        {
            title: 'Познавательное развитие',
            link: '#',
            imgUrl: 'web/images/general/interest/i3-3.png',
        },
        {
            title: 'Познавательное развитие',
            link: '#',
            imgUrl: 'web/images/general/interest/i3-4.png',
        },
        {
            title: 'Познавательное развитие',
            link: '#',
            imgUrl: 'web/images/general/interest/i3-5.png',
        },
        {
            title: 'Познавательное развитие',
            link: '#',
            imgUrl: 'web/images/general/interest/i3-6.png',
        },
        {
            title: 'Познавательное развитие',
            link: '#',
            imgUrl: 'web/images/general/interest/i3-7.png',
        },
    ]

    typeRadioBtns && typeRadioBtns.forEach(el => {
        el.addEventListener('change', function() {
            const parentElem = this.closest('.interes-type')
            const nextTabElem = parentElem.nextElementSibling

            categoryRadioBtns.forEach( el => el.checked = false)

            if(nextTabElem && interesLinkWrap) {
                interesLinkWrap.innerHTML = ''
                nextTabElem.style.display = 'flex'
            }
        })
    })
    

    function createLinkForCategory(option) {
        return `
            <a href='${option.link}' title='${option.title}' class='interes-link'>
                <div class='interes-link__img'>
                    <img src='${option.imgUrl}' alt='${option.title}'>
                </div>
                <span> ${option.title} </span>
            </a>
        `
    }

    categoryRadioBtns && categoryRadioBtns.forEach(el => {
        el.addEventListener('click', function(e) {
            // Подготовка велью value для аякс запроса
            const chckedTypeRadio = Array.from(typeRadioBtns).find( item => item.checked )
            const checkedCategoryRadio = this.value

            let _str = ''
            interesLinkWrap.innerHTML = preloaderElement()

            // Тут делаем фетч запрос поместить в фетч запрос для обработки ответа
            // таймаут  потом убрать для эффекта визуализации подгрузки
            setTimeout( () => {
                resp.forEach( el => _str += createLinkForCategory(el) )
                interesLinkWrap.innerHTML = ''
                interesLinkWrap.insertAdjacentHTML('afterbegin', _str)
                _str = ''
            }, 2000 )
        })
    })


    function findVideos() {
        let videos = document.querySelectorAll('.video');
    
        for (let i = 0; i < videos.length; i++) {
            setupVideo(videos[i]);
        }
    }
    
    function setupVideo(video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let id = parseMediaURL(media);
    
        video.addEventListener('click', () => {
            let iframe = createIframe(id);
    
            link.remove();
            button.remove();
            video.appendChild(iframe);
        });
    
        link.removeAttribute('href');
        video.classList.add('video--enabled');
    }
    
    function parseMediaURL(media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);
    
        return match[1];
    }
    
    function createIframe(id) {
        let iframe = document.createElement('iframe');
    
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', generateURL(id));
        iframe.classList.add('video__media');
    
        return iframe;
    }
    
    function generateURL(id) {
        let query = '?rel=0&showinfo=0&autoplay=1';
    
        return 'https://www.youtube.com/embed/' + id + query;
    }
    
    findVideos();


    const addedChildrenBtn = document.querySelector('.added')

    function createFieldsForChild(name, date) {
        return `
            <hr>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder='Фамилия Имя ребенка'>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-4">
                    <div class="form-group">
                        <span> Дата рождения </span>
                        <input type="date" class="form-control">
                    </div>
                </div>
            </div>
        `
    }

    if(addedChildrenBtn) {
        addedChildrenBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.insertAdjacentHTML('beforebegin', createFieldsForChild() )
        })
    }


    $('a[data-rel^=lightcase]').lightcase({
		maxWidth: 1850,
		maxHeight: 1000,
    });

    // $(".checkbox-menu").on("change", "input[type='checkbox']", function() {
    //     $(this).closest("li").toggleClass("active", this.checked);
    //  });
     
     $(document).on('click', '.allow-focus', function (e) {
       e.stopPropagation();
     });
})
