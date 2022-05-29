<template>

<h1>Persons</h1>

<t-list title="osoba" titleRight="kontakty" :items="personsToDisplay"/>

  <!-- <li class="bg-secondary text-light text-bold">
    <div>osoba</div>
    <div>kontakty</div>
  </li>
  <li v-for="person in persons" :key="person.id" class="clickable">
    <div>
      <div class="title">{{ person.first + ' ' + person.last }}</div>
      <div class="description">{{ person.skills ? person.position + ', ' + person.skills : person.position }}</div>
    </div>
    <div class="dates">
      <div class="description">{{ person.email }}</div>
      <div class="description">{{ person.phone }}</div>
    </div>
  </li>
</ul> -->

</template>

<script>

import db from '../utils/db.js'
import TList from '../components/TList.vue'

export default {
  name: 'PersonsPage',
  data () {
    return {
      persons: []
    }
  },
  computed: {
    personsToDisplay () {
      return this.persons.map((person) => {
        let description = person.position ? person.position : ''
        description += person.position && person.skills ? ', ' : ''
        description += person.skills ? person.skills : ''
        return {
          id: person.id,
          title: person.first + ' ' + person.last,
          description,
          rightTop: person.email,
          rightBottom: person.phone || ''
        }
      })
    }
  },
  created () {
    db.get('persons').then(data => {
      this.persons = data
    })
  },
  components: { TList }
}

</script>