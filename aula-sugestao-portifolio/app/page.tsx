import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portfólio - Leonardo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfólio de Leonardo, desenvolvedor em formação" />
      </Head>
      <Navbar />
      <main className="p-6 max-w-5xl mx-auto">
        <section id="sobre" className="mb-10">
          <h1 className="text-3xl font-bold text-center">Olá, Eu sou Leonardo</h1>
          <p className="mt-2 text-gray-700 text-center">Desenvolvedor em formação.</p>
        </section>

        <section id="projetos" className="mb-10 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Meus Projetos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="font-semibold">Anxiety</h3>
              <p className="text-gray-600">Trabalho de Conclusão de Curso - Desenvolvimento de Sistemas.Este projeto é uma aplicação Android construída com Expo (React Native).
              Tem como objetivo fornecer uma plataforma para gerenciamento da ansiedade, com foco em técnicas de relaxamento que auxiliam durante os estudos.</p>
              <a href="https://github.com/KenjiCaique/Anxiety-TCC.git" className="text-blue-500 hover:underline mt-2 inline-block">Ver no GitHub</a>
            </div>
           
          </div>
        </section>

        <section id="contato" className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Contato</h2>
          <p>Você pode me encontrar no e-mail: <a href="mailto:seuemail@example.com" className="text-blue-500 hover:underline">leonardo.iwata@outlook.com</a></p>
        </section>
      </main>
    </>
  );
}
