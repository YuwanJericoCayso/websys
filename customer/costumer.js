const {DataTypes} = require ('sequelize');
const sequelize = require ('../database/db');


const Customer = sequelize.define ('Customer', {
    id:{
        type: DataTypes.INTEGER, primaryKey:true,
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    birthday:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    
});

console.log(Customer === sequelize.models.Customer);



