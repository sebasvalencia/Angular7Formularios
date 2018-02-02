import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
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
        //this.usuario.nombrecompleto.nombre -> precargar informacion
        'nombre': new FormControl(this.usuario.nombrecompleto.nombre, [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl(this.usuario.nombrecompleto.apellido, Validators.required)
      }),

      'correo': new FormControl(this.usuario.correo, [Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ])
    });

    this.forma.setValue(this.usuario);


  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    //this.forma.reset( this.usuario );
    this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });

    //Otra forma, no es la mejor
    //this.forma.controls['correo'].setValue('nuevocorreo@setvalue.com');



  }

  ngOnInit() {
  }

}
