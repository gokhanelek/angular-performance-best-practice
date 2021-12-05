# BestPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Performance practices
- Splitting by smallest component structure.

- Inject ChangeDetectorRef to your smart component constructor, and call the markForCheck() method to force your component and the children components under you to check for changes and update the UI accordingly.

- Using async pipe provided by Angular to automatically help you unsubscribe to observable if you do not need the data or manipulate the data elsewhere in the application in your Typescript code.

- NgFor directive helps us to iterate our array in Angular templates. However, each time the array is updated or changed, the whole DOM tree re-renders and this can be a potential performance haul. To let Angular know that you only need specific DOM to re-render instead of the whole DOM tree used by the ngFor, we can use trackBy to optimise our ngFor loop performance.
