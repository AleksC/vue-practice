<template>
  <div class="hello">
      <h1>Contact List</h1>
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
      ]
    };
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
