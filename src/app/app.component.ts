import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { pageData } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public gridData: any[];
  public listData: object = {};
  constructor(private _appService: AppService){}
  ngOnInit(){
    this.gridData = pageData.gridData;
    // this.getData();
    this.listData = pageData.listData;
  }

  getData(){
    this._appService.httpGet('agent').subscribe(
      data=>{
        console.log(data);
        this.gridData = data['gridData'];
        this.listData = data['listData'];
      }
    );
    setTimeout(()=>{
      this.getData();
    }, 500000);
  }  
}