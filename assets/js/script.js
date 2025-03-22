document.addEventListener("DOMContentLoaded", () => {
    let sliderControlLeft = document.querySelector('.projects__controls__left');
    let sliderControlRight = document.querySelector('.projects__controls__right');
    let sliderDots = document.querySelectorAll('.projects__controls__dots__item');
    let slides = document.querySelectorAll('.projects__slider__slide');

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

    const makeDotActive = (index) => {
        sliderDots[index].classList.add('projects__controls__dots__item--active')
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

        makeDotActive(currentIndex);

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

        makeDotActive(currentIndex);

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

    for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].addEventListener('click', (evt) => {
            evt.preventDefault();
            dropActiveDots();
            const activeIndex = i;
            makeDotActive(activeIndex);
            dropActiveClasses();
            makeSlideActive(activeIndex);
        })
    }
});