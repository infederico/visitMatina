function validate({ description, image }) {
    let errors = {};
  
    if (!description) {
      errors.description1 = "* Campo obligatorio";
    }
    if (description.length > 255) {
      errors.description2 = "* La descripción no puede superar los 255 caracteres";
    }
    if (!image) {
      errors.image1 = "* Campo obligatorio";
    }
    return errors;
  }

  export default validate;