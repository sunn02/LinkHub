const Comment = require("../models/commentsModel")
const Link = require('../models/linksModel');

exports.createComment = async(req, res) => {
    const { linkId } = req.params;
    const { content } = req.body; 

    try {
        const link = await Link.findById(linkId);
        if (!link) {
            return res.status(404).json({ error: 'Enlace no encontrado' });
        }

        const comment = new Comment({ content, link: linkId });
        await comment.save();

        link.comments.push(comment._id);
        await link.save();

        res.status(201).json(comment);
    } catch (error) {
        console.error('Error al agregar el comentario:', error);
        res.status(500).send('Error al agregar el comentario');
    }
}
exports.getCommentsbyLink = async(req, res) => {
    const { linkId } = req.params;
    try {
        const link = await Link.findById(linkId).populate('comments');
        if (!link) {
            return res.status(404).json({ error: 'Enlace no encontrado' });
        }
        res.json(link.comments);
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
        res.status(500).send('Error al obtener los comentarios');
    }
}