import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDegree'
})
export class PipeDegreePipe implements PipeTransform {

  transform(value: number, args: string): string {
    const fahrenheit = Math.round((value * 9) / 5) + 32
    let result: string = `${value} °C ( ${fahrenheit} °F )`
    if(value >= 0){
      return (`+ ${result}`)
    }
    return (`- ${result}`);
  }

}
