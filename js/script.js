$(document).ready(function () {
    $('.header__burger').click(
        function (event) {
            $('.header__burger,.header__container-navigation').toggleClass('active')
        }
    )
}
)


var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);



document.querySelector('#kitchen').addEventListener('blur', validateKitchen);
document.querySelector('#username').addEventListener('blur', validateUsername);
document.querySelector('#userLastname').addEventListener('blur', validateUserLastname);
document.querySelector('#phoneNumber').addEventListener('blur', validatePhoneNumber);
document.querySelector('#nickName').addEventListener('blur', validateNickName);
document.querySelector('#town').addEventListener('blur', validateTown);
document.querySelector('#map').addEventListener('blur', validateMap);
document.querySelector('#index').addEventListener('blur', validateIndex);
document.querySelector('#check').addEventListener('blur', validateCheck);
const reSpaces = /^\S*$/; /// проверка на наличие пробелов



function validateKitchen() {
    const kitchen = document.querySelector('#kitchen');

    if (kitchen.value !== "") {
        kitchen.classList.remove('is-invalid');
        kitchen.classList.add('is-valid');
        return true;
    } else {
        kitchen.classList.add('is-invalid');
        kitchen.classList.remove('is-valid');
        return false;
    }
}
function validateUsername(e) {
    //const reSpaces = /^\S*$/; //запрещает пробелы
    const username = document.querySelector('#username');
    if (username.value.length >= 2 & reSpaces.test(username.value)) {
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
        return true;
    } else {
        username.classList.remove('is-valid');

        username.classList.add('is-invalid');
        return false;
    }
}
function validateUserLastname(e) {
    const userLastname = document.querySelector('#userLastname');
    if (userLastname.value.length >= 2 & reSpaces.test(userLastname.value)) {
        userLastname.classList.remove('is-invalid');
        userLastname.classList.add('is-valid');
        return true;
    } else {
        userLastname.classList.remove('is-valid');

        userLastname.classList.add('is-invalid');
        return false;
    }
}

function validatePhoneNumber(e) {
    const phoneNumber = document.querySelector('#phoneNumber');
    const re = /^\d{11}$/; // Проверка: должен состоять из 11 цифр

    if (re.test(phoneNumber.value)) {
        phoneNumber.classList.remove('is-invalid');
        phoneNumber.classList.add('is-valid');
        return true;
    } else {
        phoneNumber.classList.add('is-invalid');
        phoneNumber.classList.remove('is-valid');
        return false;
    }
}
function validateNickName(e) {
    const nickName = document.querySelector('#nickName');
    const re = /^\d{10}$/;
    if (re.test(nickName.value)) {
        nickName.classList.remove('is-invalid');
        nickName.classList.add('is-valid');
        return true;
    } else {
        nickName.classList.add('is-invalid');
        nickName.classList.remove('is-valid');
        return false;
    }
}
function validateTown() {
    const town = document.querySelector('#town');

    if (town.value !== "") {
        town.classList.remove('is-invalid');
        town.classList.add('is-valid');
        return true;
    } else {
        town.classList.add('is-invalid');
        town.classList.remove('is-valid');
        return false;
    }
}
function validateMap(e) {
    const map = document.querySelector('#map');
    //const re = /^\d{2}$/;
    if (map.value.length >= 2 & reSpaces.test(map.value)) {
        map.classList.remove('is-invalid');
        map.classList.add('is-valid');
        return true;
    } else {
        map.classList.add('is-invalid');
        map.classList.remove('is-valid');
        return false;
    }
}
function validateIndex(e) {
    const index = document.querySelector('#index');
    const re = /^\d{1}$/;
    if (index.value.length >= 1 & reSpaces.test(index.value)) {
        index.classList.remove('is-invalid');
        index.classList.add('is-valid');
        return true;
    } else {
        index.classList.add('is-invalid');
        index.classList.remove('is-valid');
        return false;
    }
}
function validateCheck(e) {
    const check = document.querySelector('#check');
    if (!check.checked) {
        check.classList.add('is-invalid');
    } else {
        check.classList.remove('is-invalid');
    }
}
(function () {
    const forms = document.querySelectorAll('.needs-validation');

    for (let form of forms) {
        form.addEventListener(
            'submit',
            function (event) {
                if (
                    !form.checkValidity() ||
                    !validateNickName() ||
                    !validateUsername() ||
                    !validatePhoneNumber() ||
                    !validateUserLastname() ||
                    !validateNickName() ||
                    !validateSelect() ||
                    !validateMap() ||
                    !validateIndex() ||
                    !validateCheck()
                ) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    form.classList.add('was-validated');
                }
            },
            false
        );
    }
})();







// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("YMapsID", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [45.052, 38.96],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 13
    });

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [45.0506077, 38.96178] // координаты точки
        }

    });


    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
}

function init() {
    var myMap = new ymaps.Map("YMapsID", {
        center: [45.052, 38.96],
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    }),
        myPlacemark = new ymaps.Placemark([45.0506077, 38.96178], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "“Немецкий Стандарт”",
            balloonContentBody: "<b>Адрес:</b> <br>г. Краснодар, ул. Красных Партизан, 483 <br> <br> <b>Телефон:</b> <br> +7 (8612) 17-93-76 <br> +7 (989) 277-94-30",
            balloonContentFooter: "",
            hintContent: "<b>	“Немецкий Стандарт</b>”"
        });

    myMap.geoObjects.add(myPlacemark);

    //// Открываем балун на карте (без привязки к геообъекту).
    //myMap.balloon.open([51.85, 38.37], "Содержимое балуна", {
    //	 // Опция: не показываем кнопку закрытия.
    //	 closeButton: false
    //});

    //// Показываем хинт на карте (без привязки к геообъекту).
    //myMap.hint.open(myMap.getCenter(), "Одинокий хинт без метки", {
    //	 // Опция: задержка перед открытием.
    //	// openTimeout: 1500
    //});
}
//window.onload = function () {
////	// Создает экземпляр карты и привязывает его к созданному контейнеру
//	var map = new YMaps.Map(document.getElementById("YMapsID"));

////	// Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
//	map.setCenter(new YMaps.GeoPoint(38.96, 45.050), 15);
////	// Создает метку в центре Москвы
//var placemark = new YMaps.Placemark(new YMaps.GeoPoint(38.96178,45.0506077 ));

////	// Устанавливает содержимое балуна
//placemark.name = "Немецкий стандар";
//placemark.description = "Кухни на заказ +7 (989) 277-94-30";

////	// Добавляет метку на карту
//	map.addOverlay(placemark);
//};