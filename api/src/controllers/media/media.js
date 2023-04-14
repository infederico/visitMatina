const { Media, Op } = require('../../db');
const { uptloadCl } = require('../../helpers/CloudinaryUpload');

// Trae todos los elementos 
const getAllMedia = async () => {

    try {
        
        let allMedia = await Media.findAll({
             where: { active: true }
        });
        return allMedia;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Obtener un elemento por id
const getMedia = async (id) => {

    try {
        
        console.log(id);
        let media = await Media.findByPk(id);
        return media;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Borrado logico de un elemento por id
const deleteMedia = async (id) => {

    try {
        
        let media = await Media.findByPk(id);

        if(media){
            Media.update(
                { actve: false },
                { where: { id }}
            )
            return true;
        }

        throw new Error('El elemento no existe.');
        
    } catch (error) {
        return { error: error.message }
    }

}


// Borrado logico de un elemento por id
const addMedia = async (b64) => {

    try {
        const url = await uptloadCl(b64);
        console.log(url);
        let media = await Media.create({url});

        return { success: true, media}

    } catch (error) {
        return { error: error.message }
    }

}

module.exports = { 
    getAllMedia, 
    getMedia,
    deleteMedia,
    addMedia
 };