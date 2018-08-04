import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _appService: AppService){

  }
  ngOnInit(){

  }

  getData(){
    this._appService.httpGet('agent').subscribe(
      data=>{
        console.log(data);
      }
    )
  }

  
}
