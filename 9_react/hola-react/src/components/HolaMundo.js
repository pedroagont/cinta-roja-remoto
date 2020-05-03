import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

class HolaMundo extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="my-4">Hola Mundo desde el componente!</h2>
        <p>Soy otro elemento dentro de un mismo nodo :D</p>

          {/*<div class="card" style="width: "18rem;">*/}
        <div className="card my-4" style={{width: "18rem"}}>
          <div className="card-body">
            <h6 className="card-title">Card title</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="." className="btn btn-primary btn-lg" target="_blank">Soy un botón de Boostrap</a>
          </div>
        </div>

          <Card className="my-4" style={{width: "18rem"}}>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button tag="a"
                      href="."
                      color="primary"
                      size="lg"
                      target="_blank">
                  Soy un botón de Reactstrap
              </Button>
            </CardBody>
          </Card>


      </React.Fragment>
    );
  }
}

export default HolaMundo;
