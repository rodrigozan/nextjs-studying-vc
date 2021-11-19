import Link from 'next/link'

function About() {
    return (
        <div>
            <h1>About</h1>
            <Link href="/">
                <a>Acessar Home</a>
            </Link>
            <div>Rodapé</div>
        </div>
    )
}

export default About