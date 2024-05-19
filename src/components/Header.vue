<script setup lang='ts'>

</script>

<template>
  <header :class='[$style.header]'>
    <h2 :class='[$style.headerText]'>Rick & Morty task by Appdruha</h2>
  </header>
</template>

<style module>
.header {
  background-color: var(--surface-d);
  width: 100%;
  height: 56px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}

.headerText {
  text-align: center;
  line-height: 56px;
  font-weight: bold;
}
</style>

