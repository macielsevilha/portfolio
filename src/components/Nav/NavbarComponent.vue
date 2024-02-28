<template>
    <nav class="navbar">
      <div id="toggle" v-on:click="ToggleEvent" :class="{ 'active': isMenuVisible}"></div>
      <ul class="navbar-items" :class="{ 'active': isMenuVisible}">
        <li class="navbar-item">
            <a class="item-link" href="">Home</a>
        </li>
        <li class="navbar-item">
            <a class="item-link" href="">Home</a>
        </li>
        <li class="navbar-item">
            <a class="item-link" href="">Home</a>
        </li>
        <li class="navbar-item">
            <a class="item-link" href="">Home</a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
   
    data() {
      return {
        isMenuVisible: false
      }
    },
    methods: {
      ToggleEvent() {
       this.isMenuVisible = !this.isMenuVisible;
      }
    }
}
</script>

<style scoped>

   .navbar {
    grid-area: navbar;

   }
   .navbar .navbar-items {
    display: flex;
    gap: 20px;

    color: var(--color-white);
   }
   .navbar #toggle {
    display: none;
   }

   /* Estilos para telas menores que 600 pixels */
  @media screen and (max-width: 900px) {
    .navbar .navbar-items{
      display: block;
      position: absolute;
      width: 0px;

      background-color: red;
      overflow: hidden;
      transition: width 0.5s ease;
      top: 70px;
      left: 0;
    }
    .navbar .navbar-items.active {
      width: 300px;
    }
    .navbar #toggle {
      /* background-color: lightblue; */
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
    }
    .navbar #toggle::before {
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;

      background-color: var(--color-white);
      transform: translateY(-10px);
      box-shadow: 0px 10px 0px var(--color-white);
      transition: 0.5s;
      
    }
    .navbar #toggle::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 3px;

      background-color: var(--color-white);
      transform: translateY(10px);

      transition: 0.5s;
    }

    .navbar #toggle.active::before {
      transform: rotate(-45deg);
      box-shadow: 0px 0px 0px var(--color-white);
    }
    .navbar #toggle.active::after {
      transform: rotate(45deg);
    }
    
  } 

</style>