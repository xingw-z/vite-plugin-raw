# vite-plugin-raw

vite-plugin-raw will transform any type file to string

# Install

```bash
npm install -D vite-plugin-raw
```

# Usage

```js
import vitePluginRaw from 'vite-plugin-raw';
const path = require('path');

module.exports = {
  plugins: [
    vitePluginRaw({
      match: /\.svg$/,
      exclude: [new RegExp(path.resolve(__dirname, './src/assets'))]
    })
  ]
}
```
