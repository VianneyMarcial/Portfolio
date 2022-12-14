import React from 'react';
import { Button, Card } from 'react-bootstrap';
import RickyMorthy from '../../RickyMorthy.png';
import EcomerceTec from '../../EcomerceTec.png';
import Quotes from '../../Quotes.png';
import Weather from '../../Weather.png';
import Pokemon from '../../Pokemon.png';
import EcomerceCake from '../../EcomerceCake.png';
import BoxShadown from '../../BoxShadown.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Card style={{ width: '30vw' }}>
        <div className='proyectCard'>
          <Card.Body>
            <figure>
              <a> <Card.Img variant="top" src={RickyMorthy} className='proyectImg' /> </a>
              <figcaption>
               <a href="https://rickmortyapp-vianneymarcial.netlify.app/" target={"_blank"}>React <br /> React Routes <br /> CSS <br /> Axios <br />Redux <br /> Consumo de API </a>
              </figcaption>
            </figure>
            <Card.Title className='titleProject'>RickyMorthy App</Card.Title>
            <Card.Text>
              Application of the animated series Rick and Morty, where we can find the characters according to their location by planet.
            </Card.Text>
            <Button variant="light" className='goTo'> <a href="https://github.com/VianneyMarcial/RickMortyApp" target={"_blank"} >Go to project</a>  </Button>
          </Card.Body>
        </div>
      </Card>
      <Card style={{ width: '30vw' }}>
        <div className='proyectCard'>
          <Card.Body>
            <figure>
              <a> <Card.Img variant="top" src={EcomerceTec} className='proyectImg' /> </a>
              <figcaption>
               <a href="https://ecommerce-tec-vianneymarcial.netlify.app" target={"_blank"}>React <br /> React Routes <br /> CSS <br /> Axios <br />Redux <br /> Consumo de API </a>
              </figcaption>
            </figure>
            <Card.Title className='titleProject'>Ecomerce Tecnology</Card.Title>
            <Card.Text>
              Ecomerce website where we can access by having our user account and view the purchase history, as well as add products to the cart. 
            </Card.Text>
            <Button variant="light" className='goTo'> <a href="https://github.com/VianneyMarcial/EcomerceTecnology" target={"_blank"} >Go to project</a>  </Button>
          </Card.Body>
        </div>
      </Card>
      <Card style={{ width: '18rem' }}>
        <div className='proyectCard'>
          <Card.Body>
            <figure>
              <a> <Card.Img variant="top" src={Quotes} className='proyectImg'/> </a>
              <figcaption>
                <a href="https://quotes-vianneymarcial.netlify.app/" id="vink" target={"_blank"}>React <br /> CSS <br /> Manejo de estados <br /> Consumo de API </a>
              </figcaption>
            </figure>
            <Card.Title className='titleProject'>Quotes App</Card.Title>
            <Card.Text>
              Application that allows the user to obtain a random quote with its respective author in combination with a different color of the elements.
            </Card.Text>
            <Button variant="light" className='goTo'> <a href="https://github.com/VianneyMarcial/quotesapp" target={"_blank"} >Go to project</a>  </Button>
          </Card.Body>
        </div>
      </Card>
      <Card style={{ width: '18rem' }}>
        <div className='proyectCard'>
          <Card.Body>
            <figure>
              <a> <Card.Img variant="top" src={Weather} className='proyectImg'/> </a>
              <figcaption>
                <a href="https://weatherapp-vianneymarcial.netlify.app/" id="vink" target={"_blank"}>  React <br /> CSS <br /> Consumo de API </a>
              </figcaption>
            </figure>
            <Card.Title className='titleProject'>Weather App</Card.Title>
            <Card.Text>
              Application to know the city's weather according to the user's geolocation and its conversion to degrees Celsius or Fahrenheit.
            </Card.Text>
            <Button variant="light" className='goTo'> <a href="https://github.com/VianneyMarcial/weatherApp" target={"_blank"} >Go to project</a>  </Button>
          </Card.Body>
        </div>
      </Card>
      <Card style={{ width: '18rem' }}>
        <div className='proyectCard'>
          <Card.Body>
            <figure>
              <a> <Card.Img variant="top" src={Pokemon} className='proyectImg'/> </a>
              <figcaption>
                <a href="https://pokeapp-vianneymarcial.netlify.app/" id="vink" target={"_blank"}>React <br /> React Routes <br /> CSS <br /> Axios <br />Redux <br /> Consumo de API </a>
              </figcaption>
            </figure>
            <Card.Title className='titleProject'>Pokemon App</Card.Title>
            <Card.Text>
              Wiki application of the Pokemon video game where we can learn about each of the characteristics of the characters.
            </Card.Text>
            <Button variant="light" className='goTo'> <a href="https://github.com/VianneyMarcial/PokeApp" target={"_blank"} > Go to project</a> </Button>
          </Card.Body>
        </div>
      </Card>
      <Card style={{ width: '18rem' }}>
        <div className='proyectCard'>
          <Card.Body>
            <figure>
              <a> <Card.Img variant="top" src={EcomerceCake} className='proyectImg'/> </a>
              <figcaption>
                <a href="https://e-commerce-vianneym.netlify.app/" id="vink" target={"_blank"}>Javascript <br /> CSS </a>
              </figcaption>
            </figure>
            <Card.Title className='titleProject'>Ecomerce</Card.Title>
            <Card.Text>
              Ecomerce page where the user can add items to his cart, delete or decrease the quantity and get the total of the purchase.
            </Card.Text>
            <Button variant="light" className='goTo'> <a href="https://github.com/VianneyMarcial/E-commerce" target={"_blank"} >Go to project</a> </Button>
          </Card.Body>
        </div>
      </Card>
      <Card style={{ width: '18rem' }}>
        <div className='proyectCard'>
          <Card.Body>
            <figure>
              <a> <Card.Img variant="top" src={BoxShadown} className='proyectImg'/> </a>
              <figcaption>
                <a href="https://boxshadow-vianneym.netlify.app/" id="vink" target={"_blank"}>React <br /> CSS <br /></a>
              </figcaption>
            </figure>
            <Card.Title className='titleProject'>Box Shadown App</Card.Title>
            <Card.Text>
              Useful app to elaborate the surplus you want for an object and apply it by means of the code.
            </Card.Text>
            <Button variant="light" className='goTo'> <a href="https://github.com/VianneyMarcial/BoxShadow" target={"_blank"} >Go to project</a> </Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Portfolio;