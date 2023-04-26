function validate(inputs) {
    let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let errors = {};
  
    if (!inputs.name) {
      errors.name = "* Campo obligatorio";
    }
    if (!inputs.summary) {
      errors.summary = "* Campo obligatorio";
    }
    if (!inputs.path) {
      errors.path = "* Campo obligatorio";
    }
    if (!regexMail.test(inputs.email)) {
      errors.email = "* Campo obligatorio"
    }
    if (!inputs.location) {
      errors.location = "* Campo obligatorio";
    }
    return errors;
  }

  export default validate;