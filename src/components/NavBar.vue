<template>
  <nav>
    <div>
      SDA ToDo App
    </div>
      <ul>
        <li>
          <router-link to="/">home</router-link>
        </li>
        <li>
          <router-link to="/projects">projects</router-link>
        </li>
        <li>
          <router-link to="/persons">persons</router-link>

          
        </li>
      </ul>
    
  </nav>

</template>

<script>
export default{
  name: 'NavBar'
}
</script>


<style  scoped>
nav{
  background: yellow;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
}
nav > div{
  font-size: 1.4rem;
  font-weight: bold;
}
ul{
  display: flex;
  list-style-type: none;
}
li{
  padding-left: 1rem;
}
a{
  text-decoration: none;
  color: color #2c3e50;
  cursor: pointer;
  display: block;
  transition: transform .4s ease;
  position: relative;
}
a:hover{
  color: black;
  transform: scale(1.2);
  font-weight: bold;

}
/*  podtrhnutí buttonu   */
a::after{ 
  content: '';
  height: 2px;
  width: 100%;
  background: black;
  transform: scale(0);
  transition: transform .4s ease;
  position: absolute;
  top: 100%;
  left: 0;
  transform-origin: left;
}
a:hover::after{ 
  transform: scale(1);
}
</style>