import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {
  term: string = '';
  thereIsError: boolean = false;
  countries: Country[] = [];

  search(term: string) {
    this.thereIsError = false;
    this.term = term;

    this.countryService.searchCapital(term).subscribe(
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

  constructor(private countryService: CountryService) { }


}
