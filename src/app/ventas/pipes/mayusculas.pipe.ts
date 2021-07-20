import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    // transform(value: string, arg: boolean = true):string {  // Asignandole un valor de inicio ya queda resuelto como parametroopcional
    transform(value: string, arg?: boolean):string {
        // if (arg === false) {
        //     return value.toLowerCase();
        // } else {
        //     return value.toUpperCase();
        // }
        return (arg === false ? value.toLowerCase() : value.toUpperCase());
        // return (arg === false) ? value.toLowerCase() : value.toUpperCase(); // Funciona de las dos maneras
    }
}