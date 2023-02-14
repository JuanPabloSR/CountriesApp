import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  thereIsError: boolean = false;
  countries: Country[] = [];

  countriesSuggestion: Country[] = [];
  showSuggestions: boolean = true;

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.thereIsError = false;
    this.term = term;
    this.showSuggestions = false;

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

  suggestions(term: string) {
    this.thereIsError = false;
    this.term = term;


    this.countryService.searchCountry(term).subscribe(
      (countries) => (this.countriesSuggestion = countries.splice(0, 5)),
      (err) => (this.countriesSuggestion = [])
    );
  }

  searchSuggestion(term: string) {
    this.search(term);

  }
}
