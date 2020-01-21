<template>
  <div class="wrapper" :class="{'error': error}"> <!--这里还可以:class={error}-->
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  name: 'FInput',
  components: {Icon},
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
// --button-height: 32px;
// --font-size: 14px;
// --button-bg: white;
// --button-active-bg: #eee;
// --border-radius: 4px;
// --color: #333;
// --border-color: #999;
// --border-color-hover: #666;
// font-size: 14px;
$height: 32px
$border-color: #999
$border-color-hover: #666
$border-radius: 4px
$font-size: 12px
$box-shadow-color: rgba(0, 0, 0, 0.5)
$red: #f1453d
.wrapper
  font-size: $font-size
  display: inline-flex
  align-items: center
  > :not(:last-child)
    margin-right: .5rem
  input
    height: $height
    border: 1px solid $border-color
    border-radius: $border-radius
    padding: 0 8px
    &:hover
      border-color: $border-color-hover
    &:focus
      box-shadow: inset 0 1px 3px $box-shadow-color
      outline: none
    &[disabled], &[readonly]
      border-color: #bbb
      color: #bbb
      cursor: not-allowed
  &.error
    input
      border-color: $red
.icon-error
  fill: $red
.error-message
  color: $red
</style>