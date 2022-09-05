const inputName = document.querySelector('#exampleInputName')
const inputSurname = document.querySelector('#exampleInputSurname')
const inputEmail = document.querySelector('#exampleInputEmail')
const inputPassword1 = document.querySelector('#exampleInputPassword1')
const inputPassword2 = document.querySelector('#exampleInputPassword2')
const submit = document.querySelector('.btn')
const form = document.querySelector('form')

const UserArray = []
let i = -1


class User{
    constructor(name,surname,email){
        this.name = name;
        this.surname = surname;
        this.email = email
    }
}


submit.addEventListener('click',e => {
    e.preventDefault()
    if(inputName.value === '' || inputSurname.value === '' || inputEmail.value === '' || inputPassword1.value === '' || inputPassword2.value === '' ){
        return alert('Please fill all fields')
    }
    if(inputPassword1.value != inputPassword2.value){
        return alert('Your Password is wrong')
    }
    UserArray.push(new User(inputName.value,inputSurname.value,inputEmail.value))
    i++
    addRow()
    form.reset() 
})


function addRow() {
     const table = document.getElementById("table");
     const button = document.createElement('button')
     button.innerHTML = "Delete User"; 
     const row= document.createElement("tr");
     const td1 = document.createElement("td");
     const td2 = document.createElement("td");
     const td3 = document.createElement("td");    
     td1.innerHTML = UserArray[i].name
     td2.innerHTML  = UserArray[i].surname
     td3.innerHTML  = UserArray[i].email
     row.appendChild(td1);
     row.appendChild(td2);
     row.appendChild(td3);
     row.appendChild(button)
     table.children[0].appendChild(row);

     button.addEventListener('click',e =>{
        e.target.parentNode.remove()
     })
 };
