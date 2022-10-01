const User = require('../models/User');
const Treino = require('../models/Treino');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, { //VERIFICA SE EXISTE
            include: { association: 'treinos' }
        });

        return res.json(user);
    },


    async store(req, res) {
        const { user_id } = req.params;
        const { segunda, terça, quarta, quinta, sexta, sabado, domingo } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const treino = await Treino.create({
            segunda,
            terça,
            quarta,
            quinta,
            sexta,
            sabado,
            domingo,
            user_id,
        });

        return res.json(treino);
    }
};