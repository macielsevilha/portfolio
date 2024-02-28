<template>
    <div class="logoType">
        <a href=""><span class="icon">@</span>{{ name }}</a>
    </div>
</template>

<script>
export default {
    name: 'LogoType',
    props: {
        name: String
    }
}
</script>

<style scoped>
  .logoType {
    font: bold 24px/1.5 Arial, sans-serif;
    color: var(--color-white);
  }

  .logoType .icon {
    color: rgb(0, 207, 21);
    font-size: 30px;
    padding-right: 2px;
  }
</style>