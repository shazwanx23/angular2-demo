"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ListComponent = (function () {
    function ListComponent() {
        this.persons = [
            { firstName: 'shazwan', lastname: 'shah', username: 'shazwanshah' },
            { firstName: 'shazwan1', lastname: 'shah1', username: 'shazwanshah1' },
            { firstName: 'shazwan2', lastname: 'shah2', username: 'shazwanshah2' },
        ];
    }
    ListComponent.prototype.onSubmit = function (first, last, user) {
        this.newPerson = {
            firstName: first.value,
            lastname: last.value,
            username: user.value
        };
        this.persons.push(this.newPerson);
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list',
            templateUrl: 'list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map