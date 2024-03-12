document.addEventListener("DOMContentLoaded", () => {
    // Модальное окно с локацией
    const locationDialog = document.querySelector("#location");
    const locationButton = document.querySelector(".location");
    const locationItems = document.querySelectorAll(".location-modal__item");
    const locationCity = document.querySelector(".location__city");

    function loadCity() {
        const city = localStorage.getItem("city")
        if (city) {
            document.title = `Tele2 - ${city}`
            locationCity.textContent = city;
        } else {
            document.title = `Tele2 - ${"Санкт-Петербург"}`
        }
    }

    function saveCity(city) {
        localStorage.setItem("city", city);
    }

    loadCity()
    
    locationButton.addEventListener("click", () => {
        locationDialog.showModal();
        document.body.classList.add("scroll-lock");
    })

    function handleClose(elementDialog) {
        const keyFrame = new KeyframeEffect(
            elementDialog, 
          [{opacity: "0"}], 
          { duration: 500, easing: "ease", direction: "normal" }
        )
      
        const animation = new Animation(keyFrame, document.timeline)
        animation.play()
        animation.onfinish = () => {
            elementDialog.close()
            document.body.classList.remove("scroll-lock");
        };
    }

    locationItems.forEach((item) => {
        item.addEventListener("click", () => {
            handleClose(locationDialog);
            saveCity(item.textContent);
            loadCity();
        });
    });

    // Модальное окно с формой
    const formDialog = document.querySelector(".form-modal");
    const formButtonOpen = document.querySelector(".benefit__block-action .btn");
    const formButtonSubmit = document.querySelector(".form-modal .instructions__form-action .btn");

    formButtonOpen.addEventListener("click", () => {
        formDialog.showModal();
        document.body.classList.add("scroll-lock");
    });

    formButtonSubmit.addEventListener("click", () => {
        formDialog.querySelector("form").reset();
        document.body.classList.remove("scroll-lock");
    });

    // Маска для номера
    const telInputs = document.querySelectorAll('input[type="tel"]');
    const eventCalllback = function (e) {
        let clearVal = 'false',
        matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    for (input of telInputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            input.addEventListener(ev, eventCalllback);
        }
    }
});