import { Array_substring } from "./Array_substring";
import { WorkingDays } from "./WorkingDays";

//Zadanie 1

const buttonCheckWorkingDays = document.getElementById("checkWorkingDays") as HTMLButtonElement;
const buttonClearDates = document.getElementById("clearDays") as HTMLButtonElement;
const inputFirstDate = document.getElementById("firstDate") as HTMLInputElement;
const inputSecondDate = document.getElementById("secondDate") as HTMLInputElement;
const resultWorkingDays = document.getElementById("resultDate") as HTMLDivElement;

let newCalcWorkingDays: WorkingDays | null;

buttonCheckWorkingDays.addEventListener("click", () => {
    newCalcWorkingDays = new WorkingDays(inputFirstDate, inputSecondDate, resultWorkingDays);
    newCalcWorkingDays.setDates();
    newCalcWorkingDays.calcWorkingDays();
    newCalcWorkingDays.showWorkingDays();
})

buttonClearDates.addEventListener("click", () => {
    newCalcWorkingDays?.clearWorkingDays()
    newCalcWorkingDays = null;
})


//Zadanie 2

const buttonCheckArray = document.getElementById("checkArray") as HTMLButtonElement;
const buttonClearArray = document.getElementById("clearArray") as HTMLButtonElement;
const inputArray = document.getElementById("array") as HTMLInputElement;
const resultArray = document.getElementById("resultArray") as HTMLDivElement;

let newArray: Array_substring | null;

buttonClearArray.addEventListener("click", () => {
    newArray?.clearLongestIncreasingSubsequence();
    newArray = null;
})


buttonCheckArray.addEventListener("click", () => {
    newArray = new Array_substring(inputArray, resultArray);
    newArray.arrayValues = inputArray.value;
    console.log(resultArray);
    newArray.findLongestIncreasingSubsequence();
    newArray.showLongestIncreasingSubsequence();

})