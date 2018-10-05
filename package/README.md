# angular6-medium-editor
medium-editor for angular6


#Install the Component
install with npm :
```sh
$ npm install 'angular6-medium-editor'
```

import the component into your module
```ts
import { MediumEditorModule} from 'angular6-medium-editor'
@NgModule({
  // other code
  imports: [
    // other imports 
    MediumEditorModule
  ],
})
```


# Usage the element
```html
<medium-editor (subscribeCustomEvents)="handleCustomEvents($event)" [customEvents]="customEvents" [bodyStyle]="{'width':'500px'}"></medium-editor>
```
```ts
ngOnInit() {
  // listening click event & input event
  this.customEvents = [`editableClick`, `editableInput`];
}
handleCustomEvents($event) {
  // handleEvent
}
```
import style in your styles.css
```css
/* You can add global styles to this file, and also import other style files */
@import 'node_modules/medium-editor/dist/css/medium-editor.css';
//choose your medium-editor theme
@import 'node_modules/medium-editor/dist/css/themes/beagle.css';
```
>more Custom Events see: https://github.com/yabwe/medium-editor/blob/master/CUSTOM-EVENTS.md
