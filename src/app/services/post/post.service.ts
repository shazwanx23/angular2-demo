import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
		constructor (private http: Http) {

	}
	getPosts(){
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
							.map(res => res.json());	
	}

	getPost(id: Number){
		return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
						.map(res => res.json());
	}

}