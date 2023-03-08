import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formInput!: FormGroup

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formInput= this.fb.group(
      {
        "email":["",[Validators.required,Validators.email]],
         "password":["",Validators.required]
      }
    )
    //console.log("test ngOnInit")
  }
  onSubmit()
  {
    //console.log(this.formInput)
    ///console.log(this.formInput.pristine)
    console.log(this.formInput.controls['email'].errors?.['required']
    )
  }
}
