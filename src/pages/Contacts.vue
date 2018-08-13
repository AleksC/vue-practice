<template>
  <div class="hello">
      <h1>Contacts</h1>
      <ContactListProps :contacts="contacts"/><br>
      <div>
        <ContactDetails @contactDeleted="onContactDelete" :contact="contact"/>
      </div>
  </div>
</template>

<script>
import ContactListProps from "../components/ContactListProps";
import ContactDetails from "../components/ContactDetails";
import { contacts } from "./../services/Contacts";

export default {
  name: "ContactList",
  components: {
    ContactListProps,
    ContactDetails
  },
  data() {
    return {
      contacts: []
    };
  },
  methods: {
    onContactDelete(contact) {
      const index = this.contacts.findIndex(c => c.id === contact.id);
      this.contacts.splice(index, 1);
    }
  },
  beforeRouteEnter(to, from, next) {
    contacts
      .getAll()
      .then(response => {
        next(vm => {
          vm.contacts = response.data;
        });
      })
      .catch(err => console.log(err));
  },
  computed: {
    contact() {
      let routeParam = Number(this.$route.params.id);
      return this.contacts.find(contact => contact.id === Number(routeParam));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
