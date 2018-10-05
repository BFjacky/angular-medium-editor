var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
import * as MediumEditor from 'medium-editor';
var MediumEditorComponent = /** @class */ (function () {
    function MediumEditorComponent(elementRef) {
        this.elementRef = elementRef;
        this.subscribeCustomEvents = new EventEmitter();
        this.listenerMap = {};
    }
    MediumEditorComponent.prototype.ngOnInit = function () {
        this.editor = new MediumEditor('.ng6-medium-editor', this.options);
    };
    MediumEditorComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.customEvents) {
            var _a = changes.customEvents, currentValue_1 = _a.currentValue, previousValue_1 = _a.previousValue;
            currentValue_1 = Array.from(new Set(currentValue_1));
            previousValue_1 = previousValue_1 || [];
            currentValue_1.forEach(function (event) {
                if (!previousValue_1.includes(event)) {
                    if (!_this.listenerMap[event]) {
                        _this.listenerMap[event] = function () {
                            _this.subscribeCustomEvents.emit({ event: event });
                        };
                    }
                    _this.editor.subscribe(event, _this.listenerMap[event]);
                }
            });
            previousValue_1.forEach(function (event) {
                if (!currentValue_1.includes(event)) {
                    _this.editor.unsubscribe(event, _this.listenerMap[event]);
                }
            });
        }
    };
    MediumEditorComponent.prototype.ngOnDestroy = function () {
        this.editor.destroy();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MediumEditorComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MediumEditorComponent.prototype, "bodyStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], MediumEditorComponent.prototype, "customEvents", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MediumEditorComponent.prototype, "subscribeCustomEvents", void 0);
    MediumEditorComponent = __decorate([
        Component({
            selector: 'medium-editor',
            template: '<div class="ng6-medium-editor" [ngStyle]="bodyStyle">medium-editor</div>',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], MediumEditorComponent);
    return MediumEditorComponent;
}());
export { MediumEditorComponent };
