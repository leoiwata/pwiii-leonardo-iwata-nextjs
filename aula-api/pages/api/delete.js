//api/delete.js

import { createConnection } from 'mysql2/promise';

// Funcão para conectar no MySQL
async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}

// Rota da API de Delete do usuario
export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Metodo não permitido' });
    }

    const { id } = req.body;
console.log(req.body)
    if (!id) {
        return res.status(400).json({ error: 'O id é obrigatorio no request body.' });
    }

    try {
        // Conecta no banco
        const connection = await connectToDatabase();

        //Executa o delete em "users"
        const [result] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);

        // Fecha conexão
        await connection.end();

        //Check se foi deletado com sucesso
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuario não encontrado. '});
        }

        // Respostas de sucesso
        res.status(200).json({ message: 'Usuario deletado com sucesso!' });
    } catch (error) {
        console.error('Error de conexão com o banco:', error);
        res.status(500).json({ error: 'Erro interno de servidor' });
    }
}