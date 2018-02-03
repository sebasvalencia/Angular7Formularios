import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';




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
    //,
    //pasatiempos:['Correr','Dormir','Comer']
  }


  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        //'nombre':new FormControl('Sebas'),
        //this.usuario.nombrecompleto.nombre -> precargar informacion
        'nombre': new FormControl(this.usuario.nombrecompleto.nombre, [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl(this.usuario.nombrecompleto.apellido, [Validators.required, this.noHerrera])
      }),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'correo': new FormControl(this.usuario.correo, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")

      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    //this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma) //la funcion esta en otro contexto
    ]);


  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  //validacion - q cualquier persona tenga el apellido herrera
  noHerrera(control: FormControl): { [s: string]: boolean } {
    if (control.value === "herrera") {
      return {
        noherrera: true
      }
    }
    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    console.log(this);
    let forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      }
    }
    return null;
  }



  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    //this.forma.reset( this.usuario );

    /*this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });*/

    //Otra forma, no es la mejor
    //this.forma.controls['correo'].setValue('nuevocorreo@setvalue.com');



  }

  ngOnInit() {
  }

}
