# Shiny Button (React + TypeScript)

Shiny Button is a versatile React button component designed to add style and functionality to your modern web projects. Enhance your user experience with its flexibility and aesthetic design.

## Features

- **Multiple Color Options:** Adapts to your project with a variety of color choices.
- **Various Sizes:** Customize to fit your needs with different size options.
- **Different Themes:** Choose from various button types (primary, secondary, success, danger, etc.).
- **Dynamic Tagging:** Automatically transforms into an &lt;a&gt; tag if the href prop is provided.
- **Loading State:** Effortlessly integrate loading state functionality for asynchronous actions.
- **TypeScript and SASS Support:** Offers a more type-safe and easy-to-manage styling experience.
- **Light Animation:** Interactive light animation on hover for an engaging user experience. (Only gradient variant)

## Usage

[![Demo](https://www.yavuzyolbir.com/github/demo.svg)](https://shiny-button-omega.vercel.app/)

[![Download](https://www.yavuzyolbir.com/github/button.svg)](https://github.com/yavuzyolbir/shiny-button/archive/refs/heads/main.zip)

Add to Your Project, and Use 🤷🏻‍♂️

#### Examples

### Basic Usage

```javascript
import Button from "./[my-components-folder]/Button";

function App() {
  return (
    <Button variant="gradient" theme="primary">
      Get Started
    </Button>
  );
}

// --> <button type="button" >Get Started</button>
```

### Usage with href Prop:

```javascript
import Button from "./[my-components-folder]/Button";

function App() {
  return <Button href="#">Get Started</Button>;
}

// --> <a href="#">Get Started</button>
```

## Props

| Property   | Description                                    | Type                                            | Default |
| :--------- | :--------------------------------------------- | :---------------------------------------------- | :------ |
| `href`     | Redirect url of link button                    | `string`                                        | -       |
| `theme`    | Set button type                                | `primary` \| `warning` \| `danger` \| `success` | primary |
| `size`     | Set the size of button                         | `large` \| `medium` \| `small` \| `xsmall`      | medium  |
| `variant`  | Set button variant                             | `solid` \| `gradient` \| `outline`              | solid   |
| `block`    | Option to fit button width to its parent width | `boolean`                                       | false   |
| `disabled` | Disabled state of button                       | `boolean`                                       | false   |
| `loading`  | Set the loading status of button               | `boolean`                                       | false   |

##

Follow me on [X](https://x.com/yavuzyolbir)
