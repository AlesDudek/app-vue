<template>
  <h1>{{title}}</h1>
  <form @submit="onSubmit">
    <div class="form-control">
      <label for="first">first name</label>

      <input id='first' type="text"
      autocomplete="off"
      v-model="person.first"

      >

    </div>

    <div class="form-control">
      <label for="last">last name</label>
      
      <input id='last' type="text"
      autocomplete="off"
      v-model="person.last"

      >

    </div>
    <div class="form-control">
      <label for="position">position</label>
      
      <input id='position' type="text"
      autocomplete="off"
      v-model="person.position"
      >

    </div>
    <div class="form-control">
      <label for="skills">skills</label>
      
      <input id='skills' type="text"
      autocomplete="off"
      v-model="person.skills"
      >

    </div>
    <div class="form-control">
      <label for="email">email</label>
      
      <input id='email' type="email"
      autocomplete="off"
      v-model="person.email"
      >

    </div>
    <div class="form-control">
      <label for="phone">phone</label>
      
      <input id='phone' type="tel"
      autocomplete="off"
      v-model="person.phone"
      >

    </div>
    <t-button label='submit'/>
  </form>
</template>

<script>
import db from '../utils/db.js'
import TButton from '../components/TButton.vue'

  export default {
    name: 'PersonFormPage',
    computed:{
      title(){
        if( this.$route.params.id ){
          return'edit person'
        }
        return'add person'
      }
    },
    created (){
      if(this.$route.params.id){
        db.get('persons/' + this.$route.params.id).then(record => {
          this.person = record
        })
      }
    },
    data(){
      return {
        person: {
          first: '',
          last:  '',
          position: '',
          skills: '',
          email: '',
          phone: '',
        }
      }
    },
    methods:{
      onSubmit(e){
        e.preventDefault()
        if (!this.$route.params.id) {
        return db.post('persons', this.person).then(() => {
          this.$router.push('/persons')
        })
      }
      return db.put('persons', this.person).then(() => {
        this.$router.push('/persons/' + this.$route.params.id)
      })
      }
    },
    components: { TButton }
  }

</script>

<style lang="stylus" scoped>

form
  width: 80%
  max-width: 500px
  margin: 0 auto

.form-control
  display: flex
  flex-direction: column
  text-align: left
  margin-bottom: 2rem

.form-control input
  font-size: 1.2rem
  padding: .35em .75em


</style>