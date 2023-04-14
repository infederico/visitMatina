const express = require('express')
const router = express.Router()

const {
  getUserByName,
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
} = require('../../controllers/users/users')

router.get('/', async (req, res) => {
  try {
    let { name } = req.query
    if (name) {
      let userByName = await getUserByName(name)
      res.status(200).send(userByName)
    } else {
      let gellAllUsers = await getAllUsers()
      res.status(200).send(gellAllUsers)
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let userById = await getUserById(id)
    res.status(200).send(userById)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

router.put('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let { name, email, password, active } = req.body
    await updateUser(id, name, email, password, active)
    res.status(200).send('User updated successfully')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})
router.post('/', async (req, res) => {
  try {
    let { name, email, password } = req.body
    let newUser = await createUser(name, email, password)
    res.status(200).send(newUser)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let { id } = req.params
    let { active } = req.body
    await deleteUser(id, active)
    res.status(200).send('User Deleted Successfully')
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

module.exports = router
