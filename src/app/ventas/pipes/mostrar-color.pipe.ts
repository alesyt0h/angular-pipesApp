import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarColor'
})
export class MostrarColorPipe implements PipeTransform {

  transform(value: number): string {
    
    switch (value) {
      case 0:
        return 'rojo'
      case 1:
        return 'negro'
      case 2:
        return 'azul'
      case 3:
        return 'verde'
      default:
        return '0'
    }
  }

}
