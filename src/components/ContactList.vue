<template>
  <div class="hello">
      <h1>Contact List</h1>
      <form @submit.prevent>
          <label for="name">Name: </label>
          <input v-model="newContact.name" type="text" name="name"><br><br> 
          <label for="email">E-mail: </label>
          <input v-model="newContact.email" type="text" name="email"><br> <br>
          <button @click="addContact" type="submit">Add contact</button>
      </form>
      <table border="1">
          <thead>
              <th>Name</th>
              <th>email</th>
          </thead>
          <tbody>
              <tr v-for="(contact, key) in contacts" :key="key">
                <td> {{ contact.name }} </td>
                <td> {{ contact.email }} </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "ContactList",
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
