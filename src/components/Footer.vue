<script setup lang='ts'>

</script>

<template>
  <footer :class='[$style.footer]'>
    <h4 :class='[$style.footerText]'>Footer</h4>
  </footer>
</template>

<style module>
.footer {
  background-color: var(--surface-d);
  width: 100%;
  height: 36px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}

.footerText {
  text-align: center;
  line-height: 36px;
}
</style>

