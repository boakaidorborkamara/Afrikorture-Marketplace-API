//create main category table 
const mainCategory = sequelize.define('mainCategory', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.CHAR
    }
},
{
    freezeTableName: true,
    timestamps: false
});


// verify if main category module was created
console.log(mainCategory === sequelize.models.mainCategory);