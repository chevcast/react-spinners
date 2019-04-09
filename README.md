# @simply007org/react-spinners

[![Build Status](https://img.shields.io/travis/@Simply007/react-spinners.svg?maxAge=1000)](https://travis-ci.org/@Simply007/react-spinners)

[![npm](https://img.shields.io/npm/v/@simply007org/react-spinners.svg?maxAge=1000)](https://www.npmjs.com/package/@simply007org/react-spinners)
[![npm](https://img.shields.io/npm/dt/@simply007org/react-spinners.svg?maxAge=1000)](https://www.npmjs.com/package/@simply007org/react-spinners)
[![npm](https://img.shields.io/npm/l/@simply007org/react-spinners?maxAge=1000)](@simply007org/react-spinners)

A library for easily managing loading spinners in complex React applications.

:star: This library is basically a clone of [@chevtek/react-spinners](https://github.com/Chevtek/react-spinners) with [this pull request merged](https://github.com/Chevtek/react-spinners/pull/3).

## Install

> $ npm i @simply007org/react-spinners --save

If you're running npm v8 or higher then `--save` is implied if you don't include it.

## Quick Start

First import the `Spinner` component and use it anywhere in your app.

```jsx
// ./src/App.jsx

import * as React from 'react';
import { Spinner } from '@simply007org/react-spinners';

export default class YourComponent extends React.Component {
  ...
  render() {
    return (
      <div>
        ...
        <Spinner name="mySpinner">
          Loading...
        </Spinner>
      </div>
    );
  }
}
```

Now just import the `spinnerService` wherever you need it.

```javascript
// ./src/services/yourService.js

import { spinnerService } from '@simply007org/react-spinners';

function beginSomeOperation() {
  spinnerService.show('mySpinner');
  doSomething().then(() => {
    spinnerService.hide('mySpinner');
  });
}
```

`@Simply/react-spinners` contains a singleton instance of `SpinnerService` for your convenience and as you've seen above all you have to do is import and use it. Optionally, you can create your own instance of the `SpinnerService` and pass that to your `Spinner` components instead. This is useful in certain situations such as centralizing all your dependencies to be used for dependency injection.

```jsx
import { Spinner, SpinnerServie } from '@simply007org/react-spinners';

const yourCustomSpinnerService = new SpinnerService();

...

function SomeDumbComponent() {
  return (
    <Spinner name="yourSpinner" spinnerService={yourCustomSpinnerService}>
      Loading...
    </Spinner>
  );
}
```

In this way you can declare the spinner service in a centralized location and have greater control over where you store this singleton.

<!-- Here is a [working demo](https://embed.plnkr.co/jgHVBg7nwqThktFwcuHj/). -->

---

## Spinner Component

The spinner component gives you several options.

### name: string

The name attribute is required. It is what you must pass to the service when trying to show/hide that specific spinner.

```jsx
<spinner name="mySpinner"></spinner>
```

### group: string

Optionally a group name may be specified so that you can show/hide groups of spinners.

```jsx
<spinner name="mySpinner" group="foo"></spinner>
<spinner name="mySpinner2" group="foo"></spinner>
<spinner name="mySpinner3" group="bar"></spinner>
```

```javascript
this.spinnerService.showGroup('foo');
```

### show: boolean

By default all spinners are hidden when first registered. You can set a spinner to be visible by default by setting the `show` property to `true`.

```jsx
<spinner name="mySpinner" show={true}></spinner>
```

### loadingImage: string

Passing in a loading image is the simplest way to create a quick spinner.

```jsx
<spinner name="mySpinner" loadingImage="/path/to/loading.gif"></spinner>
```

If you want to disable the loading image entirely then simply do not specify the `loadingImage` property and an image won't be used. If you don't include the `loadingImage` option then be sure to specify some custom markup within the spinner component itself so it can be used instead.

### Content Projection

If you need more control over the kind of spinner you want to display, beyond just a simple animated image. You are able to supply any custom markup that you need by simply nesting it within the spinner component. Any content will be projeced into the spinner template below the `loadingImage` if one was specified.

```jsx
<spinner name="mySpinner">
  <h3>Loading...</h3>
</spinner>
```

Content projection is the most common way to use the `SpinnerComponent` as it allows you to pass in custom markup and use CSS animations instead of just an animated .gif image.

---

## Spinner Service

The most common way of interacting with your spinners is via the `spinnerService`. This service can be injected just like any other Angular service. Once you have reference to the service you can take advantage of several methods.

```javascript
import { spinnerService } from '@simply007org/react-spinners';
import * as axios from 'axios'; // replace with your preferred ajax request library


function  loadData() {
  spinnerService.show('mySpinner');
  axios.get('/some/url/for/data/')
    .then(res => {
      spinnerService.hide('mySpinner');
      // do stuff with res
    })
    .catch(err => {
      spinnerService.hide('mySpinner');
      // log error
    });
}
```

### show(spinnerName: string): void

The `show` method allows you to display a specific spinner by name.

```jsx
<spinner name="mySpinner" loadingImage="/path/to/loader.gif"></spinner>
```

```javascript
spinnerService.show('mySpinner');
```

### hide(spinnerName: string): void

Works exactly like `show` but hides the spinner element.

### showGroup(groupName: string): void

The `showGroup` method allows you to display all spinners with the same group name.

```jsx
<spinner name="spinner1" group="foo"></spinner>
<spinner name="spinner2" group="foo"></spinner>
<spinner name="spinner3" group="bar"></spinner>
```

```javascript
spinnerService.showGroup('foo');
```

Spinners 1 and 2 would show but spinner 3 would not since it is not part of group "foo".

### hideGroup(groupName: string): void

Works exactly the same as `showGroup` except it hides the spinners instead.

### showAll: void

Hopefully it's obvious that this method will show every single spinner registered with the service. This method is rarely used but is there for parity just in case.

### hideAll(): void

The `hideAll` method is identical to `showAll` except it hides every spinner that is registered. This method also isn't used very often but is extremely useful in global error handlers. We all know how much users ***HATE*** frozen spinners, right?

### isShowing(spinnerName: string): boolean

The `isShowing` method returns a boolean indicating whether or not the specified spinner is currently showing.
