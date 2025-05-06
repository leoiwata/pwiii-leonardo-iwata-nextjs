"use client"
import React, { useState } from 'react';

const CadastroForm = () => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     // Removendo o estado da senha

     const handleSubmit = async (event) => {
        event.preventDefault();
         
        try {
            const response = await fetch('/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }), // Enviando apenas nome e email
            });

            if (response.ok) {
                console.log('Cadastro realizado com sucesso!');
                // Aqui voce pode adicionar alguma lógica de redirecionamento ou feedback ao usuario
            } else {
                console.error('Erro ao cadastrar:', response.status);
                // Aqui voce pode adicionar alguma logica de tratamento de erro
            }
        }   catch (error) {
            console.error('Ocorreu um erro:', error);
            // Aqui voce pode adicionar alguma logica de tratamento de erro geral
        }
     };

     return (
         <div className="flex item-center justify-center min-h-screen bg-gray-100">
             <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text 2xl font-semibold mb-6 text-gray-800">Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="nome"
                            className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tigh focus:outline-none focus:shadow-outline"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outiline-none focus:shadow-outiline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* Removendo o campo de senha */}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outiline"
                            type="submit"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
     );
};

export default CadastroForm;