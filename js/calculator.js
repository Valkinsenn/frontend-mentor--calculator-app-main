// Calculator Class:
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clearMemory()
  }

  clearMemory() {
    this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
  }

  deleteNumber() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  multiplyNumber(operation) {
    if (this.currentOperand === "") return
    if (this.previousOperand !== "") {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  divideNumber(operation) {
    if (this.currentOperand === "") return
    if (this.previousOperand !== "") {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  addNumber(operation) {
    if (this.currentOperand === "") return
    if (this.previousOperand !== "") {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  subtractNumber(operation) {
    if (this.currentOperand === "") return
    if (this.previousOperand !== "") {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  compute() {
    let computation
    const previous = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(previous) || isNaN(current)) return
    switch (this.operation) {
      case "+":
        computation = previous + current
        break
      case "-":
        computation = previous - current
        break
      case "*":
        computation = previous * current
        break
      case "/":
        computation = previous / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ""
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split(".")[0])
    const decimalDigits = stringNumber.split(".")[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ""
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      })
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    )
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ""
    }
  }
}

// DOM Queries:
const calcDeleteKey = document.querySelector("[calc-delete]")
const calcDivideKey = document.querySelector("[calc-divide]")
const calcEqualsKey = document.querySelector("[calc-equals]")
const calcMinusKey = document.querySelector("[calc-minus]")
const calcMultiplyKey = document.querySelector("[calc-multiply]")
const calcNumberKeys = document.querySelectorAll("[calc-number]")
const calcPlusKey = document.querySelector("[calc-plus]")
const calcPreviousOperandTextElement = document.querySelector(
  "[calc-previous-operand]"
)
const calcCurrentOperandTextElement = document.querySelector(
  "[calc-current-operand]"
)
const calcResetKey = document.querySelector("[calc-reset]")

// Creates a new calculator:
const calculator = new Calculator(
  calcPreviousOperandTextElement,
  calcCurrentOperandTextElement
)

calcNumberKeys.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

calcResetKey.addEventListener("click", () => {
  calculator.clearMemory()
  calculator.updateDisplay()
})

calcDivideKey.addEventListener("click", () => {
  calculator.divideNumber(calcDivideKey.innerText)
  calculator.updateDisplay()
})

calcMinusKey.addEventListener("click", () => {
  calculator.subtractNumber(calcMinusKey.innerText)
  calculator.updateDisplay()
})

calcPlusKey.addEventListener("click", () => {
  calculator.addNumber(calcPlusKey.innerText)
  calculator.updateDisplay()
})

calcMultiplyKey.addEventListener("click", () => {
  calculator.multiplyNumber("*")
  calculator.updateDisplay()
})

calcEqualsKey.addEventListener("click", () => {
  calculator.compute()
  calculator.updateDisplay()
})

calcDeleteKey.addEventListener("click", () => {
  calculator.deleteNumber()
  calculator.updateDisplay()
})
