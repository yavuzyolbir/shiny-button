
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

Using the Shiny Button component is straightforward. Here are some examples showing how to leverage its features:

  
#### Examples
### Basic Usage

```javascript
import Button from './[my-components-folder]/Button'

function App() {
  return <Button variant="gradient" theme="primary" >Get Started</Button>
}

// --> <button type="button" >Get Started</button>
```

### Usage with href Prop:

```javascript
import Button from './[my-components-folder]/Button'

function App() {
  return <Button href="#" >Get Started</Button>
}

// --> <a href="#">Get Started</button>
```

  
#### Download, Add to Your Project, and Use
[Download Shiny Button](https://github.com/yavuzyolbir/shiny-button/archive/refs/heads/main.zip)

  