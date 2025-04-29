import { createConnection } from 'mysql2/promise';

// Função para conectar no MySQL
async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        passoword: '',
        database: 'teste-api',
    });
}

// Rota da API Update de user
export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ error: 'Metodo não permitido'});
    }

    const { id, name, email } = req.body;
    console.log(req.body);

    if (!id || !name || !email) {
        return res.status(400).json({ error: 'id, name, and email são obrigatorios no request body.'});
    }

    try{
        //Conect to the database
        const connection = await connectToDatabase();

        //Executa query para atualizar a tabela "users"
        const [result] = await connection.execute(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [name, email, id]
        );

        //Fecha conexão com o banco
        await connection.end();

        // Check se o update teve sucesso
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuario não encontrado.'});
        }

        //Resposta do serever
        res.status(200).json({ message: 'Usuario atualizado com sucesso'});
       }catch (error) {
           console.error('Error de conexão com o banco:', error);
           res.status(500).json({ error: 'Erro interno de servidor'});
       }
}