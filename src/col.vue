<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const validator = val => {
  const keys = Object.keys(val);
  return keys.every(key => ["span", "offset"].includes(key));
};
export default {
  name: "FCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: [Number, String],
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    wide: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  methods: {
    createColClasses(deviceObj, deviceName = "") {
      const colClasses = [];
      if (!deviceObj) {
        return colClasses;
      }
      if (deviceObj.span) {
        colClasses.push(`col-${deviceName}${deviceObj.span}`);
      }
      if (deviceObj.offset) {
        colClasses.push(`offset-${deviceName}${deviceObj.offset}`);
      }
      return colClasses;
    }
  },
  computed: {
    colClasses() {
      const { span, offset, ipad, narrowPc, pc, wide } = this;
      const createColClasses = this.createColClasses;
      return [
        ...createColClasses({ span, offset }),
        ...createColClasses(ipad, "ipad-"),
        ...createColClasses(narrowPc, "narrow-pc-"),
        ...createColClasses(pc, "pc-"),
        ...createColClasses(wide, "wide-")
      ];
    },
    colStyle() {
      // gutter 变了，所以我要变了
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    // 770
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>