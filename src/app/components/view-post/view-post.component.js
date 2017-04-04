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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var post_service_1 = require('../../services/post/post.service');
var ViewPostComponent = (function () {
    function ViewPostComponent(location, route, postService) {
        var _this = this;
        this.location = location;
        this.route = route;
        this.postService = postService;
        this.post = { id: '', userId: '', title: '', body: '' };
        this.sub = this.route.params.subscribe(function (params) {
            _this.postId = +params['id'];
            _this.postService.getPost(_this.postId)
                .subscribe(function (res) {
                _this.post = res;
            });
        });
    }
    ViewPostComponent.prototype.ngOnInit = function () {
    };
    ViewPostComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewPostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'view-post',
            templateUrl: 'view-post.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, post_service_1.PostService])
    ], ViewPostComponent);
    return ViewPostComponent;
}());
exports.ViewPostComponent = ViewPostComponent;
//# sourceMappingURL=view-post.component.js.map