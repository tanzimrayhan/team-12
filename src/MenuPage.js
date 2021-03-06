import React, {Component} from 'react'
import {Carousel,Panel,Thumbnail,Button,Grid} from "react-bootstrap"
import './Menu.css';
import { Col, Container, Row, Footer } from 'mdbreact';

class Menu extends Component {
    render() {
      return (
          <div>
        <div className="Menu">
        <Carousel>
        <Carousel.Item>
          <img width={600} height={500} alt="900x500" src ="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fportrait_435x518%2Fpublic%2F1527198293%2Fbest%2520beauty%2520products%2520and%2520must%2520haves%2520of%2520all%2520time.jpg%3Fitok%3Dmp4Ks9KD" />
          <Carousel.Caption className="Caption">
            <h3>GuideStar</h3>
            <p>Buy this item to donate to Charity.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={600} height={500} alt="900x500" src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcdn2.stylecraze.com%2Fwp-content%2Fuploads%2F2014%2F02%2FBest-Popular-Hair-Care-Products-Available-In-India.jpg" />
          <Carousel.Caption className="Caption">
            <h3>American Red Cross</h3>
            <p>Buy this item to donate to Charity.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={600} height={500} alt="900x500" src="https://i5.walmartimages.com/asr/407a9e0e-0d71-4676-a2aa-0894bcaee5a1_1.43e2cf366f595a6414b72dac06558ba3.jpeg" />
          <Carousel.Caption className="Caption">
            <h3>United Way</h3>
            <p>Buy this item to donate to Charity.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
          
        </div>
        <br/>
        <div className="Popular">
        <Panel>
        <h1 className = "Title">
    Populars 
  </h1>
          <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail className="products" src="https://i5.walmartimages.com/asr/407a9e0e-0d71-4676-a2aa-0894bcaee5a1_1.43e2cf366f595a6414b72dac06558ba3.jpeg" alt="242x200">
        
        <p>
          <Button href = "/buy" >Buy</Button>
          
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail className="products2" src="http://getdrawings.com/image/skinny-jeans-drawing-53.jpg" alt="242x200">
        
        <p>
        <Button href = "/buy">Buy</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail className="products3" src="https://images.offerup.com/qMG7FT0c4mh477YHBalBgt_-0VY=/600x800/28b8/28b877ae30c94b43b4062efd959504a0.jpg" alt="242x200">
        
        <p>
        <Button href = "/buy">Buy</Button>
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>
        </Panel>
        
        </div>



<Footer color="blue" className="footer1">
                <Container fluid className="text-center text-md-left">
                    
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </Container>
                </div>
                <br/> 
            </Footer>
            </div>
      );
    }
  }
  
  export default Menu;

