import Link from 'next/link'

function About() {
    return (
        <div>
            <h1>Contact</h1>
            <Link href="/">
                <a>Acessar Home</a>
            </Link>
            <Link href="/about">
                <a>Acessar Sobre</a>
            </Link>
            <div>Rodapé</div>
        </div>
    )
}

export default About