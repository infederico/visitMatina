const validation = (newReview) => {
    
    let { description } = newReview;
    let errors = {};

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