# generator-ng-template 

> A custom Angular base project template

Since every time I want to start a new Angular project I spend a lot of time configuring the project I created this Yeoman generator.

The generated project has the following differences from the `angular-cli` one:

* `jest` instead of `karma`
* `eslint` and `prettier` instead of `ts-lint`
* `ngx-translate` is already installed, configured and with a working example in the `AppComponent`
* Angular Material is installed and a custom theme is configured

The generator will ask you input to use in the codebase like the author name and the selector for the Angular components.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ng-template using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ng-template
```

Then generate your new project:

```bash
yo ng-template
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Yiyi Chen](https://github.com/y-chen)


[npm-image]: https://badge.fury.io/js/generator-ng-template.svg
[npm-url]: https://npmjs.org/package/generator-ng-template
[travis-image]: https://travis-ci.com/y-chen/generator-ng-template.svg?branch=master
[travis-url]: https://travis-ci.com/y-chen/generator-ng-template
[daviddm-image]: https://david-dm.org/y-chen/generator-ng-template.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/y-chen/generator-ng-template
[coveralls-image]: https://coveralls.io/repos/y-chen/generator-ng-template/badge.svg
[coveralls-url]: https://coveralls.io/r/y-chen/generator-ng-template
