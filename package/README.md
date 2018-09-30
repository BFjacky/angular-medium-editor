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
  // 监听输入框点击事件和输入事件
  this.customEvents = [`editableClick`, `editableInput`];
}
handleCustomEvents($event) {
  // handleEvent
}
```
>more Custom Events see: https://github.com/yabwe/medium-editor/blob/master/CUSTOM-EVENTS.md
