<a href="https://kingajax.github.io/Spectre-Dark">
  <img src="https://kingajax.github.io/Spectre-Dark/img/spectre-logo.svg" width="72" height="72">
</a>

## Spectre.css

Spectre.css is a lightweight, responsive and modern CSS framework. For more information, check out the [upstream repo](https://github.com/picturepan2/spectre) and the [dark-mode upstream](https://github.com/kingajax/Spectre-Dark).

This fork modifies the colors to match the gruvbox style.

## Getting started

The **best** way to get this version of Spectre is to compile it. 

Although, if you only need `spectre.min.css`, you can directly use the one on my website (beware: no warranty about anything):

```
<link rel="stylesheet" href="https://www.syndamia.com/spectre.min.css">
```

## Compiling

### Requirements

- `node`, install instructions [here](https://nodejs.org/en/download/)
- `gulp`, you can install it as a global tool with `sudo npm install gulp -g`

**Warning:** currently there is an issue with new node versions, if `gulp build` gives you an error, follow these steps:

1. Install "n": `sudo npm install -g n`

2. Downgrade node to version 11 (11.15.0): `sudo n 11`

3. Rebuld sass for the new node version: `npm rebuild node-sass`

### How to build

1. Clone the repository

2. Navigate to the folder of the repository

3. Run `npm install`

4. Run `gulp build`

5. You're done, the compiled CSS files are in the `dist` folder

For more information, refer to [kingajax's documentation](https://kingajax.github.io/Spectre-Dark/getting-started/custom.html).

## Browser support

Spectre uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most styles compatible with earlier browsers and [Normalize.css](https://necolas.github.io/normalize.css/) for CSS resets. Spectre is designed for modern browsers. For best compatibility, these browsers are recommended:

- Chrome (LAST 4)
- Microsoft Edge (LAST 4)
- Firefox (EXTENDED SUPPORT RELEASE)
- Safari (LAST 4)
- Opera (LAST 4)
- Internet Explorer 10+

Spectre supports Internet Explorer 10+, but some HTML5 and CSS3 features are not perfectly supported by Internet Explorer.

Designed and built with ♥ by [Yan Zhu](https://twitter.com/picturepan2) and modified by [kingajax](https://github.com/kingajax/Spectre-Dark). Feel free to submit a pull request. Help is always appreciated.
