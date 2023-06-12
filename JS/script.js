const validateForm = () =>{
    const form = document.getElementById('form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const textArea = document.getElementById('textArea');
    
    const firstNameValue = firstName.Value.trim();
    const lastNameValue = lastName.Value.trim();
    const emailValue = email.Value.trim();
    const textAreaValue = textArea.Value.trim();
    

   let noError =true;
   // Validation Nom de famille 
    if(firstNameValue === '') {
        setError(firstName, 'Le nom ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(firstName);
    }
   // Validation du Prénom 
    if(lastNameValue === '') {
        setError(lastName, 'Le prénom ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(lastName);
    }

    //Validation du email
    if(emailValue === ''){
        setError(email,'Email ne peut être vide');
        noError = false;
    }
    else if(!validateEmail(emailValue)){
        setError(email,'Entrez une adresse courriel valide');
        noError = false;
    }
    else{
        setSuccess(email);
    }
    //Validation du textarea

    if (textAreaValue === '') {
        setError(textArea, 'Le message ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(textArea);
    }

    
    return noError;
};

 
    const setError = (input, message) => {
        const formControl = input.input-control;
        const errorMessage = formControl.querySelector('.error-message');
        formControl.classList.add('error');
        errorMessage.innerText = message;
    };
    const setSuccess = (input) => {
        const formControl = input.input-control;
        formControl.classList.remove('error');
        const errorMessage = formControl.querySelector('.error-message');
        errorMessage.innerText = '';
    };
    
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };