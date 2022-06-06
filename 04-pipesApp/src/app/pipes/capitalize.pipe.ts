import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  /**
   * It takes a string, makes it lowercase, then capitalizes the first letter, then returns the result
   * @param {string} value - The value of the string that is passed in.
   * @param {string[]} args - The arguments passed to the pipe.
   * @returns The first letter of the string is being capitalized and the rest of the string is being
   * lowercased.
   */
  transform(value: string, ...args: string[]): string {
    return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
  }

}
