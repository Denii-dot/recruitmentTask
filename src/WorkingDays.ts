export class WorkingDays {
    private dateBeginning?: Date;

    private dateEnd?: Date;

    private numberOfWorkingDays: number;


    private inputFirstDate: HTMLInputElement;

    private inputSecondDate: HTMLInputElement;

    private resultWorkingDays: HTMLDivElement



    constructor(inputFirstDate: HTMLInputElement, inputSecondDate: HTMLInputElement, resultWorkingDays: HTMLDivElement) {

        this.numberOfWorkingDays = 0
        this.inputFirstDate = inputFirstDate;
        this.inputSecondDate = inputSecondDate;
        this.resultWorkingDays = resultWorkingDays;

    }

    public setDates() {
        let firstDate, secondDate;

        firstDate = new Date(this.inputFirstDate.value);
        secondDate = new Date(this.inputSecondDate.value);


        if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) {
            this.resultWorkingDays.innerText = "Podane wartości są nieprawidłowego formatu!";
            this.resultWorkingDays.classList.add("text-danger");
            throw new Error("Podane wartości są nieprawidłowego formatu!");
        }
        else if (firstDate > secondDate) {
            this.resultWorkingDays.innerText = "Pierwsza data powinna być wcześniejsza niż druga";
            this.resultWorkingDays.classList.add("text-danger");
            throw new Error("Pierwsza data powinna być wcześniejsza niż druga!")
        }
        this.dateBeginning = firstDate;
        this.dateEnd = secondDate;
    }

    public calcWorkingDays(): void {
        let count = 0
        if (this.dateBeginning && this.dateEnd) {
            const curDate = this.dateBeginning;
            while (curDate <= this.dateEnd) {
                const dayOfWeek = new Date(curDate).getDay();
                if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
                curDate.setDate(curDate.getDate() + 1);
            }
            this.numberOfWorkingDays = count;
        }
    }

    public clearWorkingDays(): void {
        this.inputFirstDate.value = "";
        this.inputSecondDate.value = "";
        this.resultWorkingDays.innerHTML = '';
    }

    public showWorkingDays(): void {
        this.resultWorkingDays.classList.remove("text-danger");
        this.resultWorkingDays.innerHTML = `Liczba dni pracy między podanymi datami wynosi:  <b>${this.numberOfWorkingDays}<b>`
    }

}
