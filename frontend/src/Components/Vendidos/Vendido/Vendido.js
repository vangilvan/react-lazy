function Vendido(props) {
    return (
        <div className="card m-3 bg-light">
            <h3>{props.nome}</h3>
            <div className="card-body">
                <h4 className="card-title">Dados</h4>
                <p className="card-text">Valor Unitário: R$ {props.valor}</p>
                <p className="card-text">Vendas Realizadas: {props.quantidade}</p>
            </div>
        </div>
    )
}
export default Vendido;