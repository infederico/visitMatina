const { Users } = require('../../db');
const bcryptjs = require('bcryptjs');

const getUserByEmail = async (email, password) => {
  // try {
  try {
    const hash = await Users.findOne({
      where: { email },
      attributes: ['password'],
    });
    if (hash) {
      let compare = await bcryptjs.compare(password, hash.dataValues.password);
      if (compare) {
        console.log('Contraseña válida');
        let user = await Users.findOne({ where: { email } });
        if (user) {
          return user;
        }
      } else {
        throw new Error('Contraseña inválida');
      }
    } else {
      throw new Error('Email no registrado');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    let users = await Users.findAll();
    if (users) {
      return users;
    } else {
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(`Error getting all users ${error.message}`);
  }
};
const getUserById = async (id_user) => {
  try {
    let user = await Users.findOne({ where: { id_user } });
    if (user) {
      return user;
    } else {
      throw new Error(`User with id ${id} was not found`);
    }
  } catch (error) {
    throw new Error(`Error getting user by id: ${error.message}`);
  }
};
const updateUser = async (id_user, name, email, password, admin, active) => {
  try {
    let findUser = await getUserById(id_user);
    if (findUser) {
      if (name) {
        await Users.update({ name }, { where: { id_user } });
      }
      if (email) {
        await Users.update({ email }, { where: { id_user } });
      }
      if (password) {
        await Users.update({ password }, { where: { id_user } });
      }
      if (admin !== undefined) {
        await Users.update({ admin }, { where: { id_user } });
      }
      if (active !== undefined) {
        await Users.update({ active }, { where: { id_user } });
      }
      return true;
    }
  } catch (error) {
    throw new Error(`Error trying to update ${error.message}`);
  }
};

const updateBodyUser = async (
  id_user,
  name,
  email,
  password,
  admin,
  active
) => {
  try {
    let findUser = await getUserById(id_user);
    // console.log(findUser.name);
    if (findUser) {
      if (name) {
        await Users.update({ name }, { where: { id_user } });
      }
      if (email) {
        await Users.update({ email }, { where: { id_user } });
      }
      if (password) {
        await Users.update({ password }, { where: { id_user } });
      }
      if (admin !== undefined) {
        await Users.update({ admin }, { where: { id_user } });
      }
      if (active !== undefined) {
        await Users.update({ active }, { where: { id_user } });
      }
      return `Èl usuario ${findUser.name} se modifico con exito`;
    }
  } catch (error) {
    throw new Error(`Error trying to update ${error.message}`);
  }
};

const createUser = async (name, email, password, picture) => {
  try {
    let userDefaultImage =
      'https://res.cloudinary.com/dfnw2l08x/image/upload/v1682190665/cowzi5bmlouxob2hllcu.jpg';
    if (password) {
      let hash = await bcryptjs.hash(password, 8);
      let newUser = await Users.create({
        name,
        email,
        password: hash,
        gUser: false,
      });

      return newUser;
    } else {
      let newUser = await Users.findOrCreate({
        where: { email },
        defaults: {
          name,
          email,
          image: picture ? picture : userDefaultImage,
          gUser: true,
        },
      });
      return newUser;
    }
  } catch (error) {
    throw new Error(`Error trying to create user ${error.message}`);
  }
};
const deleteUser = async (id, active) => {
  try {
    let findUser = await getUserById(id);
    if (findUser) {
      if (active !== undefined) {
        await Users.update({ active }, { where: { id } });
      }
      return true;
    }
    return true;
  } catch (error) {
    throw new Error(`Error trying to delete user ${error.message}`);
  }
};

module.exports = {
  getUserByEmail,
  getAllUsers,
  getUserById,
  updateUser,
  updateBodyUser,
  createUser,
  deleteUser,
};
