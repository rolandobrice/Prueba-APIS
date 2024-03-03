import React from 'react'

const Buscador = (props) => {
    return (
    <>
        <form>
            <input className='bordered' type="text" placeholder="Busca tu mejor Amigo@" onChange={(event) => props.hASearch(event.target.value.toLowerCase())}/>
        </form>
    </>
    )
}

export default Buscador