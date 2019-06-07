# hmr-indicator
Visible indication of hot app reload

## Install
`npm i -D hmr-indicator`

Or

`yarn add -D hmr-indicator`

## Use
```javascript
if (module.hot) {
    module.hot.accept()
    if (process.env.NODE_ENV === 'development') {
        require('hmrIndicator').default()
    }
}

```
## Customize
```javascript
require('hmrIndicator').default({
    favicon: false,
    center: { text: 'HMR!' },
})
```
### Options & defaults
```javascript
let centerDefaults = {
    text: '\u27F3',
    style: 'color: #11FF11; font-size: 200px; position: absolute; top: 50%; left: 50%; margin-top: -100px; margin-left: -100px',
}

let faviconDefaults = {
    text: '\u27F3',
    color: '#11FF11',
    font: 'bold 32px serif',
}
```
