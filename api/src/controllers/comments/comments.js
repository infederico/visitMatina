const { Comments , Op } = require('../../db');

// Trae todos los elementos 
const getAllComments = async () => {

    try {
        
        let allComments = await Comments.findAll({ where: { active: true, parent_id: 0 } });
        let allCommentThread = [];

        if(allComments.length){
           for(let comment of allComments){
               let children = await getCommentChildren(comment.id);
               allCommentThread.push({ ...comment.dataValues, respuestas: children });
           }
        }

        return allCommentThread;
        
    } catch (error) {
        return { error: error.message }
    }

}

const getCommentChildren = async (id) => {

    try {
        
        let allComments = await Comments.findAll({ where: { active: true, parent_id: id } });
        return allComments;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Trae todos los elementos Aprobados 
const getApprovedComments = async () => {

    try {
        
        let allApprovedComments = await Comments.findAll({
             where: { approved: true }
        });
        return allApprovedComments;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Obtener un comment por id
const getComment = async (id) => {

    try {
        let comment = await Comments.findByPk(Number(id));
        return comment;
        
    } catch (error) {
        return { error: error.message }
    }

}


// Borrado logico de un comment por id
const deleteComment = async (id) => {

    try {
        
        let comment = await Comments.findByPk({ id });

        if(comment){
            Comments.update(
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


// Añadir un Comment 
const addComment = async (comment) => {

    try {

        const { section, description, rating, name, phone, email } = comment; 

        console.log(comment);
        if( !section || !description || !name || !email ){
            throw new Error('Datos incompletos.');
        }

        let obj = {
            section,
            description,
            rating,
            name,
            phone,
            email,
        }

        if(comment.shop_id){ obj.shop_id = comment.shop_id }
        if(comment.post_id){ obj.post_id = comment.post_id }
        if(comment.parent_id){ obj.parent_id = comment.parent_id }

        let result = await Comments.create(obj);
        return { success: true, result }

    } catch (error) {
        return { error: error.message }
    }

}

// Aprovar el comment por id
const approveComment = async (id, value) => {

    try {
        
        let comment = await Comments.findByPk(id);

        if(comment){
            Comments.update(
                { approved: value },
                { where: { id }}
            )
            return true;
        }

        throw new Error('El elemento no existe.');
        
    } catch (error) {
        return { error: error.message }
    }

}


module.exports = { 
    getAllComments,
    getApprovedComments,
    getComment,
    deleteComment,
    addComment,
    approveComment,
}


