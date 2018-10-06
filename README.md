# XYZ Icon Set for React

Official React components package for icons from [XYZ Icon Set](https://github.com/bartaxyz/xyz-icon-set).

### 

## Usage

### Installation with NPM

```bash
npm install xyz-icon-set-react
```

### Importing icon from a package

> Note: Examples are shown with ES6 syntax

You can import icons selectively by its name with suffix "Icon" (to prevent variable name collisions and misuse of keywords in cases such as `return` or `copy` icons).

```typescript
import XYZIconSet from 'xyz-icon-set';

const { PaperPlaneIcon } = XYZIconSet;
```



## Icon Component Reference

```jsx
const App = () => (
    <PaperPlaneIcon />
)
```



### Properties

#### `theme`

Either `regular` or `thin`. For icon visual reference, visit [XYZ Icon Set Website](https://ondrejbarta.xyz/xyz-icon-set).

**Default value: `regular`**

```jsx
<React.Fragment>
    <PaperPlaneIcon /> {/* theme defaults to "regular" */}
    <PaperPlaneIcon theme="regular" />
    <PaperPlaneIcon theme="thin" />
</React.Fragment>
```



#### `fillOpacity`

Opacity of the transparent fill inside of the icon. Accepts values between `0` and `1`. It is not recommended to use higher values than `0.5` as it could break the legibility and recognizability of the icon.

**Default value: `0`**

```jsx
<React.Fragment>
    <PaperPlaneIcon /> {/* fillOpacity defaults to 0 */}
    <PaperPlaneIcon fillOpacity={0.25} />
    <PaperPlaneIcon fillOpacity={0.5} />
</React.Fragment>
```