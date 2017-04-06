import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../../models/user/user.interface';

@Component({
	moduleId: module.id,
	selector: 'crud-http',
	templateUrl: 'crud-http.component.html'
})
export class CrudHttpComponent{
	users: User[];
	user: User;
	isViewing: Boolean;
	isEditing: Boolean;
	isAdding: Boolean;	
	form: FormGroup;
	addUserForm: FormGroup;
	editUserIndex:number = -1;

	constructor(
		private fb: FormBuilder,
		private http: Http){
			this.http.get('https://jsonplaceholder.typicode.com/users')
				.map(res => res.json())
				.subscribe(users => {				
					this.users = users;				
				})
			this.isViewing = false;
			this.isEditing = false;
			this.isAdding = false;		
			this.addUserForm = this.fb.group({	      
		        username: ['', Validators.required],
		        email: ['', Validators.required],	      
		    	phone: ['', Validators.required]
		    });
	}	

	onSubmit(form: any){				
		this.http.post('https://jsonplaceholder.typicode.com/users', form)
			.map(res => res.json())
			.subscribe(user => {
				console.log(user);
				this.users.push(form);	
			}, (err) => {
				console.log(err);
				console.log('User creation failed!');
			})
		
	}

	viewDetails(user: User){		
		this.user = user;
		this.toggleView('viewUser');
	}

	edit(user: User, index: number){
		this.toggleView('editUser');
		this.form = this.fb.group({
			id : [user.id],	      
	        username: [user.username, Validators.required],
	    	email: [user.email, Validators.required],
	        phone: [user.phone, Validators.required]	      
	    });
	    this.editUserIndex = index;		        
	}

	delete(id: number){		
		this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
			.map(res => res.json())
			.subscribe((user) => {
				console.log(user);
				this.users.splice(id, 1);
			}, (err) => {
				console.log(err);
				console.log('Unable to delete user');
			})
	}

	update(form: any){						
		this.http.patch(`https://jsonplaceholder.typicode.com/users/${form.value.id}`, form.value)
			.map(res => res.json())
			.subscribe(user => {
				console.log(user);
				this.users[this.editUserIndex] = form.value;
			}, (error) => {
				console.log(error);
				console.log('unable to update user');
			});
	}

	resetState(){
		this.isViewing = false;
		this.isEditing = false;
		this.isAdding = false;
	}

	toggleView(view: String){
		this.resetState();
		if(view === 'viewUser'){ this.isViewing = true; }
		if(view === 'editUser'){ this.isEditing = true; }		
		if(view === 'addUser'){ this.isAdding = true; }		
	}
}