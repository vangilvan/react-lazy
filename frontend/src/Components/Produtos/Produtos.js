import { useState, useEffect } from 'react';
import Produto from './Produto/Produto';
import { Container, Row } from 'react-bootstrap';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost:4000/produtos")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto key={item.idproduto} imagem={item.imagem} descricao={item.descricao} nome={item.nome_produto} preco={item.preco} precoFinal={item.precofinal} categoria={item.nome_produto} />)}
            </Row>
        </Container>
    )
}