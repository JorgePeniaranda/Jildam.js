import React from 'react'
import SecuritySpanButton from '../../Components/SecuritySpanButton'

export default function SecurityProfile({ className }) {
    return (
        <div className={"grid grid-rows-3 py-20 " + className}>
            <SecuritySpanButton>Cambiar contraseña</SecuritySpanButton>
            <SecuritySpanButton>Eliminar cuenta</SecuritySpanButton>
            <SecuritySpanButton>Resetear contraseñas</SecuritySpanButton>
        </div>
    )
}
