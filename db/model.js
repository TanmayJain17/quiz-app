const {db,Model} = require('./connection.js')
const {DataTypes} = require('sequelize')

const COL_ID_DEF = {
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
}
class candidates extends Model { }
candidates.init({
    id: COL_ID_DEF,
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
    
}, { sequelize: db, modelName: 'candidates' })

class scoreSheet extends Model{}
scoreSheet.init({
    id:COL_ID_DEF,
    
    q1marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q2marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q3marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q4marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q5marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q6marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q7marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q8marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q9marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q10marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q11marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q12marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q13marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q14marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q15marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q16marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q17marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q18marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q19marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q20marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q21marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q22marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q23marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q24marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q25marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q26marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q27marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q28marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q29marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q30marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q31marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q32marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    total:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
},{ sequelize: db, modelName: 'scoresheet' })

/* candidates.hasOne(scoreSheet)
scoreSheet.belongsTo(candidates) */

module.exports = {
    db,
    Model,
    candidates,
    scoreSheet
}


