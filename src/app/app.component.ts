import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'PRACTICANDO';

  msg:string = '';
  
  //Un Arreglo Array
  employees = [
    {'name': 'Alejadro', profession: 'Arquitecto', email: 'Alejandro@gmail.com'},
    {'name': 'Felipe', profession: 'Pintor', email: 'Felipe@hotmail.com'},
    {'name': 'Carlos', profession: 'Programador', email: 'Carlos@gmail.com'}

  ];
  model:any = {}
  model2:any = {}
  hideUpdate:boolean = true; 

  //Creando Los metodos
  AddEmployee():void{
    this.employees.push(this.model);
    this.msg = 'SE AGRRGO CORRECTAMENTE';
  }

  DeleteEmployee(i):void{
    var answer = confirm('Estas seguro de eliminarlo.?');
    if(answer){
      this.employees.splice(i, 1);
      this.msg = 'REGISTRO ELIMINADO CORRECTAMENTE';
    }
  

  }
  myValue;
  EditEmployee(i):void{
    this.model2.name= this.employees[i].name;
    this.model2.profession= this.employees[i].profession;
    this.model2.email= this.employees[i].email;
    this.myValue = i;
    this.msg ='SE EDICTO CORRECTAMENTE';
    this.hideUpdate = false;
  }

  UpdateEmployee():void{
   let i = this.myValue;
   for(let j = 0; j < this.employees.length; j++){
     if(i == j){
       this.employees[i] = this.model2;
       this.model2 = {};
       this.msg = 'REGISTRO ACTUALIZADO CORRECTAMENTE';
     }
   }
   
  }
  closeAlert():void{
    this.msg = '';
  }
  
}
