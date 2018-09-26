# Sandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

This resource led to issuing the following commands
https://www.intertech.com/Blog/ngrx-tutorial-quickly-adding-ngrx-to-your-angular-6-project/

ng add @ngrx/store
ng add @ngrx/effects

npm install @ngrx/schematics --save-dev
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store --save
ng config cli.defaultCollection @ngrx/schematics
ng generate store State --root --statePath store/reducers --module app.module.ts

then i had to reset the import of 'environments'

ng generate effect store/App --group --root --spec false --module app.module

