const { Shop } = require('../../db.js');


//controller para borrado logico de una tienda

const deleteShop = async (req, res) => {
    const { id } = req.params;
    try {
      const shop = await Shop.findOne({ where: { id_shop:id} });
      if (!shop) {
        return res.status(404).json({ error: 'No se encontró la tienda' });
      }
      await shop.update({ active: false });
      res.status(200).json({ message: 'La tienda se desactivó correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al desactivar la tienda' });
    }
  };
  




//controller para mostrar todas las tiendas

const getAll = async (req, res) => {
  try {
    const shops = await Shop.findAll({ where: { active: true }});
    if (!shops || shops.length === 0) {
      return res.status(404).json({ error: 'No se encontraron tiendas' });
    }
    res.status(200).json(shops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener todas las tiendas' });
  }
};


//controller para mostrar un tienda por id

const getShopById = async (req, res) => {
  const { id } = req.params;
  try {
    const shop = await Shop.findOne({ where: { id_shop: id, active: true } });
    if (!shop) {
      return res.status(404).json({ error: 'No se encontró la tienda' });
    }
    res.status(200).json(shop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la tienda' });
  }
};


//controller para crear una tienda

const createShop = async (req, res) => {
  const { name, summary,path,email,twitter,facebook,instagram,youtube,whatsapp,location, active } = req.body;
  console.log(req.body)
  //if (!name ||!whatsapp || !summary || !path || !email || !twitter || !facebook || !instagram || !youtube || !location || !active ) {
  if (!name || !summary || !path ) {
    return res.status(400).json({ error: 'Faltan datos' });
  }
  try {
    const newShop = await Shop.create({
      name,
      summary,
      path,
      email,
      /*twitter,
      facebook,
      instagram,
      youtube,
      whatsapp,
      location,*/
      active,
    });
    res.status(200).json({ message: 'La tienda se ha creado con éxito', shop: newShop });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la tienda' });
  }
};


//controller para actualizar una tienda

const updateShop = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, summary, active,path, email, twitter, facebook, instagram, youtube, whatsapp, location } = req.body;
    const shop = await Shop.findOne({
      where: { id_shop: id },
    });
    if (!shop) {
      return res.status(404).json({ error: 'No se encontró la tienda' });
    }
    const fieldsToUpdate = {};
    if (name) fieldsToUpdate.name = name;
    if (summary) fieldsToUpdate.summary = summary;
    if (path) fieldsToUpdate.path = path;
    if (email) fieldsToUpdate.email = email;
    if (twitter) fieldsToUpdate.twitter = twitter;
    if (facebook) fieldsToUpdate.facebook = facebook;
    if (instagram) fieldsToUpdate.instagram = instagram;
    if (youtube) fieldsToUpdate.youtube = youtube;
    if (whatsapp) fieldsToUpdate.whatsapp = whatsapp;
    if (location) fieldsToUpdate.location = location;
    if (active !== undefined) fieldsToUpdate.active = active; // siempre debe venir un valor booleano
    await shop.update(fieldsToUpdate);
    res.status(200).json({ message: 'Todos los datos se actualizaron correctamente', shop: shop });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  deleteShop,
  getAll,
  getShopById,
  createShop,
  updateShop,
};
