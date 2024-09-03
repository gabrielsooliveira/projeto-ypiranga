import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap';

import { ZiggyVue } from 'ziggy';
import { Ziggy } from './ziggy.js';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import SiteLayout from './Layouts/Site.vue';
import DashboardLayout from './Layouts/Dashboard.vue';

library.add(fas, fab, far)

createInertiaApp({
    title: title => `${title} - Esporte Clube Ypiranga`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue');
        const resolvePageComponent = (name, pages) => {
            const importPage = pages[`./Pages/${name}.vue`];
            if (!importPage) {
                throw new Error(`Page not found: ./Pages/${name}.vue`);
            }
            return importPage();
        };
        const page = resolvePageComponent(name, pages);
        page.then(module => {
            if (name.startsWith('Admin/')) {
                module.default.layout = DashboardLayout;
            }else if(name.startsWith('Site/')){
                module.default.layout = SiteLayout;
            }
        });
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
        .component('font-awesome-icon', FontAwesomeIcon)
        .use(ZiggyVue, Ziggy)
        .use(plugin)
        .mount(el)
    },
    progress: {
        color: '#ffc600',
    }
});
