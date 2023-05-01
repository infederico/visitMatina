const { Shop,sequelize,Reviews,Users,Comments,Post,Product} = require('./src/db.js');


  const seeder = async () => {
    /* try {
      // Comprobar si la bandera de seeder ya está establecida
      const seeded = await sequelize.getQueryInterface().showIndex({ tableName: 'shops', schema: 'public', indexName: 'shops_seeded_flag' });
  
      // Si la bandera está presente, salir de la función
      if (seeded && seeded.length > 0) {
        console.log('Los datos de la tienda ya se han cargado anteriormente');
        return;
      }
  
      // Cargar los datos de la tienda
      await Shop.bulkCreate(tiendas);
  
      // Establecer la bandera de seeder
      await sequelize.getQueryInterface().addIndex('shops', {
        fields: ['seeded'],
        name: 'shops_seeded_flag'
      });
  
      console.log('Datos de la tienda cargados correctamente');
    } catch (error) {
      console.log(error);  
    } */
   
    //////////////////////////////////////////////////////////
        /* try {
          await Shop.bulkCreate(tiendas);
          console.log('Tiendas creadas exitosamente');
        } catch (error) {
          console.error('Error al crear las tiendas:', error);
        } */
//////////////////////////////////////////////////////////

 const fs = require('fs');
 const tables = [
  { fileName: './src/archivosJson/users.json', model: Users },
  { fileName: './src/archivosJson/shopsD.json', model: Shop },
   /* { fileName: './src/archivosJson/reviews.json', model: Reviews }, */
   { fileName: './src/archivosJson/comments.json', model: Comments},
   { fileName: './src/archivosJson/mock_posts.json', model: Post}  
  
];


for (let table of tables) {
  try {
    const data = fs.readFileSync(table.fileName, 'utf-8');
    const jsonData = JSON.parse(data);
    await table.model.bulkCreate(jsonData);
    console.log(`Datos cargados exitosamente en la tabla ${table.model.name} ✅`);
  } catch (error) {
    console.error(`Error al cargar datos en la tabla ${table.model.name}: ${error}`);
  }
}
 
  /* try {
    const data = fs.readFileSync('./src/archivosJson/reviews.json', 'utf-8');
    const usuarios = JSON.parse(data);
    await Reviews.bulkCreate(usuarios);
    console.log('Carga de datos exitosa');
  } catch (error) {
    console.error(error);
  } 
*/


      
  };

  const seederReviews = async () => {
    const fs = require('fs');
    try {
      const data = fs.readFileSync('./src/archivosJson/reviews.json', 'utf-8');
      const usuarios = JSON.parse(data);
      await Reviews.bulkCreate(usuarios);
      console.log('Datos cargados exitosamente en la tabla reviews ✅'); //emoji  
    } catch (error) {
      console.error(error);
    }
  };
  const seederProducts = async () => {
    const fs = require('fs');
    try {
      const data = fs.readFileSync('./src/archivosJson/products.json', 'utf-8');
      const usuarios = JSON.parse(data);
      await Product.bulkCreate(usuarios);
      console.log('Datos cargados exitosamente en la tabla Product ✅'); //emoji  
    } catch (error) {
      console.error(error);
    }
  };

  
  
  module.exports ={ seeder, seederReviews,seederProducts};

