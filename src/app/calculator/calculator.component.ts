import {Component} from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
    digits: string[] = ['7', '8', '9', '1', '2', '3', '4', '5', '6', '0'];
    expression = '';

    addToExpression(value: string) {
        this.expression += value;
    }

    clearExpression() {
        this.expression = '';
    }

    evaluateExpression() {
        try {
            this.expression = eval(this.expression);
        } catch (error) {
            this.expression = 'Fehler';
        }
    }
}

