class CheckForm {
  constructor() {
    this.form = document.querySelector('#form');
    this.username = document.getElementById('username');
    this.email = document.getElementById('email');
    this.password = document.getElementById('password');
    this.passwordConfirm = document.getElementById('password-confirm');
    this.whatchForm();
  }

  whatchForm() {
    this.form.addEventListener( 'submit',(e) => {
      e.preventDefault();
      
      const isValid = this.validForm();
      
      if(isValid) {
        return console.log('Success: Seu formulário foi enviado');
      }
      return console.log("Error: Erro de validação");      
    });
  }

  validForm() {
    let valid = true; 

    const formControl = document.querySelectorAll('.form-control');
    
    for(let itemForm of formControl) {
      const smallTag = itemForm.querySelector('small');
      itemForm.classList.remove('error', 'success');
      smallTag?.remove();
    }

    if(this.username.value === '') {
      valid = false;
      this.username.parentElement.classList.add('error');
      this.createError(this.username, 'Este campo é obrigatório');
    }

    if(this.email.value === '') {
      valid = false;
      this.email.parentElement.classList.add('error');
      this.createError(this.email, 'Este campo é obrigatório');  
    }
    
    if(this.password.value === '') {
      valid = false;
      this.password.parentElement.classList.add('error');
      this.createError(this.password, 'Este campo é obrigatório');    
    }

    if(this.passwordConfirm.value !== this.password.value || !this.passwordConfirm.value) {
      valid = false;
      this.passwordConfirm.parentElement.classList.add('error');
      
      if(this.passwordConfirm.value === '') {
        this.createError(this.passwordConfirm, 'É necessário digitar uma senha');    
      } else {
        this.createError(this.passwordConfirm, 'As senhas devem ser iguais');    
      }
    }

    for(let formItem of formControl) {
      if(formItem.classList.contains('error')) continue;

      formItem.classList.add('success');
    }

    return valid;
  }


  createError(field, msgError) {
    const smallError = document.createElement('small');
    smallError.innerText = msgError;
    field.insertAdjacentElement('afterend', smallError);
  }
}

const checkForm = new CheckForm();