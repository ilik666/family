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
    
    const studiosSlider = new Swiper('.our-studios-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.our-studios-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        } 
    })
    const consultantSlider = new Swiper('.consultants-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
    ]

    const calendarEl = document.getElementById('calendar');
    
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ru',
        timeZone: 'Europe/Moscow',
        headerToolbar: {
          start: 'prev',
          center: 'title',
          end: 'next'
        },
        progressiveEventRendering: false,
        events: eventsList,
        eventDidMount: function(info) {
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

    calendar && calendar.render();


})
