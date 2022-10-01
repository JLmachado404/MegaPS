const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            plano: DataTypes.STRING,
            peso: DataTypes.DECIMAL,
            idade: DataTypes.INTEGER,
            altura: DataTypes.DECIMAL,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Treino, { foreignKey: 'user_id', as: 'treinos' }); //as: nome do relacionamento //torna unico cada relacionamento
    }
}

module.exports = User;