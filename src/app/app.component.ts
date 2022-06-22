import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Preethi';
  givenMillis;
  outputMg: number;
  outputG:number;
  calculate() {
    console.log("given ml", this.givenMillis)
    if(!isNaN(this.givenMillis)){
      this.outputMg = this.givenMillis * 5
      this.outputG = this.outputMg /1000
    }else{
      alert("Enter Valid number in given ml")
    }

    console.log("given mg", this.outputMg)
  }
  clear(){
    this.givenMillis = '';
    this.outputMg = 0
  }
}
