import { db } from "../db.js";



export const Service = (req, res) => {
    

    const sentUSERid = 3;
    const sentTitle = req.body.title;
    const sentType = req.body.type;
    const sentDescription = req.body.description;

    // Vamos criar a declaração SQL para inserir o serviço na tabela de banco de dados Services
    const SQL = 'INSERT INTO services (user_id, titulo, tipo, descricao) VALUES (?, ?, ?, ?)';
    const Values = [sentUSERid, sentTitle, sentType, sentDescription];

    // Consulta para executar a declaração SQL
    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao adicionar o serviço' + err });
            console.log('Erro!');
            console.log(SQL);
            console.log(Values);
        } else {
            res.status(201).json({ message: 'Serviço adicionado!' });
        }
    });
};
