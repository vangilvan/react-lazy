import { Row } from 'react-bootstrap';
import {lazy, Suspense} from 'react';
import carregando from '../../img/giphy.gif';

const Store1 = lazy(() => import('../../CodeSplitting/lojas/store1'));
const Store2 = lazy(() => import('../../CodeSplitting/lojas/store2'));
const Store3 = lazy(() => import('../../CodeSplitting/lojas/store3'));

 function Lojas() {
    return (
        <Row>
        <div className="col-12">
          <h2 className="display-4">Nossas Lojas</h2>
          <hr className="my-1" /> 
        </div>
        <Suspense fallback = { <img src={carregando} alt="Carregando"  />}>
            <Store1 />
        </Suspense>
        <Suspense fallback = { <img src={carregando} alt="Carregando"  />}>
            <Store2 />
        </Suspense>
        <Suspense fallback = { <img src={carregando} alt="Carregando"  />}>
            <Store3 />
        </Suspense>
        </Row>
    )
}

export default Lojas;