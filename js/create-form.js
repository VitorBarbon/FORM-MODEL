(function(){
  const buttonCreateForm = document.querySelector('.btn-create');

  const formProps = {
    style: {
      background: '',
      color: '',
      borderVerification: false,
      iconVerification: false,
    },
    fields: {
      name: { field: false, required: false}, 
      username: { field: false, required: false},
      email: { field: false, required: false},
      password: { field: false, required: false},
      passwordConfirm: { field: false, required: false},
      message: { field: false, required: false},
      phoneNumber: { field: false, required: false},
      message: { field: false, required: false},
      address: { field: false, required: false},
    }
}


  buttonCreateForm.addEventListener('click', (e) => {
    const newForm = new NewForm(formProps);
    // newForm.createFormCustom();
  });
})();

class NewForm {
  constructor(props) {
    this.form = props;
    console.log(this.form)
  }
}