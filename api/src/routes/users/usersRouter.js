const express = require('express');
const router = express.Router();

const {
  getUserByEmail,
  getAllUsers,
  getUserById,
  updateUser,
  updateBodyUser,
  createUser,
  deleteUser,
} = require('../../controllers/users/users');

router.get('/', async (req, res) => {
  try {
    let { email, password } = req.query;
    if (email) {
      let userByName = await getUserByEmail(email, password);
      res.status(200).send(userByName);
    } else {
      let gellAllUsers = await getAllUsers();
      res.status(200).send(gellAllUsers);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    let { id } = req.params;
    let userById = await getUserById(id);
    res.status(200).send(userById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// update all data body

router.put('/', async (req, res) => {
  try {
    let { id_user, name, email, password, admin, active } = req.body;
    const putRes = await updateBodyUser(
      id_user,
      name,
      email,
      password,
      admin,
      active
    );
    res.status(200).send(putRes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    let { name, email, password, picture } = req.body;
    let newUser = await createUser(name, email, password, picture);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let { id } = req.params;
    let { active } = req.body;
    await deleteUser(id, active);
    res.status(200).send('User Deleted Successfully');
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
