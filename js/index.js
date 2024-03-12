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
    const formTelInput = document.querySelector(".form-modal input[type='tel']")
    const formFeedback = document.querySelector(".form-modal .instructions__form-feedback");
    const formCheckbox = formDialog.querySelector(".instructions__form-checkbox");

    function formFeedbackFunc(form, text, ok) {
        const formFeedback = form.querySelector(".instructions__form-feedback");
        images = formFeedback.querySelectorAll("img");
        if (!ok) {
            images[1].classList.remove("hidden");
            images[0].classList.add("hidden");
        } else {
            images[0].classList.remove("hidden");
            images[1].classList.add("hidden");
        }
        
        formFeedbackText = formFeedback.querySelector("div");
        formFeedbackText.textContent = text;
        formFeedback.classList.remove("instructions__form-feedback_hidden");
    }

    formButtonOpen.addEventListener("click", () => {
        formDialog.showModal();
        document.body.classList.add("scroll-lock");
    });

    formButtonSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (formTelInput.value.length < 18) {
            formFeedbackFunc(formDialog, "Неправильно введён номер", false);
        } else if (!formCheckbox.checked) {
            formFeedbackFunc(formDialog, "Необходимо принять условия соглашения", false);
        } else {
            formFeedbackFunc(formDialog, "Промокод выслан на ваш номер", true);
            setTimeout(() => {
                formDialog.querySelector("form").reset();
                formDialog.close();
                document.body.classList.remove("scroll-lock");
                formFeedback.classList.add("instructions__form-feedback_hidden");
            }, 1000);
        }
        
    });

    // Форма
    const formInstructions = document.querySelector(".instructions__form");
    const formInstructionsTel = formInstructions.querySelector("input[type='tel']");
    const formInstructionsCheckbox = formInstructions.querySelector("input[type='checkbox']");
    const formInstructionsSubmit = formInstructions.querySelector(".instructions__form-action .btn");

    formInstructionsSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (formInstructionsTel.value.length < 18) {
            formFeedbackFunc(formInstructions, "Неправильно введён номер", false);
        } else if (!formInstructionsCheckbox.checked) {
            formFeedbackFunc(formInstructions, "Необходимо принять условия соглашения", false);
        } else {
            formFeedbackFunc(formInstructions, "Промокод выслан на ваш номер", true);
            formInstructions.reset();
        }
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

    // Кнопка наверх
    const buttonBack = document.querySelector(".button-back");
    buttonBack.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
            buttonBack.classList.remove("button-back_hidden");
        } else {
            buttonBack.classList.add("button-back_hidden");
        }
      });
});