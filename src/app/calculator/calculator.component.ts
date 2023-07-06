import {Component} from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
    firstNumber: number;
    secondNumber: number;
    operatorSymbol = '+';
    result: number;

    constructor() {
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.result = 0;
    }

    calculate() {
        switch (this.operatorSymbol) {
            case '+':
                this.result = this.firstNumber + this.secondNumber;
                break;
            case '-':
                this.result = this.firstNumber - this.secondNumber;
                break;
            case '*':
                this.result = this.firstNumber * this.secondNumber;
                break;
            case '/':
                this.result = this.firstNumber / this.secondNumber;
                break;
            default:
                break;
        }
    }
}

