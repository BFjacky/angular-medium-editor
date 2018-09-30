import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import * as MediumEditor from 'medium-editor';

@Component({
    selector: 'medium-editor',
    template: '<div class="ng6-medium-editor" [ngStyle]="bodyStyle">medium-editor</div>',
    styleUrls: []
})
export class MediumEditorComponent implements OnInit, OnDestroy, OnChanges {
    @Input() options: object;
    @Input() bodyStyle: object;
    @Input() customEvents: [string];
    @Output() subscribeCustomEvents = new EventEmitter();
    editor: any;
    listenerMap = {

    };
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        this.editor = new MediumEditor('.ng6-medium-editor', this.options);

    }
    ngOnChanges(changes) {
        if (changes.customEvents) {
            let { currentValue, previousValue } = changes.customEvents;
            currentValue = Array.from(new Set(currentValue));
            previousValue = previousValue || [];
            currentValue.forEach(event => {
                if (!previousValue.includes(event)) {
                    if (!this.listenerMap[event]) {
                        this.listenerMap[event] = () => {
                            this.subscribeCustomEvents.emit({ event });
                        };
                    }
                    this.editor.subscribe(event, this.listenerMap[event]);
                }
            });
            previousValue.forEach(event => {
                if (!currentValue.includes(event)) {
                    this.editor.unsubscribe(event, this.listenerMap[event]);
                }
            });
        }
    }
    ngOnDestroy() {
        this.editor.destroy();
    }
}
