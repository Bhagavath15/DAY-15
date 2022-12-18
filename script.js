var form_submit = document.querySelector('#form_submit')

form_submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    var firstName = document.querySelector('[placeholder="Firstname"]')
    var lastName = document.querySelector('[placeholder="Lastname"]')
    var address = document.querySelector('[placeholder="Address"]')
    var pincode = document.querySelector('[placeholder="Pincode"]')
    var gender = document.querySelector('[placeholder="Gender"]')
    var food = document.querySelector('[placeholder="Food"]')
    var state = document.querySelector('[placeholder="State"]') 
    var city = document.querySelector('[placeholder="City"]')   
    console.log('form submitted')
    console.log(firstName,lastName,address,pincode,gender,food,state,city)
    var datas = [firstName,lastName,address,pincode,gender,food,state,city]

    var creating_tr = document.createElement('tr')
    for(var i=0;i<datas.length;i++){
        var creating_td = document.createElement('td')
        creating_td.innerText = datas[i].value
        creating_tr.append(creating_td)
    }

    document.querySelector('tbody').append(creating_tr)
    for(let i of datas){
        i.value = ''
    }
})