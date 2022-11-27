import "./bootstrap";
import "../css/app.css";
import 'tw-elements';

import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { library } from "@fortawesome/fontawesome-svg-core";
import { i18nVue } from "laravel-vue-i18n";
import {
    faFilter,
    faUser,
    faSignIn,
    faCog,
    faPowerOff,
    faIndustry,
    faGlobe,
    faMobileAlt,
    faMagicWandSparkles,
    faPlus,
    faTrash,
    faEdit,
    faTimes,
    faCircleExclamation,
    faDownload,
    faPager,
    faLanguage,
    faHardDrive,
    faChartArea,
    faSpinner,
    faUsersViewfinder,
    faCompassDrafting,
    faGift,
    faClapperboard,
    faMobileScreen,
    faEarthEurope,
    faPhone,
    faShoppingCart,
    faHeart,
    faShareNodes,
    faChevronDown,
    faChevronRight,
    faCommentDots,
    faTruckFast,
    faUsers,
    faCartPlus,
    faBell,
    faEnvelope,
    faFileInvoice,
    faTruck,
    faEnvelopeOpen,
    faBoxesStacked,
    faStar,
    faTableCellsLarge,
    faEye,
    faUserPlus,
    faEnvelopesBulk,
    faPaperPlane,
    faPercent,
    faTags,
    faBomb,
    faAddressCard,
    faRulerCombined,
    faPalette,
    faWarehouse,
    faDolly,
    faListCheck,
    faDiagramProject,
    faShapes,
    faTree,
    faFolder,
    faFolderTree,
    faCubesStacked,
    faMoneyBillTrendUp,
    faCircleXmark,
    faArrowCircleRight,
    faArrowCircleLeft,
    faBox,
    faBoxOpen,
    faCloudSun,
    faCloudSunRain,
    faHome,
    faHomeAlt,
    faHomeLgAlt,
    faHouseChimney,
    faShop,
    faUserSecret,
    faBlog,
    faCookie,
    faTruckPlane,
    faCookieBite,
    faHeadset,
    faUsersGear,
    faKey,
    faCheck,
    faCheckCircle,
    faFolderOpen,
    faIceCream,
    faBowlRice,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
    faNfcDirectional,
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

library.add([
    faIceCream,
    faBowlRice,
    faCheck,
    faCheckCircle,
    faFilter,
    faFolderOpen,
    faKey,
    faUser,
    faYoutube,
    faFileInvoice,
    faBoxesStacked,
    faStar,
    faTableCellsLarge,
    faEye,
    faUserPlus,
    faEnvelopesBulk,
    faPaperPlane,
    faPercent,
    faTags,
    faBomb,
    faAddressCard,
    faRulerCombined,
    faPalette,
    faWarehouse,
    faDolly,
    faListCheck,
    faDiagramProject,
    faTree,
    faFolder,
    faFolderTree,
    faShapes,
    faTruck,
    faBell,
    faHomeAlt,
    faHome,
    faCloudSunRain,
    faDownload,
    faShop,
    faBlog,
    faCookieBite,
    faUsersGear,
    faHeadset,
    faTruckPlane,
    faUserSecret,
    faHouseChimney,
    faEnvelope,
    faEnvelopeOpen,
    faCartPlus,
    faCubesStacked,
    faChartArea,
    faCircleXmark,
    faArrowCircleLeft,
    faBox,
    faBoxOpen,
    faCloudSunRain,
    faArrowCircleRight,
    faMoneyBillTrendUp,
    faTruckFast,
    faUsers,
    faSignIn,
    faTimes,
    faCog,
    faPowerOff,
    faCircleExclamation,
    faChevronDown,
    faDownload,
    faCommentDots,
    faShoppingCart,
    faChevronRight,
    faChevronLeft,

    faIndustry,
    faGlobe,
    faMobileAlt,
    faMagicWandSparkles,
    faPlus,
    faEdit,
    faTrash,
    faPager,
    faLanguage,
    faUsersViewfinder,
    faCompassDrafting,
    faGift,
    faClapperboard,
    faMobileScreen,
    faHeart,
    faShareNodes,
    faNfcDirectional,
    faEarthEurope,
    faHardDrive,
    faChartArea,
    faSpinner,
    faFacebookF,
    faTwitter,
    faInstagram,
    faPhone,
]);

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText ||
    "ICB";

createInertiaApp({
    title: (title) => `ICB - ${title} `,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .component("Link", Link)
            .component("Head", Head)
            .component("Fontawesome", FontAwesomeIcon)

            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(i18nVue, {
                lang: locale,
                resolve: async (lang) => {
                    const langs = import.meta.glob("../../lang/*.json");
                    return await langs[`../../lang/${lang}.json`]();
                },
            })
            .mount(el);
    },
});

InertiaProgress.init({ color: "#4B5563" });
