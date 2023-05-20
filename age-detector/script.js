const datePickerEl = document.getElementById("date-picker")

const dateBtnEl = document.getElementById("date-btn")

const ageEl = document.getElementById("age-old")

function dateBtn(){
    const birthDate = datePickerEl.value
    // console.log(thisYear)
    const today = new Date()
    const thisYear = today.getFullYear()

    const newBirthDate = new Date(birthDate)
    const birthYear = newBirthDate.getFullYear()
    // console.log(birthYear)

    const age = thisYear - birthYear
    // console.log(age)

    ageEl.textContent = `You are ${age > 1 ? `${age} years` : `${age} year`} old`

}


dateBtnEl.addEventListener("click", dateBtn)