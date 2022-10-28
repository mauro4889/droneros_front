import { faBuilding, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { InstructiveStyle } from './InstructiveStyle'

export const InstructiveCard = () => {
    return (
        <InstructiveStyle>
            <h2>¿COMO COMPRAR?</h2>
            <div className="container">
                <div className="description">
                    <div className="icon">
                    <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    <p className="title">A través de nuestro sitio</p>
                    <p>
                    Podés realizar tu compra desde nuestro sitio, eligiendo el modelo que estás buscando y siguiendo los simples pasos. Una vez realizada la compra recibirás un email de confirmación y un asesor se pondrá en contacto con vos para organizar la entrega.
                    </p>
                    <button>Entrar a la tienda</button>
                    </div>
                </div>
                <div className="description">
                    <div className="icon">
                    <FontAwesomeIcon icon={faBuilding} />
                    </div>
                    <p className="title">Conocé nuestras oficinas</p>
                    <p>
                    Te invitamos a coordinar una visita a nuestras oficinas / showroom. Para ver nuestros productos y recibir un trato personalizado de nuestros especialistas y técnicos.
                    </p>
                    <button>Conocenos</button>
                </div>
        </InstructiveStyle>
    )
}
