<template>

<h1>Projects</h1>

<t-list
  title="project"
  title-right="start/end"
  :items="projectsToDisplay"
/>

<!-- přiřazování hodnot do props
  1) chceme přiřadit pevný text
    prop="známý text"
  2) chceme přiřadit proměnnou nebo výraz nebo jiný datový typ než text
    :prop="1" //number 1
    :prop="false" // false
    :prop="a + b === 1 ? 'yes' : 'no' // buď 'yes' nebo 'no'
    :prop="[1, 2, 'jablko']" // pole [1, 2, 'jablko']
  3) zvláštnost pro Boolean proměnné
    prop // true
    nic nenapíšeme // false
-->

<!-- <ul class="t-list">

  <li class="bg-secondary text-light text-bold">
    <div>project</div>
    <div>start/end</div>
  </li>

  <li v-for="project in projects" :key="project.id" class="clickable">
    <div>
      <div class="title">{{ project.project }}</div>
      <div class="description">{{ project.description }}</div>
    </div>
    <div class="dates">
      <div class="description">{{ project.start }}</div>
      <div class="description">{{ project.ends }}</div>
    </div>
  </li>

</ul> -->

</template>

<script>
import db from '../utils/db.js'
import TList from '../components/TList.vue'
import { formatDate } from '../utils/dateUtils.js'

export default {
  name: 'ProjectsPage',
  data () {
    return {
      projects: []
    }
  },
  computed: {
    projectsToDisplay () {
      return this.projects.map(project => {
        return {
          id: project.id,
          title: project.project,
          description: project.description || '',
          rightTop: formatDate(project.start),
          rightBottom: formatDate(project.ends)
        }
      })
    }
  },
  created() {
    db.get('projects').then(data => {
      // console.log(data)
      this.projects = data
    })
  },
  components: { TList }
}

</script>

<styles lang="stylus" scoped>
@import '../styles/variables.styl'

.t-list
  list-style-type: none
  margin: 0
  padding: 0
  border: 1px solid $border
  width: 80%
  margin: 0 auto

.t-list li
  text-align: left
  padding: .5rem 1rem
  display: flex
  justify-content: space-between
  &:not(:last-child)
    border-bottom: 1px solid $border-light

.title
  font-weight: bold
  font-size: $font-size-header

.description
  font-size: $font-size-description

.dates
  display: flex
  flex-direction: column
  justify-content: space-between

.clickable
  cursor: pointer
  &:hover
    background: $highlight

</styles>
