import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import components from '@/components/UI';

const app = createApp(App)

app.use(router)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app');
