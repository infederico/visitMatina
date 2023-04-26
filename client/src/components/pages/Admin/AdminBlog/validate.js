function validate(inputs) {
    let errors = {};
  
    if (!inputs.title) {
      errors.title = "* Campo obligatorio";
    }
    if (!inputs.summary) {
      errors.summary = "* Campo obligatorio";
    }
    if (!inputs.content) {
      errors.content = "* Campo obligatorio";
    }
    return errors;
  }

  export default validate;