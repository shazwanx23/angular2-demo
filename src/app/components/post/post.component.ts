import { Component } from '@angular/core';

import { Post } from '../../../post';
import { PostService } from '../../services/post/post.service';



@Component({
	moduleId: module.id,
	selector: 'post',
	templateUrl: 'post.component.html',	
})
export class PostComponent{
	posts: Post[];

	constructor(private _postService: PostService){		
		this._postService.getPosts()
			.subscribe(res => {
			this.posts = res;
			if(this.posts.length > 20) {
				this.posts.splice(20,80);
			}
		});
	}

	deletePost(id:number){
		this.posts.splice(id,1);		
	}
	
}