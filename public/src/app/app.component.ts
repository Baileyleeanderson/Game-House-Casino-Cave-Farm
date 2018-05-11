import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  gamegold =[];
  totalgold = 0;
  constructor(private _httpService: HttpService){}
  ngOnInit(){

  }

  goldOnClick(event){
    var idAttr = event.srcElement.id;
    console.log("clicked",idAttr);
    let add_gold = this._httpService.createGold(idAttr);
    add_gold.subscribe(data =>{
      this.gamegold.push(data);
      console.log("working",data["gold"]);
      var num = +data["gold"];
      console.log(num)
      this.totalgold += num;
      console.log(this.totalgold);
    });
  }
}
