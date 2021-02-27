import { useState, useEffect } from 'react';
import Vendido from './Vendido/Vendido';
import { Container, Row } from 'react-bootstrap';

export default function Vendidos() {
    const [vendidos, setVendidos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost:4000/vendidos")
            const dados = await resposta.json()
            setVendidos(dados);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {vendidos && vendidos.map(item => <Vendidos id={item.idprod} nome={item.nome_produto} valor={item.precofinal} quantidade={item.qtdtotal} />)}
            </Row>
        </Container>
    )
}