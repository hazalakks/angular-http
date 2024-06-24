import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headerTransform',
  standalone: true
})
export class HeaderTransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
      switch (value) {
        case "firstName": return "Ad";
        case "lastName": return "Soyad";
        case "age": return "Yaş";
        case "gender": return "Cinsiyet";
        case "id": return "Id";
        default: return "";
      }
    }
  }


