const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },


    async store(req, res) {
        const { nome, sobrenome, plano, peso, idade, altura, email, senha } = req.body;

        const user = await User.create({ nome, sobrenome, plano, peso, idade, altura, email, senha });

        return res.json(user);
    },

    async delete(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User not found '});
        }

        await user.remove(user_id);

        return res.json();
    }
};