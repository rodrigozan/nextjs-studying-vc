import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/about">
                <a>Acessar Sobre</a>
            </Link>
            <div>Rodapé</div>
        </div>
    )
}

export default Home