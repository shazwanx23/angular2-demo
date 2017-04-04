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
var post_service_1 = require('../../services/post/post.service');
var PostComponent = (function () {
    function PostComponent(_postService) {
        var _this = this;
        this._postService = _postService;
        this._postService.getPosts()
            .subscribe(function (res) {
            _this.posts = res;
            if (_this.posts.length > 20) {
                _this.posts.splice(20, 80);
            }
        });
    }
    PostComponent.prototype.deletePost = function (id) {
        this.posts.splice(id, 1);
    };
    PostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'post',
            templateUrl: 'post.component.html',
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map