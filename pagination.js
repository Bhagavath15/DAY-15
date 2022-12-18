var btn_next = document.querySelector('.btn-next')
var btn_prevoius = document.querySelector('.btn-previous')

var datas =[{
    "id": "1",
    "name": "Lura Senger",
    "email": "Xander_Collier@yahoo.com"
  },
  {
    "id": "2",
    "name": "Wilburn Weber",
    "email": "Bennett_Kreiger11@yahoo.com"
  },
  {
    "id": "3",
    "name": "Tyrique Hahn",
    "email": "Juston.Altenwerth@yahoo.com"
  },
  {
    "id": "4",
    "name": "Lenny Bailey",
    "email": "Guiseppe_Hegmann@yahoo.com"
  },
  {
    "id": "5",
    "name": "Vladimir Keeling",
    "email": "Louisa_Walsh18@hotmail.com"
  },
  {
    "id": "6",
    "name": "Kellie Crona",
    "email": "Chandler_Abernathy@yahoo.com"
  },
  {
    "id": "7",
    "name": "Carolina White",
    "email": "Royal50@hotmail.com"
  },
  {
    "id": "8",
    "name": "Alfredo Conn",
    "email": "Clarabelle34@hotmail.com"
  },
  {
    "id": "9",
    "name": "Stan Shanahan",
    "email": "Lamar.McClure@hotmail.com"
  },
  {
    "id": "10",
    "name": "Marvin Fay",
    "email": "Osbaldo58@hotmail.com"
  },
  {
    "id": "11",
    "name": "Torrance Rau",
    "email": "Orin45@gmail.com"
  },
  {
    "id": "12",
    "name": "Harold Gutmann MD",
    "email": "Alyce.Stracke37@yahoo.com"
  },
  {
      "id": "13",
      "name": "Taryn Torphy",
      "email": "Dean_Breitenberg71@hotmail.com"
    }]


function child_clicked(e){

    var for_number = parseInt(e.getAttribute('for'))
    console.log(for_number)
    var obtained_data = datas[for_number]
    console.log('child clicked')
    var creating_div = document.createElement('div') 
    creating_div.innerHTML =`
  
        <p> for ="id"> ${obtained_data.id}</p>
        <p> for = "name"> ${obtained_data.name}</p>
        <p> for = "email> ${obtained_data.email}</p>`

}


btn_next.addEventListener('click',() => {
    console.log('clicked')
    
    for(var i=1;i<6;i++){

        var taking_for = document.querySelector(`.btn-${i}`)
        
        var attribute_val = parseInt(taking_for.getAttribute('for'))

        var inc_att_val = attribute_val + 5

        taking_for.setAttribute('for',inc_att_val)
        
        taking_for.innerText = inc_att_val
    }
})

btn_prevoius.addEventListener('click',() => {
    console.log('clicked')
    for(var i=1;i<6;i++){
        var taking_for = document.querySelector(`.btn-${i}`)
        
        var attribute_val = parseInt(taking_for.getAttribute('for'))
        
        if(attribute_val>5){
            var inc_att_val = attribute_val - 5

            taking_for.setAttribute('for',inc_att_val)

            taking_for.innerText = inc_att_val
        }
    }  
})

