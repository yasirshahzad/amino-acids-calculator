import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  List = [];
  result: number = 0.0;

  // tslint:disable-next-line: ban-types
  content: String = '';

  calculate(q) {

    this.List.push(q);
    this.calculateFormula();

  }

  remove() {
    this.List.pop();
    this.calculateFormula();
  }

  resulta: number = 0.0;
  myOptions = {
    'placement': 'center',
    'show-delay': 500
  }

  calculateFormula(){

    this.List.forEach(q => {
      this.resulta = this.resulta + Number.parseFloat(q.value);
    });

    let waterWeigth:number = 0.0;


    if(this.List.length >= 1){
      waterWeigth = (this.List.length - 1) * 16.0;
    } else {
      waterWeigth = 0.0;
    }

    this.result = this.resulta - waterWeigth ;

    this.resulta = 0.0;

  }

}
