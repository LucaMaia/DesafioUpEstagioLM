import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Carousel} from "react-bootstrap";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src='./logo512.png' className="App-logo" alt="logo" />
          <div className="d-grid gap-2" display="inline-block" style={{paddingLeft:"900px"}}>
              <Button variant="primary" size="lg">
                Sign in
              </Button>
          </div>

        <div display="inline-block" style={{padding:"20px"}}>
              <Button variant="secondary" size="lg" >
                  Sign out
              </Button>
          </div>
      </header>

        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/fotos-gratis/terra-e-galaxia-elementos-desta-imagem-fornecidos-pela-nasa_335224-750.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://static8.depositphotos.com/1550726/1010/i/600/depositphotos_10104601-stock-photo-road-through-a-golden-forest.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://st.depositphotos.com/1780879/3816/i/600/depositphotos_38166573-stock-photo-trees-with-sunbeams.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default App;
