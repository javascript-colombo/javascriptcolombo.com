# Say Hola React

`say-hola-react` is a flexible React component and hook library that allows you to display greetings in different languages. The `SayHola` component is polymorphic, meaning it can render different container elements, and the `useSayHola` hook provides a simple way to manage greeting state in your React applications.

## Features

- **Polymorphic Component**: Render greetings with any HTML element.
- **Custom Hook**: Manage and update greetings with ease.
- **TypeScript Support**: Fully typed for TypeScript projects.
- **Lightweight**: Minimal dependencies for fast and efficient rendering.

## Installation

You can install `say-hola-react` using npm or yarn:

```sh
npm install say-hola-react
```

or

```sh
yarn add say-hola-react
```

## Usage

### `SayHola` Component

The `SayHola` component can be used to display a greeting in various container elements. By default, it renders a `<p>` element, but you can change this using the `as` prop.

#### Example

```jsx
import React from 'react';
import SayHola from 'say-hola-react';

const App = () => {
  return (
    <div>
      <SayHola as="h1" className="greeting-heading" />
      <SayHola as="div" className="greeting-container" />
    </div>
  );
};

export default App;
```

### `useSayHola` Hook

The `useSayHola` hook allows you to manage and update greetings. It can fetch a new greeting at a specified interval or just once if `staticMode` is set to `true`.

#### Example

```jsx
import React from 'react';
import useSayHola from 'say-hola-react';

const GreetingComponent = () => {
  const { greeting } = useSayHola(2000); // Update greeting every 2 seconds

  return <p>{greeting}</p>;
};

export default GreetingComponent;
```

## API

### `SayHola` Component Props

- `as`: An optional prop to specify the HTML element to render. Defaults to `'p'`.
- `className`: An optional prop to specify CSS class names.
- `ref`: A ref to the underlying element.

### `useSayHola` Hook

- `interval`: The interval (in milliseconds) at which to fetch a new greeting. Defaults to `1000`.
- `staticMode`: A boolean indicating whether to fetch a single greeting without interval updates. Defaults to `false`.

#### Returned Value

- `greeting`: The current greeting string.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
