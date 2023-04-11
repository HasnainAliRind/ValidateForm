
let inputs = document.getElementsByTagName('input');






for (const tag of inputs) {
    
    tag.onfocus = () =>{
                tag.style.borderBottom = '1px solid blue';
                tag.setAttribute('class','CurrentInput');   
    }

    tag.onblur = () =>{
        tag.style.borderBottom = '1px solid grey';
        tag.classList.remove('CurrentInput');
    }
}




let submitButton = document.querySelector('.blue-btn');

function Validation() {
    let Err = document.querySelector('.error');



    let FirstName = document.getElementById('fname');
    let LastName = document.getElementById('lname');
    let Email = document.getElementById('email');
    let Password = document.getElementById('password');
    let Cpass = document.getElementById('cpassword');
    let Phone = document.getElementById('pnumber');

    let Fname = /^[a-zA-z ]{3,16}$/
    let Lname = /^[a-zA-Z]{2,8}$/
    let emi = /^[A-Za-z0-9_]{3,}@[a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,6}/

    let pass = /^(?=.*[0-9])(?=.*[!@#/$%\^&\*])[a-zA-Z0-9!@#/$%\^&\*]{8,16}$/

    let phoneNum = /^[0-9]{8,11}$/



        if(Fname.test(FirstName.value) == false){
            Err.classList.add('show');
            Err.querySelector('p').innerText = "Oops! Invalid FirstName."
            setTimeout(() => {
                Err.classList.remove('show');
            }, 2000);
            FirstName.focus();
            return false;
        }else{

        }
            


        if(Lname.test(LastName.value) == false){
            Err.classList.add('show');
            Err.querySelector('p').innerText = "Oops! Invalid LastName."
            setTimeout(() => {
                Err.classList.remove('show');
            }, 1500);
            LastName.focus();
            return false;
        }else{

        }
        
        
        if(emi.test(Email.value) == false){
            Err.classList.add('show');
            Err.querySelector('p').innerText = "Oops! Invalid Email."
            setTimeout(() => {
                Err.classList.remove('show');
            }, 1500);
            Email.focus();
            return false;
        }else{

        }

        // 12%HasnainR

        if(pass.test(Password.value) == false){
            Err.classList.add('show');
            Err.querySelector('p').innerText = "Oops! Invalid Password."
            setTimeout(() => {
                Err.classList.remove('show');
            }, 1500);
            Password.focus();
            return false;
        }else{

        }
    

        if(Password.value == Cpass.value){
            
        }else{
            Err.classList.add('show');
            Err.querySelector('p').innerText = "Please! Confirm Your Password.."
            setTimeout(() => {
                Err.classList.remove('show');
            }, 1500);
            Cpass.focus();
            return false;
        }


        if(phoneNum.test(Phone.value) == false){
            Err.classList.add('show');
            Err.querySelector('p').innerText = "Oops! Invalid Phone Number."
            setTimeout(() => {
                Err.classList.remove('show');
            }, 1500);
            Phone.focus();
            return false;
        }else{
           
        }




        return 
}
    









