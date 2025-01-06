const Link = require('../models/linksModel');

// Obtener todos los enlaces
exports.getAllLinks = async(req, res) => {
    try {
        const links = await Link.find().populate('tags'); // Poblamos las etiquetas asociadas
        res.json(links);
    } catch (error) {
        console.error('Error al obtener los enlaces:', error);
        res.status(500).send('Error al obtener los enlaces');
    }
};

// Crear un nuevo enlace y asociar etiquetas
exports.createlink = async (req, res) => {
    const { title, url, description, tags } = req.body;
  
    if (!title || !url) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
  
    try {
      const newLink = new Link({
        title,
        url,
        description,
        tags
      });
      await newLink.save();
      res.status(201).json(newLink);
    } catch (error) {
      console.error('Error al crear el enlace:', error);
      res.status(500).send('Error al crear el enlace');
    }
  };
  


// Actualizar un enlace existente
exports.updatelink = async(req, res) => {
    const { id } = req.params;
    const { title, url, description, tags } = req.body;

    try {
        const updatedlink = await Link.findByIdAndUpdate(
            id, 
            { title, url, description, tags },
            { new: true } 
        );
        
        if (!updatedlink) {
            return res.status(404).json({ error: 'Enlace no encontrado' });
        }

        res.json(updatedlink);
    } catch (error) {
        console.error('Error al actualizar el enlace:', error);
        res.status(500).send('Error al actualizar el enlace');
    }
};

// Eliminar un enlace
exports.deletelink = async(req, res) => {
    const { id } = req.params;

    try {
        const deletedlink = await Link.findByIdAndDelete(id);

        if (!deletedlink) {
            return res.status(404).json({ error: 'Enlace no encontrado' });
        }

        res.json({ message: 'Enlace eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el enlace:', error);
        res.status(500).send('Error al eliminar el enlace');
    }
};

exports.votelink = async(req, res) => { 
    const { id } = req.params; 

    try {
        const link = await Link.findById(id);
        if (!link) {
            return res.status(404).json({ error: 'Enlace no encontrado' });
        }

        link.votes += 1;

        await link.save();

        res.status(200).json(link);
    } catch (error) {
        console.error('Error al votar:', error);
        res.status(500).send('Error al votar');
    }
}

exports.getLinksbyTag = async (req, res) => {
    const { tag } = req.params;
  
    try {
      const links = await Link.find({ tags: tag }); // Buscamos los enlaces que contengan el tag
      if (links.length === 0) {
        return res.status(404).json({ message: 'No se encontraron enlaces con este tag' });
      }
      res.status(200).json(links);
    } catch (error) {
      console.error('Error al obtener los enlaces:', error);
      res.status(500).send('Error al obtener los enlaces');
    }
  };
  