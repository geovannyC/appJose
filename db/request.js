const Sequelize = require('sequelize');
const sequelize = new Sequelize('baseJose', 'postgres', 'marcelo272', 
  {
    host: 'localhost',
    dialect: 'postgres',
    
    
  });
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  const formatoUsuario = sequelize.define("usuarios",{
    nombre: Sequelize.TEXT,
    apellido: Sequelize.TEXT,
    email: Sequelize.TEXT,
    contraseña: Sequelize.TEXT
  },
  {
    timestamps: false
})