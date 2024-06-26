import {
    faBroom,
    faCloud,
    faFire,
    faHome,
    faMountain,
    faPeopleGroup,
    faSun,
    faTree
} from "@fortawesome/free-solid-svg-icons";

export const refs = [{name: " О домике", section: "about-home"},
    {name: "Как добраться", section: "arrive"}, {name: "Атмосфера", section: "atmosphere"},
    {name: "Отзывы", section: "reviews"},
    {name: "Контакты", section: "contacts"}
]

export const pages = [{
    name: "Галерея", link: "gallery"},
    // {name: "Контакты", link: "contacts"}
]

export const weHave = [
    {
        title: "Озеро",
        content: "Хотите искупаться, прокатиться по водной глади или просто полюбоваться красотой Байкала – озеро прямо за калиткой!",
        img: "/img/WeHave/Озеро-1-150x150.jpg"
    },
    {
        title: "Кухня",
        content: "Вы хотите готовить сами - для этого на кухне есть все необходимое. А можно заказать доставку по меню из ближайшего кафе!",
        img: "/img/WeHave/Кухня-1-150x150.jpg"
    },
    {
        title: "Печь-камин",
        content: "Душа байкальской избушки – печь-камин, возле нее можно погреться, полюбоваться стихией огня, вскипятить чайку",
        img: "/img/WeHave/Печь-Камин-1-150x150.jpg"
    },
    {
        title: "Вода",
        content: "Её можно пить прямо из-под крана, она из нашего чистейшего артезианского источника, сообщающегося с глубинной водой Байкала",
        img: "/img/WeHave/Вода-1-150x150.jpeg"
    },
    {
        title: "Парковка",
        content: "Для автомобилей и лодок гостей большая и удобная стоянка, она находится под охраной и видеонаблюдением",
        img: "/img/WeHave/Парковка-1-150x150.jpg"
    },
    {
        title: "Баня",
        content: "Решили устроить себе банный день? В нашей сибирской бане будет жарко даже в самые суровые морозы",
        img: "/img/WeHave/Баня-1-150x150.jpg"
    },
    {
        title: "Территория",
        content: "Домик окружает живая природа Прибайкалья, где нашлось место для отдыха и активного развлечения взрослых и детей",
        img: "/img/WeHave/Территория-1-150x150.jpg"
    },
    {
        title: "Зона барбекю",
        content: "Вкусная рыбка на углях? Можно устроить праздник в беседке с мангалом, а можно душевно поужинать на видовой террасе",
        img: "/img/WeHave/ЗонаБарбекю-1-150x150.jpg"
    },
    {
        title: "Услуги",
        content: "Мы можем встретить и проводить в аэропорт, покатать на лодке или квадроцикле, вместе съездить на рыбалку или сходить в горы",
        img: "/img/WeHave/Услуги-1-768x763.jpg"
    },
]

export const comments = [
    {
        name: "Инна",
        content: "Сказочный Новый Год в сказочном домике на берегу потрясающего озера!",
        img: faTree,
        className:"text-green-400"
    },
    {
        name: "Ольга",
        content: "Благодарим за теплый прием, душевную атмосферу и залипательный камин",
        img: faFire,
        className:"text-red-400"
    },
    {
        name: "Катя",
        content:
            "Особая благодарность за те мелочи, которые делают отдых комфортным.  Только не знаем кого благодарить за чудесный вид за окном – матушку природу или проектировщика дома?",
        img: faMountain,
        className:"text-purple-400"
    },
    {
        name: "Алексей",
        content:
            "Огромная благодарность за уютные, домашние условия проживания! Красивые светлые комнаты, с потрясающим видом на Байкал и на горы, удобная кухня, приятная посуда и мебель",
        img: faHome,
        className:"text-brown-400"
    },
    {
        name: "Олег",
        content:
            "Большое спасибо за радушный прием! Нам очень все понравилось, жаль, что мало времени было, надеемся в следующий раз приедем на подольше",
        img: faSun,
        className:"text-yellow-400"
    },
    {
        name: "Георгий",
        content:
            "Дом суперский! Кристально чистый, уютный, все есть как дома. Даже не хотелось уезжать",
        img: faBroom,
        className:"text-orange-400"
    },
    {
        name: "Николай",
        content:
            "Отдыхали с друзьями. Отличный прием и удачная рыбалка!",
        img: faPeopleGroup,
        className:"text-gray-400"
    },
    {
        name: "Алена",
        content:
            "Благодарим от души хозяев дома. Вы столько нам подарили… Впечатления, заботу, уют, комфорт, а главное незаменимое человеческое тепло",
        img: faCloud,
        className:"text-blue-400"
    },
]

export const images = [
    {src: "/img/2023/Территория/28.jpg", label: "Территория"},
    {src: "/img/2023/Баня/4.jpg", label: "Баня"},
    {src: "/img/2023/Территория/26.jpg", label: "Территория"},
    {src: "/img/2023/Территория/31.jpg", label: "Территория"},
    {src: "/img/2023/ВнутриДома/24.jpg", label: "Кухня"},
    {src: "/img/2023/ВнутриДома/22.jpg", label: "Кухня"},
]

export const videos = [
    {src: "/video/Хижина2023_моб.mp4", img: "/img/2023/Территория/25.jpg"},
    {src: "/video/B-Nut_web_1.mp4", img: "/img/2023/Территория/27.jpg"},
    {src: "/video/9convert.com-Хижина-на-Байкале-Место-силы_1080p.mp4", img: "/img/2023/ВнутриДома/19.jpg"},
    // {src: "/video/Инна31.mp4", img:"/img/2023/Территория/25.jpg"},
]