import { Row } from 'react-bootstrap';

function Home(props) {
    return (
        <Row>
            <main className="jumbotron col-12">
               <h2 className="display-4">Seja Bem vindo(a)</h2>
               <p className="lead">Aqui em nossa loja, <em>programadores tem desconto</em> nos produtos para sua casa!</p>
               <hr className="my-1" />
            </main>
        </Row>
    );
}

export default Home;