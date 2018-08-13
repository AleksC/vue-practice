<template>
  <div class="hello">
      <h1>{{title}}</h1>
      <form @submit.prevent>
          <label for="name">Name: </label>
          <input v-model="newContact.first_name" type="text" name="name"><br><br> 
          <label for="email">E-mail: </label>
          <input v-model="newContact.email" type="text" name="email"><br> <br>
          <button @click="addContact" type="submit">Add contact</button>
      </form><br>
      <table border="1" align='center'>
          <thead>
              <th>Name</th>
              <th>email</th>
              <th></th>
          </thead>
          <tbody>
              <tr v-for="(contact, key) in contacts" :key="key">
                <td> {{ contact.first_name }} </td>
                <td > {{ contact.last_name }} </td>
                <td> {{ contact.email }} </td>
                <td><button @click="deleteContact(contact)">Delete</button></td>
              </tr>
          </tbody>
      </table>
      <button @click="callParentMethod()">Parent Method</button>
  </div>
</template>

<script>
export default {
  name: "ContactList",
  props: ["title"],
  data() {
    return {
      contacts: [
        { name: "George", email: "george@bluthcompany.com" },
        { name: "George Michael", email: "georgemichael@bluthcompany.com" },
        { name: "Michael", email: "michael@bluthcompany.com" },
        { name: "Buster", email: "buster@bluthcompany.com" }
      ],
      newContact: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact);
      this.newContact = {};
    },
    deleteContact(contact) {
      let index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
    },
    callParentMethod() {
      this.$emit("parentMtd", "Homer");
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
