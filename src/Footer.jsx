export default function Footer() {
    
    const year = new Date().getFullYear().toString();

    return (
        <footer>
            <p> Copyright &copy; {year} </p>
        </footer>
    )
}