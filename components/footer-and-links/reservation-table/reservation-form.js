let formElement = document.querySelector('#form')

if(formElement){

  formElement.addEventListener('submit',(e)=>{

    e.preventDefault()

    let userName = document.querySelector('#name').value
    let userEmail = document.querySelector('#email').value
    let userPhone = document.querySelector('#phone').value
    let userSeats = document.querySelector('#seats').value
    let userDate = document.querySelector('#date').value
    let userTime = document.querySelector('#time').value

    let userObject = {
      userName,
      userEmail,
      userPhone,
      userSeats,
      userDate,
      userTime
    }

    let oldData =
      JSON.parse(localStorage.getItem("users")) || []

    oldData.push(userObject)

    localStorage.setItem(
      "users",
      JSON.stringify(oldData)
    )

    alert("Reservation Added")

    formElement.reset()

  })

}