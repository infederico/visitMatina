const validation = (newReview) => {
    let { name, email, rating, description } = newReview;
    let errors = {};
    

    // NAME
    if (!name) {
        errors.name1 = 'Este campo es obligatorio';
    } // DB requirement - allowNull: false

    const regexName = /^[a-zA-Z\s]*$/;
    if (!regexName.test(name)) {
        errors.name2 = 'El nombre sólo puede contener letras';
    } // developer decision - STRINGs can support any UTF-16 characters
    
    if (name.length > 50) {
        errors.name3 = 'El nombre puede tener 50 caracteres como máximo'
    } // developer decision - max length 50 chars - type: DataTpes.STRING, by default 255 characters supported


    // EMAIL
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email) {
        if (!regexEmail.test(email)) {
            errors.email1 = 'Email inválido';
        } // developer decision - STRINGs can support any UTF-16 characters
        if (email.length > 255) {
            errors.email2 = 'El email puede tener 255 caracteres como máximo'
        } // DB requirement - type: DataTpes.STRING, by default 255 characters supported
    }
   
    // RATING
    if (!rating) {
        errors.rating1 = 'Este campo es obligatorio';
    } // DB requirement - allowNull: false  


    // DESCRIPTION
    if (!description) {
        errors.description1 = 'Este campo es obligatorio';
    } // DB requirement - allowNull: false, type: DataTypes.TEXT - unlimited characters
    if (description.length > 150) {
        errors.description2 = 'La reseña puede tener 150 caracteres como máximo'
    } // developer decision - max length 50 chars -  - type: DataTpes.STRING, by default 255 characters supported


    return errors;
};

export default validation;