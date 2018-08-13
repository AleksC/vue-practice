import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Contacts from './pages/Contacts.vue';
import AddContact from './pages/AddContact.vue';
import ContactDetails from './components/ContactDetails.vue';
import ContactListProps from './components/ContactListProps.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', redirect: '/contacts' },
  { path: '/contacts', component: Contacts },
  { path: '/add-contact', component: AddContact, name: "add-contact" },
  { path: '/contacts/:id', component: Contacts, name: "contact-details" }
];

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
