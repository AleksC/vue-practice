<template>
    <div>     
     <table border="1" align='center'>
          <thead>
              <th>id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>email</th>
              <th>Number</th>
          </thead>
          <tbody>
              <tr v-for="(contact, key) in contacts" :key="key">
                <td> {{ contact.id }} </td>
                <td> 
                    <router-link 
                    :to="{ name: 'contact-details', params: {id: contact.id }}">
                    {{ contact.first_name }}
                    </router-link> 
                </td>
                <td> {{ contact.last_name }} </td>
                <td> {{ contact.email }} </td>
                <td> {{ contact.number }} </td>
             </tr>
          </tbody>
      </table><br>
      <button class="btn btn-success">
          <router-link to="add-contact">Add contact</router-link>
      </button>
    </div>
</template>
<script>
export default {
  props: ["contacts"],
  methods: {}
};
</script>
