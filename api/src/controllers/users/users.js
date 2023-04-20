const { Users } = require('../../db')
const bcryptjs = require('bcryptjs')

const getUserByName = async (email) => {
  try {
    let user = await Users.findOne({ where: { email } })
    if (email) {
      return user
    } else {
      throw new Error(`User with name ${email} was not found`)
    }
  } catch (error) {
    throw new Error(`Error getting user by name: ${error.message}`)
  }
}

const getAllUsers = async () => {
  try {
    let users = await Users.findAll()
    if (users) {
      return users
    } else {
      throw new Error(`Users not founded`)
    }
  } catch (error) {
    throw new Error(`Error getting all users ${error.message}`)
  }
}
const getUserById = async (id_user) => {
  try {
    let user = await Users.findOne({ where: { id_user } })
    if (user) {
      return user
    } else {
      throw new Error(`User with id ${id} was not found`)
    }
  } catch (error) {
    throw new Error(`Error getting user by id: ${error.message}`)
  }
}
const updateUser = async (id_user, name, email, password, admin) => {
  try {
    let findUser = await getUserById(id_user)
    if (findUser) {
      if (name) {
        await Users.update({ name }, { where: { id_user } })
      }
      if (email) {
        await Users.update({ email }, { where: { id_user } })
      }
      if (password) {
        await Users.update({ password }, { where: { id_user } })
      }
      if (admin !== undefined) {
        await Users.update({ admin }, { where: { id_user } })
      }
      return true
    }
  } catch (error) {
    throw new Error(`Error trying to update ${error.message}`)
  }
}
const createUser = async (name, email, password) => {
  try {
    let hash = await bcryptjs.hash(password, 8)
    let newUser = await Users.create({
      name,
      email,
      password: hash,
    })
    return newUser
  } catch (error) {
    throw new Error(`Error trying to create user ${error.message}`)
  }
}
const deleteUser = async (id, active) => {
  try {
    let findUser = await getUserById(id)
    if (findUser) {
      if (active !== undefined) {
        await Users.update({ active }, { where: { id } })
      }
      return true
    }
    return true
  } catch (error) {
    throw new Error(`Error trying to delete user ${error.message}`)
  }
}

module.exports = {
  getUserByName,
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
}
