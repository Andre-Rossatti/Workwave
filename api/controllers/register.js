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

    // Query to execute the sql statement stated above
    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err);
            console.log('errrrrro!');
            console.log(SQL);
            console.log(Values);
        }
        else {
            console.log('Usuário inserido com sucesso!');
            res.send({ message: 'Usuário adicionado!' })
        }
    })
}
