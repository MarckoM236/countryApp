import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activateRoute:ActivatedRoute,
    private router:Router,
    private countriesService:CountriesService
    ){}

  ngOnInit():void{
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchByAplphaCode(id)),
    )
    .subscribe(country =>{
        //console.log(id)
        if(!country){
          return this.router.navigateByUrl('');
        }
        console.log('Tenemos un pais');
        return;
      })
  }
}

