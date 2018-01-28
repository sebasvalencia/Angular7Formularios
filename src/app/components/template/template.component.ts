import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {


  usuario: Object = {
    nombre: "Sebastian",
    apellido: "Valencia",
    email: ""
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("NgForm: ", forma);
    console.log("Valor", forma.value);
  }

}
