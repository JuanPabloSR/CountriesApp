import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  activedRegion(region: string) {
    if (region === this.regionActive) {
      return;
    }

    this.regionActive = region;
    this.countries = [];
    this.countryService
      .searchRegion(region)
      .subscribe((countries) => (this.countries = countries));
  }

  getCssClass(region: string) {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
