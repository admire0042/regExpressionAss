const inputs = document.querySelectorAll('input');


const patterns = {
    firstName :/^[a-zA-Z]{2,}$/,
    lastName :/^[a-zA-Z]{2,}$/,
    telephone : /^[0][7-9][0-1][\d]{8}$/,
    password : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
    confirmPassword : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
    email : /^([a-z\d-_\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    dateOfBirth : /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./]([0]?[1-9]|[1][0-2])[./]([0-9]{4}|[0-9]{2})$/
}

function validate(field, regex){
    if(regex.test(field.value) ){
        field.className="valid"
    }else{
        field.className="invalid"
    }
}   

inputs.forEach(function(input){
    input.addEventListener('keyup', function(e){
        console.log(e.target.attributes.name.value);
       validate(e.target, patterns[e.target.attributes.name.value])
    })
})

