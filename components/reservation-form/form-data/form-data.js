let tableData = document.querySelector('#table')

if(tableData){

  let userData =
    JSON.parse(localStorage.getItem("users")) || []

  let tablelist = ''

  userData.forEach((e,index)=>{

    tablelist += `
      <tr>
        <td>${index+1}</td>
        <td>${e.userName}</td>
        <td>${e.userEmail}</td>
        <td>${e.userPhone}</td>
        <td>${e.userSeats}</td>
        <td>${e.userDate}</td>
        <td>${e.userTime}</td>
        <td><button>Delete</button></td>
      </tr>
    `

  })

  tableData.innerHTML = tablelist

}