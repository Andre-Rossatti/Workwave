import { db } from "../db.js";

export const register = (req, res) => {
    const sentNome = req.body.Nome
    const sentEmail = req.body.Email
    const sentTelefone = req.body.Telefone
    const sentUsername= req.body.Username
    const sentSenha= req.body.Senha

    // Lets create SQL statement to insert the user to the Database table Users
    const SQL = 'INSERT INTO users (username, senha, nome, email, telefone) VALUES (?,?,?,?,?)'
    const Values = [sentUsername, sentSenha, sentNome, sentEmail, sentTelefone]

   // Consulta para executar a declaração SQL
   db.query(SQL, Values, (err, results) => {
    if (err) {
        res.status(500).json({ error: 'Erro ao adicionar o serviço' + err + results});
        console.log('Erro!');
        console.log(SQL);
        console.log(Values);
    } else {
        res.status(201).json({ message: 'Serviço adicionado!' });
    }
});

}
