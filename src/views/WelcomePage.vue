<template>
  <div> 
    <h1>Welcome</h1>

    <div class="square">1</div>
    <div class="square">2</div>
    <div class="square">3</div>
    <div class="square">4</div>
    <div class="square">5</div>
    <div class="square">6</div>
    <div class="square">7</div>
    <div class="square">8</div>
    <div class="square">9</div>
  </div>
</template>

#4556D6
#8D5EA5
#B2Cb25
<script>

export default{ 
  name: 'WelcomePage'
}

</script>

<style scoped>
div{ 
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
  
}
  h1{
    border-top: 2px solid #8D5EA5;
    border-bottom: 2px solid #8D5EA5;
    padding: 2rem;
    color: #B2Cb25;
    z-index: 10;
  }

/* .container{ 
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  } */
.square{ 
  position: absolute;
  bottom: -100%;
  background: #4556D6; 
  border: 2px solid #fff; 
  border-radius: 20px;
  animation: boxes 8s infinite ease-in;
}
/*  ten se mi neukazuje??   */
.square:nth-child(1){
  width: 45px;
  height: 45px;
  background: rgb(255, 0, 179);
  left: 7%;
  animation-delay: 1s;
}

.square:nth-child(2){
  width: 75px;
  height: 75px;
  left: 20%;
  animation-delay: 8s; /* spomalení startu   */
}

.square:nth-child(3){
  width: 55px;
  height: 55px;
  left: 37%;
  animation-delay: 3s;
}

.square:nth-child(4){
  width: 65px;
  height: 65px;
  left: 57%;
  /* background: red; */
  animation-delay: 2s;
}

.square:nth-child(5){
  width: 55px;
  height: 55px;
  left: 77%;
  animation-delay: 1s;
}

.square:nth-child(6){
  width: 45px;
  height: 45px;
  left: 7%;
  animation-delay: 5s;
}

.square:nth-child(7){
  width: 75px;
  height: 75px;
  left: 87%;
  animation-delay: 7s;
}

.square:nth-child(8){
  width: 35px;
  height: 35px;
  left: 67%;
  /* background: yellow; */
  animation-delay: 6s; 
}

.square:nth-child(9){
  width: 15px;
  height: 15px;
  left: 17%;
  
  animation-delay: 7s;
}

.square:nth-child(10){
  width: 35px;
  height: 35px;
  left: 47%;
  animation-delay: 4s;
}



@keyframes boxes{ 
  0%{
    bottom: -100%
  }
  100%{
    bottom: 100%;
    transform: rotate(180deg);
    opacity: 0;
  }
}
</style>