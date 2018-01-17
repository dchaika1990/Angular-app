import { Component } from '@angular/core';

interface User{
  name:string,
  email:string,
  editting:boolean
}

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})
export class FormEventsComponent {

  // text:string;
  // userName:string;
  // users:string[] = [];

  user:User = {
    name:'',
    email:'',
    editting: false
  };

  users:User[] = [
    {
      name:'Dima',
      email:'dchaika1990@gmail.com',
      editting: false
    },
    {
      name:'Denis',
      email:'denis@gmail.com',
      editting: false
    }
  ];

  constructor() { }

  // formEvent(e){
  //   console.log(e);
  //   this.text = e.target.value
  // }

  // onSubmit(form){
  //
  //   this.users.push(this.userName);
  //   console.log(this.users);
  //   // this.userName = '';
  //   form.resetForm();
  // }
  //
  // removeUser(i){
  //   console.log(i);
  //   this.users.splice(i, 1);
  // }

  onSubmit(form){
    console.log(this.user);
    this.users.push({
      name: this.user.name,
      email: this.user.email,
      editting: false
    });

    form.resetForm();
  }

  removeUser(i){
    this.users.splice(i, 1);
  }

  editUser(i, e){
    if( !this.users[i].editting ){
      this.users[i].editting = true;
      e.target.textContent = 'Save';
      console.log(this);
      console.log(this.users[i]);
    } else {
      this.users[i].editting = false;
      e.target.textContent = 'Edit';
      console.log(this);
      console.log(this.users[i]);
    }

  }


}
