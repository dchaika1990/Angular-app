import { Component } from "@angular/core"
// import { User } from '../User'


@Component({
  selector: 'sandbox',
  template: `
    <!--<h1>{{ name }} is {{ age }} years old!</h1>-->
    <!--<h2>my name is {{ person.firstName }} {{person.lastName}}</h2>-->
    <!--<ul>-->
      <!--<li>{{ 'Hello' }}</li>-->
      <!--<li>{{ 1 + 1 }}</li>-->
      <!--<li>{{'My age is ' + showAge() }}</li>-->
    <!--</ul>-->
    
    <h1>Hello</h1>
    <!--<ul>-->
      <!--<li *ngFor="let user of users">{{ user }}</li>-->
    <!--</ul>-->
    <!--<ul>-->
      <!--<li *ngFor="let user of users; let i = index">{{ i + 1 }} {{ user }}</li>-->
    <!--</ul>-->
    <ul>
      <li *ngFor="let user of users; let i = index">{{ i + 1 }} {{ user.name }} is {{ user.age }} years old</li>
    </ul>
  `
})

export class SandboxComponent{
  // users = ['Denis', 'Ivan','Olga'];
  users = [
    {
      name: 'Dima',
      age: 27
    },
    {
      name: 'Denis',
      age: 28
    }
  ];
  // name:string = 'Denis';
  // age:number = 28;
  // hasChildren:boolean = false;
  // city:any = 'Kiev';
  // numberArray:number[] = [1, 2, 3];
  // stringArray:string[] = ['one','two'];
  // anyArray:any[] = [1, 'two'];
  // myTuple:[string, number] = ['one', 1, 2];
  // unusable:void = undefined; // undefined, null
  // person:object = {
  //   firstName: "Denis",
  //   lastName: 'Mescheryakov'
  // };
  // user:User;
  // users:User[];
  // users:{
  //   id:number,
  //   name:string,
  //   email:string
  // };

  // constructor(){
  //   this.user = {
  //     id: 2,
  //     name: 'denis',
  //     email: 'test'
  //   };
  //
  //   this.users = [
  //     {
  //       id: 3,
  //       name: 'denis',
  //       email: 'test'
  //     },
  //     {
  //       id: 4,
  //       name: 'denis',
  //       email: 'test'
  //     }
  //   ]
    // console.log('Component run...', this.showAge())
    // this.age:number = 28
  // }

  // showAge():number{
  //   return this.age;
  // }
}


