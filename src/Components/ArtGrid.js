// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function ArtGrid() {
//   return (
//     <Container>
//       <Row>
//         <Col>1 of 3</Col>
//         <Col xs={6}>2 of 3 (wider)</Col>
//         <Col>3 of 3</Col>
//       </Row>
//       <Row>
//         <Col>1 of 3</Col>
//         <Col xs={5}>2 of 3 (wider)</Col>
//         <Col>3 of 3</Col>
//       </Row>
//     </Container>
//   );
// }

// export default ArtGrid;

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function ArtGrid() {
    return (
      <Container className='pt-5 px-0'>
            <div className='row g-3 '>
                <div className='col-lg-3 col-sm-6 col-xs-12'>
                    <Card className=' px-0'>
                        <Card.Img variant="top" src="images/kanna.jpg" className='object-fit-cover border rounded' height="250px" />
                          <Card.Body className='d-flex justify-content-between'>
                              <div>    
                                  <Card.Title>Image Name</Card.Title>
                                  <Card.Text>
                                      Image description.....
                                  </Card.Text>
                              </div>
                              <div>
                                  <Button href="#" className='btn-sm'>Order Now</Button>
                              </div>    
                          </Card.Body>
                          <Card.Footer className='d-flex justify-content-between'>
                              <div>    
                                  <small className="text-muted">Review * * * * *</small>
                              </div>
                              <div>    
                                  <small className="text-muted">Add to Fav</small>
                              </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='col-lg-3 col-sm-6 col-xs-12'>
                    <Card className=' px-0'>
                        <Card.Img variant="top" src="images/kanna.jpg" className='object-fit-cover border rounded' height="250px" />
                          <Card.Body className='d-flex justify-content-between'>
                              <div>    
                                  <Card.Title>Image Name</Card.Title>
                                  <Card.Text>
                                      Image description.....
                                  </Card.Text>
                              </div>
                              <div>
                                  <Button href="#" className='btn-sm'>Order Now</Button>
                              </div>    
                          </Card.Body>
                          <Card.Footer className='d-flex justify-content-between'>
                              <div>    
                                  <small className="text-muted">Review * * * * *</small>
                              </div>
                              <div>    
                                  <small className="text-muted">Add to Fav</small>
                              </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='col-lg-3 col-sm-6 col-xs-12'>
                    <Card className=' px-0'>
                        <Card.Img variant="top" src="images/kanna.jpg" className='object-fit-cover border rounded' height="250px" />
                          <Card.Body className='d-flex justify-content-between'>
                              <div>    
                                  <Card.Title>Image Name</Card.Title>
                                  <Card.Text>
                                      Image description.....
                                  </Card.Text>
                              </div>
                              <div>
                                  <Button href="#" className='btn-sm'>Order Now</Button>
                              </div>    
                          </Card.Body>
                          <Card.Footer className='d-flex justify-content-between'>
                              <div>    
                                  <small className="text-muted">Review * * * * *</small>
                              </div>
                              <div>    
                                  <small className="text-muted">Add to Fav</small>
                              </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='col-lg-3 col-sm-6 col-xs-12'>
                    <Card className=' px-0'>
                        <Card.Img variant="top" src="images/kanna.jpg" className='object-fit-cover border rounded' height="250px" />
                          <Card.Body className='d-flex justify-content-between'>
                              <div>    
                                  <Card.Title>Image Name</Card.Title>
                                  <Card.Text>
                                      Image description.....
                                  </Card.Text>
                              </div>
                              <div>
                                  <Button href="#" className='btn-sm'>Order Now</Button>
                              </div>    
                          </Card.Body>
                          <Card.Footer className='d-flex justify-content-between'>
                              <div>    
                                  <small className="text-muted">Review * * * * *</small>
                              </div>
                              <div>    
                                  <small className="text-muted">Add to Fav</small>
                              </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='col-lg-3 col-sm-6 col-xs-12'>
                    <Card className=' px-0'>
                        <Card.Img variant="top" src="images/kanna.jpg" className='object-fit-cover border rounded' height="250px" />
                          <Card.Body className='d-flex justify-content-between'>
                              <div>    
                                  <Card.Title>Image Name</Card.Title>
                                  <Card.Text>
                                      Image description.....
                                  </Card.Text>
                              </div>
                              <div>
                                  <Button href="#" className='btn-sm'>Order Now</Button>
                              </div>    
                          </Card.Body>
                          <Card.Footer className='d-flex justify-content-between'>
                              <div>    
                                  <small className="text-muted">Review * * * * *</small>
                              </div>
                              <div>    
                                  <small className="text-muted">Add to Fav</small>
                              </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='col-lg-3 col-sm-6 col-xs-12'>
                    <Card className=' px-0'>
                        <Card.Img variant="top" src="images/kanna.jpg" className='object-fit-cover border rounded' height="250px" />
                          <Card.Body className='d-flex justify-content-between'>
                              <div>    
                                  <Card.Title>Image Name</Card.Title>
                                  <Card.Text>
                                      Image description.....
                                  </Card.Text>
                              </div>
                              <div>
                                  <Button href="#" className='btn-sm'>Order Now</Button>
                              </div>    
                          </Card.Body>
                          <Card.Footer className='d-flex justify-content-between'>
                              <div>    
                                  <small className="text-muted">Review * * * * *</small>
                              </div>
                              <div>    
                                  <small className="text-muted">Add to Fav</small>
                              </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='col-lg-3 col-sm-6 col-xs-12'>
                    <Card className=' px-0'>
                        <Card.Img variant="top" src="images/kanna.jpg" className='object-fit-cover border rounded' height="250px" />
                          <Card.Body className='d-flex justify-content-between'>
                              <div>    
                                  <Card.Title>Image Name</Card.Title>
                                  <Card.Text>
                                      Image description.....
                                  </Card.Text>
                              </div>
                              <div>
                                  <Button href="#" className='btn-sm'>Order Now</Button>
                              </div>    
                          </Card.Body>
                          <Card.Footer className='d-flex justify-content-between'>
                              <div>    
                                  <small className="text-muted">Review * * * * *</small>
                              </div>
                              <div>    
                                  <small className="text-muted">Add to Fav</small>
                              </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='col-lg-3 col-sm-6 col-xs-12'>
                    <Card className=' px-0'>
                        <Card.Img variant="top" src="images/kanna.jpg" className='object-fit-cover border rounded' height="250px" />
                          <Card.Body className='d-flex justify-content-between'>
                              <div>    
                                  <Card.Title>Image Name</Card.Title>
                                  <Card.Text>
                                      Image description.....
                                  </Card.Text>
                              </div>
                              <div>
                                  <Button href="#" className='btn-sm'>Order Now</Button>
                              </div>    
                          </Card.Body>
                          <Card.Footer className='d-flex justify-content-between'>
                              <div>    
                                  <small className="text-muted">Review * * * * *</small>
                              </div>
                              <div>    
                                  <small className="text-muted">Add to Fav</small>
                              </div>
                        </Card.Footer>
                    </Card>
                </div>
                
            
           
        </div>  
       </Container>     
  );
}

export default ArtGrid;