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


export const login = (req, res) => {
    const sentloginUsername = req.body.LoginUsername;
    const sentLoginSenha = req.body.LoginSenha;

    const SQL = 'SELECT * FROM users WHERE username = ? AND senha = ?';
    const Values = [sentloginUsername, sentLoginSenha];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send({ error: err });
        } else if (results.length > 0) {
            const user = results[0];
            // Aqui você pode adicionar mais informações baseadas em user
            res.send({ 
                loggedIn: true, 
                userId: user.user_id,

            });
        } else {
            res.send({ loggedIn: false, message: 'Credenciais não coincidem!' });
        }
    });
};