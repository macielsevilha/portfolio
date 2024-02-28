<template>
    <div class="header">
        <logo-type-component name="devmacielsevilha" />
        <navbar-component/>
    </div>
</template>

<script>
import NavbarComponent from '../Nav/NavbarComponent.vue'
import LogoTypeComponent from '../UI/LogoTypeComponent.vue';

export default {
    name: 'Header',
    components: { NavbarComponent, LogoTypeComponent },
    
}
</script>

<style scoped>

   .header {
    grid-area: header;
    background-color: var(--color-primary);

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0px 20px;
   
   }

</style>