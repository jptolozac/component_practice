export function ThirdComponent({ allergies, bloodGroup, height, ...props }){
    return (
        <div>
            <h2>Comunicacion entre componentes</h2>
            <ul>
                <li>Alergias: {allergies}</li>
                <li>Grupo sanguineo: {bloodGroup}</li>
                <li>Peso: {height}</li>
            </ul>
        </div>
    )
}