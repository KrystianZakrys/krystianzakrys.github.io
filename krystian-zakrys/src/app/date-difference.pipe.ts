import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDifference'
})
export class DateDifferencePipe implements PipeTransform {

  transform(start: Date, end: Date): string {
    if (!start || !end) {
      return '';  // Return empty string if either start or end date is missing
    }

    const startYear = start.getFullYear();
    const startMonth = start.getMonth();
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();

    // Calculate the difference in years and months
    let years = endYear - startYear;
    let months = endMonth - startMonth;

    // Adjust if months are negative
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return `${years} years ${months} months`;
  }
}
