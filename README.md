# Fuetify —— A Vue UI Framework

[![Build Status](https://travis-ci.com/crazyones110/Fuetify.svg?branch=master)](https://travis-ci.com/crazyones110/Fuetify)

Author：Fan

## Introduction

This is a UI framework made of me while learning Vue

## Get Started

1. 添加 CSS 样式

  Before using this framework, please set `border-box`
  ```css
  *, *::before, *::after {
    box-sizing: border-box;
  }
  ```
  Support IE8+

  你还需要设置默认颜色等变量（后续会改为Sass变量）
  ```css
  :root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    font-size: 14px;
  }
  ```

2. 安装 fuetify

`npm i -S fuetify`

3. 引入

```javascript
import {Button} from 'fuetify'
import 'fuetify/dist/index.css'

export default {
  name: 'app',
  components: {
    'f-button': Button
  }
}
```

4. 引入 svg symbols
```html
<script src="//at.alicdn.com/t/font_1597883_tyb7frq00i.js"></script>
```

## Documentation

## Questions

## Change Log

## Contact

## Contributor
