//create sub category table
const subCategory = sequelize.define('subCategory', {
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
// verify if sub Category module was created
console.log(subCategory === sequelize.models.subCategory);