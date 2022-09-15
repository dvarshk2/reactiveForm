import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reactiveForm';

  signUpForm! : FormGroup;
  genders : string[] = ['female', 'male', 'Transgender'];

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm(){
    this.signUpForm = new FormGroup({
      "userDetails" : new FormGroup({
        'username' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender' : new FormControl('female', Validators.required),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirmPass' : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'skills' : new FormArray([])
    })
  }
  onSubmit(){
    console.log(this.signUpForm);
    console.log(this.signUpForm.value);
    
  }
  onAddSkill(){
    let skillControl = new FormControl(null);
    console.log(this.skillsArray.length);
    if(this.skillsArray.length < 5){
    this.skillsArray.push(skillControl);
    }
  }
  onDeleteSkill(i : number){
    console.log(i);
    this.skillsArray.removeAt(i);
  }
  get userNameControl(){
    return this.signUpForm.get('userDetails.username') as FormControl;
  }
  get emailControl(){
    return this.signUpForm.get('userDetails.email') as FormControl;
  }
  get genderControl(){
    return this.signUpForm.get('gender') as FormControl
  }
  get passwordControl(){
    return this.signUpForm.get('password') as FormControl
  }
  get confirmPassControl(){
    return this.signUpForm.get('confirmPass') as FormControl
  }
  get skillsArray(){
    return this.signUpForm.get('skills') as FormArray;
  }
  get f(){
    return this.signUpForm.controls;
  }
    
}
