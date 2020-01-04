<template>
  <button class='f-button'>你好</button>
</template>

<script>
export default {
}
</script>

<style lang='scss'>
.f-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em; /*左边一个字，右边一个字*/
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);

  &:hover{
    border-color: var(--border-color-hover);
  }
  &:active{
    border-color: var(--border-active-bg);
  }
  &:focus{
    outline: none;
  }
}
</style>