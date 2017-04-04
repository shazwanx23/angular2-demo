import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface User {
	firstName: String;
	lastName: String;
	email: String;
}
@Component({
	moduleId: module.id,
	selector: 'crud',
	templateUrl: 'home.component.html'
})
export class HomeComponent{
	users: User[];
	user: User;
	isViewing: Boolean;
	isEditing: Boolean;
	isAdding: Boolean;	
	form: FormGroup;
	addUserForm: FormGroup;
	editUserIndex:number = -1;

	constructor(private fb: FormBuilder){
		this.users = [
			{ firstName: 'shazwan', lastName: 'shah', email: 'shazwan@email.com'},
			{ firstName: 'shazwan1', lastName: 'shah1', email: 'shazwan1@email.com'},
			{ firstName: 'shazwan2', lastName: 'shah2', email: 'shazwan2@email.com'}
		]
		this.isViewing = false;
		this.isEditing = false;
		this.isAdding = false;		
		this.addUserForm = this.fb.group({	      
	        firstName: ['', Validators.required],
	        lastName: ['', Validators.required],	      
	    	email: ['', Validators.required]
	    });
	}	

	onSubmit(form: any){		
		this.users.push(form);	
	}

	viewDetails(user: User){		
		this.user = user;
		this.toggleView('viewUser');
	}

	edit(user: User, index: number){
		this.toggleView('editUser');
		this.form = this.fb.group({	      
	        firstName: [user.firstName, Validators.required],
	        lastName: [user.lastName, Validators.required],	      
	    	email: [user.email, Validators.required]
	    });
	    this.editUserIndex = index;	    
	}

	delete(id: number){		
		this.users.splice(id, 1);
	}

	update(form: any){
		console.log(form);		
		this.users[this.editUserIndex] = form.value;
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