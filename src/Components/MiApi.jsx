import React from 'react'
import Table from 'react-bootstrap/Table'
import Buscador from './Buscador'
import { useState, useEffect } from 'react'

const MiApi = () => {
    const [huachitos, setHuachitos]= useState([])
    const [search, setSearch] = useState('')
    const api_url = " https://huachitos.cl/api/animales";

    const getHuachitos = async () => {
        try {
            const response= await fetch(api_url);
            const data = await response.json();

            data.data.sort((a, b) => {
                if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                return 1;
                }
                if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                return -1;
                }
                return 0;
                });

            setHuachitos(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const buildHeaders = () => {
        let headHuachitos = []
        const tableHeads = []

        huachitos.map((huachito, index) => {
            if (index == 0) {
                headHuachitos = Object.keys(huachito)

                headHuachitos.map((headHuachito) => {
                    if (headHuachito == 'tipo' || headHuachito == 'nombre' || headHuachito == 'genero' || headHuachito == 'edad') {
                        tableHeads.push(headHuachito)
                    }
                })
            }
        })
        return tableHeads.map((tableHead) => <th key={tableHead}>{tableHead}</th> )
    }

    const handleSearch = (valor) => {
        setSearch(valor)
    }

    useEffect(() => {
        if (search == "") {
            getHuachitos();
        } else {
            setHuachitos(huachitos.filter((huachito) => 
        huachito.nombre.toLowerCase().includes(search) ||
        huachito.tipo.toLowerCase().includes(search)||
        huachito.edad.toLowerCase().includes(search) ||
        huachito.genero.toLowerCase().includes(search)
        ))
        }

    }, [search])

        useEffect(() => {
            getHuachitos();
        },[]);


return (
    <>
        <Buscador
        hASearch={handleSearch}
        />
        <Table responsive striped bordered hover variant='warning'>
            <thead>
                <tr>
                    {buildHeaders()}
                </tr>
            </thead>
            <tbody>
                {
                    huachitos.map((huachito, index) => {
                        return (
                            <tr key={index}>
                                <td key={huachito.nombre + index}>{huachito.nombre}</td>
                                <td key={huachito.tipo + index}>{huachito.tipo}</td>
                                <td key={huachito.edad + index}>{huachito.edad}</td>
                                <td key={huachito.genero+ index}>{huachito.genero}</td>
                            </tr> 
                        )
                    })
                }
            </tbody>
        </Table>
    </>
)
}

export default MiApi