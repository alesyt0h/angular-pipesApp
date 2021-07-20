import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  arg: boolean = false;
  ordenarButton: string = '';
  cars: any[] = [
    {
      vin: 'pepe',
      year: 2021,
      brand: 'pepe',
      color: 'Black'
    }
  ]

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  // constructor(){console.log(this.heroes.sort());}

  changeSort(ordenarButton: string){
    this.ordenarButton = ordenarButton
  };

  toggler(){
    this.arg = !this.arg   //OMG awesome way of changing true to false
  };

    // if (this.arg === false){
    //   this.arg = true
    // } else {
    //   this.arg = false
    // }

    // (this.arg === false) ? this.arg = true : this.arg = false;

}
