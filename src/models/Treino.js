const { Model, DataTypes } = require('sequelize');

class Treino extends Model {
    static init(sequelize) {
        super.init({
            segunda: DataTypes.STRING,
            terça: DataTypes.STRING,
            quarta: DataTypes.STRING,
            quinta: DataTypes.STRING,
            sexta: DataTypes.STRING,
            sabado: DataTypes.STRING,
            domingo: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }); //as: nome do relacionamento //torna unico cada relacionamento
    }
}

module.exports = Treino;