import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    name1 = 'romeo';
    name2 = 'juliete';

    get score() {
        const letters = (this.name1 + this.name2 as string).toLowerCase();
        let sum = 0;

        for (let i = 0; i < letters.length; i++) {
            sum += letters.charCodeAt(i);
        }

        return sum % 101;
    }

    constructor(public navCtrl: NavController) {
    }
}

