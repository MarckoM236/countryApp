import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-countryl-page',
  templateUrl: './by-countryl-page.component.html',
  styles: [
  ]
})
export class ByCountrylPageComponent {
  public countries:Country[]=[];
  constructor(private countriesService:CountriesService){}

  searchByCountry(data:string):void{
    this.countriesService.searchCountry(data)
    .subscribe(countries =>{
      this.countries = countries;
    });
  }
}
