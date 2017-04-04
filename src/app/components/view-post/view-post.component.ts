import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PostService } from '../../services/post/post.service';
import { Post } from '../../../post';

@Component({
	moduleId: module.id,
	selector: 'view-post',
	templateUrl: 'view-post.component.html'
})
export class ViewPostComponent implements OnInit{

	postId : Number;
	post: Post;
	private sub: any;
	constructor(private location: Location,
			  private route: ActivatedRoute,
			  private postService: PostService){
		this.post = { id: '', userId: '', title: '', body: ''};
		this.sub = this.route.params.subscribe(params => {
		this.postId = +params['id'];
		this.postService.getPost(this.postId)
			.subscribe(res => {
				this.post = res;
			})
		})
	}

	ngOnInit(){	
		
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}
}