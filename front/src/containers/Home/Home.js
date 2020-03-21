import React, {useEffect} from 'react';
import {Badge, Card, Container, Row} from "reactstrap";
import Sidebar from "../../components/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../store/actions/productsActions";
import ImageThumbnail from "../../components/ImageThumbnail/ImageThumbnail";

const Home = props => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    console.log(products);
    return (
        <>
          <Container>
              <Row>
                  <Sidebar className='w-25 border-right'/>
                  <div className='w-75'>
                      {products.map(product => (
                          <Card
                              key={product._id}
                              className='w-25 d-inline-block m-2 text-center p-1'
                          >
                              <ImageThumbnail image={product.image}/>
                              <p>{product.title}</p>
                              <Badge>{product.price}</Badge>
                          </Card>
                      ))}
                  </div>
              </Row>
          </Container>
        </>
    );
};

export default Home;
