import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
    `.p-card {
      box-shadow: none !important;
      cursor: pointer !important;
    }`
  ]
})
export class NoComunesComponent{

    // i18nSelect
    nombre: string = 'Alejandro';
    genero: string = 'masculino';

    invitacionMapa = {
      'masculino': 'invitarlo',
      'femenino': 'invitarla'
    }

    // i18nPlural

    clientes: string[] = ['Maria','Pedro','Juan','Hernando','Eduardo']

    clientesMapa = {
      '=0' : 'no tenemos ningún cliente esperando.',
      '=1' : 'tenemos un cliente esperando.',
      '=2' : 'tenemos 2 clientes esperando.',
      'other' : 'tenemos # clientes esperando.'
    }

    cambiarCliente() {
      if (this.nombre === 'Alejandro'){
        this.nombre = 'Susana'; this.genero = 'femenino';
      } else {
        this.nombre = 'Alejandro'; this.genero = 'masculino';
      }
    }

    borrarCliente() {
      this.clientes.pop()
    }

    
    //KeyValue Pipe
    persona = {
      nombre: 'Fernando',
      edad: 35,
      direccion: 'Ottawa, Canada'
    }

    // JsonPipe
    heroes = [
      {
        nombre: 'Superman',
        vuelta: true
      },
      {
        nombre: 'Robin',
        vuelta: false
      },
      {
        nombre: 'Aquaman',
        vuelta: false
      },
    ]

    //AsyncPipe

    miObservable = interval(1000); // Emite, 0,1,2,3,4,5...

    valorPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Datos de la promesa recibidos');
      }, 4500)
    })
    // constructor() {
    //   this.miObservable.subscribe(console.log)
    // }
}
