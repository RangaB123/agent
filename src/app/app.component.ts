import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { pageData, sampleData } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public gridData: any[];
  constructor(private _appService: AppService){}
  ngOnInit(){
    this.gridData = pageData.gridData;
    this.getData();
  }

  getData(){
    this._appService.httpGet('agent').subscribe(
      data=>{
        console.log(data);
        this.gridData = data['gridData'];
      }
    );
    setTimeout(()=>{
      this.getData();
    }, 500000);
  }

  
}
