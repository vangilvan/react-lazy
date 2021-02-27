import pagamentos from './pagamentos.jpg';

function Footer() {
    return (
        <footer className="col-12 border border-danger bg-light">
            <div className="d-flex justify-content-center">
                <h5 className="text-success">Formas de pagamento</h5>
            </div>
            <div className="d-flex justify-content-center">
                <img src={pagamentos} alt="Formas de Pagamento"  />
            </div>
            <div className="d-flex justify-content-center">
                <p>&copy; Recode Pro</p>
            </div>
        </footer>
    )
}

export default Footer;