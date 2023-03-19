import { createApp } from 'vue'
import App from './App.vue'
import ArticleCard from './components/ArticleCard.vue'
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import RightSideBar from './components/RightSideBar.vue';

const app = createApp(App);

app.component('article-card', ArticleCard);
app.component('nav-bar', NavBar);
app.component('side-bar', SideBar);
app.component('right-side-bar', RightSideBar);


app.mount('#app');
