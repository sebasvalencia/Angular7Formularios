import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: "Sebastian",
      apellido: 'Valencia'
    },
    correo: "sebastian@gmail.com"
  }


  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        //'nombre':new FormControl('Sebas'),
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', Validators.required)
      }),

      'correo': new FormControl('', [Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ])
    });


  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
  }

  ngOnInit() {
  }

}
