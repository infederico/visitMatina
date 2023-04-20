require('dotenv').config()
const { Sequelize, Op } = require('sequelize')
const fs = require('fs')
const path = require('path')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
)
const basename = path.basename(__filename)

const modelDefiners = []

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize))
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
])
sequelize.models = Object.fromEntries(capsEntries)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Users, Product, Media, Shop, Post, Reviews } = sequelize.models
// Aca vendrian las relaciones
Product.belongsToMany(
  Media,
  {
    through: 'product_media',
  },
  { timestamps: false }
)

Media.belongsToMany(
  Product,
  {
    through: 'product_media',
  },
  { timestamps: false }
)

Shop.belongsToMany(
  Product,
  {
    through: 'shop_product',
  },
  { timestamps: false }
)

Product.belongsToMany(
  Shop,
  {
    through: 'shop_product',
  },
  { timestamps: false }
)

Post.belongsTo(
  Users,
  {
    foreignKey: 'user_id',
  },
  { timestamps: false }
)

Reviews.belongsTo(
  Shop,
  {
    foreignKey: 'shop_id',
  },
  { timestamps: false }
)

Reviews.belongsTo(
  Post,
  {
    foreignKey: 'post_id',
  },
  { timestamps: false }
)

Reviews.belongsTo(Shop, {
  foreignKey: 'shop_id',
})

Reviews.belongsTo(Post, {
  foreignKey: 'post_id',
})

Reviews.belongsTo(Users, {
  foreignKey: 'user_id',
})

Users.hasMany(Reviews, {
  foreignKey: 'user_id',
})

Media.hasOne(
  Users,
  {
    foreignKey: 'media_id',
  },
  { timestamps: false }
)

Post.belongsTo(Users, {
  foreignKey: 'user_id',
})

Media.hasOne(Users, {
  foreignKey: 'media_id',
})

// Role.hasOne(Users, {
//   foreignKey: 'role_id',
// })
/*
Media.belongsTo(Shop,{
  foreignKey: 'shop_id'
});
*/

Media.hasMany(Shop, {
  foreignKey: 'media_id',
})

Media.hasMany(Post,{ 
  foreignKey: 'media_id',
})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  Op,
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}
