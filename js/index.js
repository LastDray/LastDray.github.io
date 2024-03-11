document.addEventListener("DOMContentLoaded", () => {
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
});