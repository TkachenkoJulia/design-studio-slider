document.addEventListener("DOMContentLoaded", () => {
    const sliderControlLeft = document.querySelector('.projects__controls__left');
    const sliderControlRight = document.querySelector('.projects__controls__right');
    const sliderDots = document.querySelectorAll('.projects__controls__dots__item');
    const slides = document.querySelectorAll('.projects__slider__slide');
    const sliderLinkControls = document.querySelectorAll('.slider__link__control');



    // Вычисляем текущий индекс слайда
    let currentIndex = 0;

    const dropActiveClasses = () => {
        slides.forEach((item) => {
            if (item.classList.contains('projects__slider__slide--active')) {
                item.classList.remove('projects__slider__slide--active')
            }
        })
    }

    const dropActiveDots = () => {
        sliderDots.forEach((dot) => {
            if (dot.classList.contains('projects__controls__dots__item--active')) {
                dot.classList.remove('projects__controls__dots__item--active')
            }
        })
    }

    const dropActiveLinks = () => {
        sliderLinkControls.forEach((link) => {
            if (link.classList.contains('slider__link__control--active')) {
                link.classList.remove('slider__link__control--active')
            }
        })
    }

    const makeInitialDotActive = () => {
        dropActiveDots();
        let currentActiveIndex = 0;
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('projects__slider__slide--active')) {
                currentActiveIndex = i;
            }
            makeDotActive(currentActiveIndex);
        }
    }

    const makeInitialLinkActive = () => {
        dropActiveLinks();
        let currentActiveIndex = 0;
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('projects__slider__slide--active')) {
                currentActiveIndex = i;
            }
            makeLinkActive(currentActiveIndex);
        }
    }

    const makeDotActive = (index) => {
        sliderDots[index].classList.add('projects__controls__dots__item--active')
    }

    const makeLinkActive = (index) => {
        sliderLinkControls[index].classList.add('slider__link__control--active');
    }

    const toggleSlideForward = () => {
        let max = 3;
        let min = 0;
        dropActiveClasses();

        if (currentIndex <= max) {
            currentIndex++;
        }

        if (currentIndex === max) {
            currentIndex = min;
        }

        dropActiveDots();
        dropActiveLinks();

        makeDotActive(currentIndex);
        makeLinkActive(currentIndex);

        slides[currentIndex].classList.add('projects__slider__slide--active');
    }

    const toggleSlideBackward = () => {
        let max = 3;
        let min = 0;
        dropActiveClasses();

        if (currentIndex === min) {
            currentIndex = (max - 1);
        } else {
            currentIndex--;
        }

        dropActiveDots();
        dropActiveLinks();

        makeDotActive(currentIndex);
        makeLinkActive(currentIndex);

        slides[currentIndex].classList.add('projects__slider__slide--active');
    }


    sliderControlLeft.addEventListener("click", (evt) => {
        evt.preventDefault();
        toggleSlideBackward();
    });
    sliderControlRight.addEventListener("click", (evt) => {
        evt.preventDefault();
        toggleSlideForward();
    });

    const makeSlideActive = (index) => {
        if (!slides[index].classList.contains('projects__slider__slide--active')) {
            slides[index].classList.add('projects__slider__slide--active')
        }
    }

    const activeToggleHandler = (index) => {
        dropActiveDots();
        dropActiveLinks();
        dropActiveClasses();
        makeDotActive(index);
        makeLinkActive(index);
        makeSlideActive(index);
    }

    for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].addEventListener('click', (evt) => {
            evt.preventDefault();
            const activeIndex = i;
            activeToggleHandler(activeIndex);
        })
    }

    for (let i = 0; i < sliderLinkControls.length; i++) {
        sliderLinkControls[i].addEventListener('click', (evt) => {
            evt.preventDefault();
            const activeIndex = i;
            activeToggleHandler(activeIndex);
        })
    }

    makeInitialDotActive();
    makeInitialLinkActive();
});