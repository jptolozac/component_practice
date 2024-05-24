export function Child({ name, addMessage, setName }) {
    const sendMessage = () => {
        addMessage("Este mensaje es del hijo")
    }

    const changeName = () => {
        setName("Nuevo Nombre Hijo")
    }

    return (
        <div>
            {name}
            <div>
                <button
                    onClick={sendMessage}
                >Enviar mensaje</button>
                <button
                    onClick={changeName}
                >Enviar mensaje</button>
            </div>
        </div>
    )
}