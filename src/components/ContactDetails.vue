<template>
    <div v-if="contact">
        <table border="1" align='center'>
          <thead>
              <th>id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>email</th>
              <th>number</th>
              <th></th>
              <th></th>
          </thead>
          <tbody>
              <tr>
                <td> {{ contact.id }} </td>
                <td> {{ contact.first_name }}</td>
                <td> {{ contact.last_name }}</td>
                <td> {{ contact.email }} </td>
                <td> {{ contact.number }} </td>
                <td><button class="btn btn-danger" @click="onDelete">Delete</button></td>
                <td>
                    <router-link :to="{name: 'add-contact', params: {id: contact.id}}">
                    <button class="btn btn-warning">Edit</button>
                    </router-link>
                </td>
              </tr>
          </tbody>
      </table><br>
    </div>
</template>

<script>
import { contacts } from "./../services/Contacts";

export default {
  props: ["contact"],
  methods: {
    onDelete() {
      contacts
        .delete(this.contact.id)
        .then(response => this.$emit("contactDeleted", this.contact))
        .catch(err => console.log(err));
    }
  }
};
</script>
