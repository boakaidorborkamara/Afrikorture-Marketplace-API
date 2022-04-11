
//create product table
const Product = sequelize.define('Product', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    date_created:{
        type:DataTypes.DATE
    },
    price:{
        type:DataTypes.DOUBLE
    },
    image:{
        type:DataTypes.STRING
    },
    brand_id:{
        type:DataTypes.INTEGER,

        references:{
            model:Brand,
            key:"id"
        }
    },
    mainCategory_id:{
        type:DataTypes.INTEGER,

        references:{
            model:mainCategory,
            key:"id"
        }
    },
    subCategory_id:{
        type:DataTypes.INTEGER,

        references:{
            model:subCategory,
            key:"id"
        }
    }
},
{ 
    freezeTableName: true,
    timestamps: false
})


// verify if Product module was created
console.log(Product === sequelize.models.Product);