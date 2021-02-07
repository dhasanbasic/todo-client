# Client-side solution to a to-do list assessment

This is a demonstration Angular application which resembles a simple to-do list.
The requirements are to display a list of to-dos, also being able to remove them, add new ones through an input field, and mark or unmark existing to-dos as done, which should appear striked through.

The solution has following features:
* All requirements are implemented in a single Angular component.
  * In a more realistic scenario, adding a to-do would require its own component, as it would have far more features (for example assigning a reminder date and time).
* For communication with the backend-counterpart of the assessment, an Angular service was created to follow the framework guidelines.
* Minimalistic (S)CSS is used for laying out the UI elements, but in reality one would not re-invent the whell, but rather use libraries like Bootstrapt, Angular Material etc.
* Updating the to-do list always first invokes the backend, but in reality one would collect operations and invoke them periodically, to save server-time and band-width.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
