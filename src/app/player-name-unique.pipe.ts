import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'playerNameUnique'})
export class PlayerNameUniquePipe implements PipeTransform {
  transform(value:any): string {
    if (value){
      return value
    }
  }
}
