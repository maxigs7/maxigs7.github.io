import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';

@Pipe({
  name: 'phoneNumberInternational',
})
export class PhoneNumberInternationalPipe implements PipeTransform {
  transform(phoneValue: number | string, country: string): any {
    try {
      const phoneNumber = parsePhoneNumber(phoneValue + '', country as CountryCode);
      return phoneNumber.formatInternational();
    } catch (error) {
      return phoneValue;
    }
  }
}
