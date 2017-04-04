import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	moduleId: module.id,
	selector: 'view',
	templateUrl: 'view.component.html'
})
export class ViewComponent{
	  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: fb.group({
        first: ['Nancy', Validators.minLength(2)],
        last: 'Drew',
      }),
      email: 'default@email.com',
    });
  }
}