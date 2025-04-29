// pages/api/create.js
import { createConnection } from 'mysql2/promise';

// Função para conectar no MySQL
async function connectToDatabase()  {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}

export default async function handler(req, res) {
    if (req.method !== 'POST')  {
        return res.status(405).json({ error: 'Metodo não permitido' });
    }

    const userdata = req.body;
    console.log(userdata)

    const { name, email} = userdata;

    if (!name || !email ) {
        return res.status(400).json({ error: 'name e email são obrigatorios no request body.' });
    }
    try {
        // Conecta no banco
        const connection = await connectToDatabase();

        // Executa a query para transacionar dados da tabela "user"
        const [result] = await connection.execute('INSERT INTO users (name, email) VALUES (?, ?)', [
            name,
            email,
        ]);
        // Checa se o usuario existe

        // Encerra conexao
        await connection.end();

        //Respond with the user data
        res.status(201).json({ id: result.insertId, message: 'Usuario criado com sucesso!' });
    }   catch (error) {
        console.error('Error de canexao com o banco:', error);
        res.status(500).json({ error: 'Erro Interno de Servidor' });
    }
}