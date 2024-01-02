export class Array_substring {
    private _values: number[]; //stores the values to method findLongestIncreasingSubsequence

    protected max_ref: number; //stores the LTS

    protected lisArr: number[][];

    private inputArray: HTMLInputElement;

    private resultArray: HTMLDivElement;

    constructor(inputArray: HTMLInputElement, resultArray: HTMLDivElement, inputArr: number[] = []) {

        this.inputArray = inputArray;
        this.resultArray = resultArray;

        this._values = inputArr;
        this.max_ref = 1;
        this.lisArr = [];
    }

    private isValidRange(array: number[], min: number, max: number): boolean {
        return !(array.every(value => value >= min && value <= max));
    }

    private isValidMaxLength(array: number[], maxLength: number): boolean {
        return !(array.length <= maxLength);
    }

    set arrayValues(value: string) {
        const numbersArray: number[] = value.split(" ").map(Number);

        if (numbersArray.some(isNaN)) {
            this.resultArray.innerText = "Podane wartości są nieprawidłowego formatu!";
            this.resultArray.classList.add("text-danger");
            throw new Error("Podane wartości są nieprawidłowego formatu!");

        }
        else if (this.isValidRange(numbersArray, 1, 1000000000) || (this.isValidMaxLength(numbersArray, 10000000))) {
            this.resultArray.innerText = "Podane wartości nie są z zakresu od 1 do 1000000000 lub podano więcej niż 10000000 wartości";
            this.resultArray.classList.add("text-danger");
            throw new Error("Podane wartości nie są z zakresu od 1 do 1000000000 lub podano więcej niż 10000000 wartości");
        } else {
            this._values = numbersArray;
        }


    }

    public findLongestIncreasingSubsequence(arr: number[] = this._values, n: number = this._values.length): [number, number[]] {
        if (n == 1)
            return [1, [arr[0]]];

        let res, max_ending_here = 1, lis_ending_here = [arr[n - 1]];

        for (let i = 1; i < n; i++) {
            res = this.findLongestIncreasingSubsequence(arr, i);
            if (arr[i - 1] < arr[n - 1] && res[0] + 1 > max_ending_here) {
                max_ending_here = res[0] + 1;
                lis_ending_here = res[1].concat([arr[n - 1]]);
            }
        }

        if (this.max_ref < max_ending_here) {
            this.max_ref = max_ending_here;
            if (this)
                this.lisArr.length = 0;
            this.lisArr.push(lis_ending_here);
        }
        else if (this.max_ref === max_ending_here && !this.lisArr.some(existingLis => {
            return JSON.stringify(existingLis) === JSON.stringify(lis_ending_here);
        })) {
            this.lisArr.push(lis_ending_here);

        }

        return [max_ending_here, lis_ending_here];
    }

    public showLongestIncreasingSubsequence(): void {
        let textSupport: string = this.lisArr.map(array => `<br>[${array.join(', ')}]`).join(', ');
        let textLenght1: string = `Maxymalny podciąg tablicy wynosi <b>${this.max_ref}</b> i prezentuje się tak: <b>${textSupport}</b>`;
        let textMoreLenght: string = `Maxymalny podciąg tablicy wynosi <b>${this.max_ref}</b>. Ilość takich wynosi: <b>${this.lisArr.length}</b>. Prezentuja się tak: <b>${textSupport}</b>`;
        this.resultArray.classList.remove("text-danger");
        this.resultArray.innerHTML = this.lisArr.length > 1 ? textMoreLenght : textLenght1;
    }

    public clearLongestIncreasingSubsequence(): void {
        this.inputArray.value = "";
        this.resultArray.innerText = ""
    }

}