import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = '';
  thereIsError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.thereIsError = false;
    this.term = term;

    this.countryService.searchCountry(term).subscribe(
      (countries) => {
        console.log(countries);
        this.countries = countries;
      },
      (err) => {
        this.thereIsError = true;
        this.countries = [];
      }
    );


  }

  suggestions( term: string) {
    this.thereIsError = false;
    //TODO agregar sugerencias
  }
}
