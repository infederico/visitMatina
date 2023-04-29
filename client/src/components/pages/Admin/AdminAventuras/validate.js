function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = '* Campo obligatorio';
  }
  if (!input.description) {
    errors.description = '* Campo obligatorio';
  }
  if (!input.price) {
    errors.price = '* Campo obligatorio';
  }
  return errors;
}

export default validate;
