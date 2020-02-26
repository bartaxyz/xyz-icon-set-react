# XYZ Icon Set for React

Official React components package for icons from [XYZ Icon Set](https://github.com/bartaxyz/xyz-icon-set).

## Usage

### Installation with NPM

```bash
npm install xyz-icon-set-react
```

### Importing icon from a package

> Note: Examples are shown with ES6 syntax

You can import icons selectively by its name with suffix "Icon" (to prevent variable name collisions and misuse of keywords in cases such as `return` or `copy` icons).

```typescript
import { PaperPlaneIcon } from 'xyz-icon-set-react';
```

## Icon Component Reference

```jsx
const App = () => (
    <PaperPlaneIcon />
)
```

## Themes

Importing `PaperPlaneIcon` will import regular version of the icon. To import thin variant of the icon, import `PaperPlaneThinIcon` instead.

### Properties

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
