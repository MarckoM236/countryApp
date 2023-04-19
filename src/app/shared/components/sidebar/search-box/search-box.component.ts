import { Component,Input,ViewChild,ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
@Input()
public placeholder:string='';

@Output()
public onValue:EventEmitter<string>=new EventEmitter();

search(value:string):void{
  this.onValue.emit(value);
}
}
