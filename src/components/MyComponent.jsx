export function MyComponent(){
    const name = "Inés";
    const repository = "https://github.com/inesmariao/component-practice"

    const student = {
        name: "Jean Paul",
        lastName: "Toloza",
        mobile: "321123",
        linkedinProfile: "https://www.linkedin.com/in/jean-paul-toloza-cuellar-b20376237/"
    }
    
    return (
        <>
            <hr />
            <p>Primer Componente</p>
            <h2>Temas de react</h2>
            <ul>
                <li>Componentes</li>
                <li>Eventos</li>
                <li>Estados - Hooks</li>
                <li>Comunicacion</li>
            </ul>
            <hr />
            <h2>Datos del docente</h2>
            <p>Nombre: {name}</p>
            <p>Repositorio: <br /> {repository}</p>
            <hr />
            <h2>Datos del estudiante</h2>
            <p>Nombre: {student.name}</p>
            <p>Apellido: {student.lastName}</p>
            <p>Celular: {student.mobile}</p>
            <p>Linkedin: <br /> {student.linkedinProfile}</p>
        </>
    )
}