import './style/App.css';
import './style/qualification.css';
import Card from 'react-bootstrap/Card';
import {IoOpenOutline} from "react-icons/io5";
import Data from './dataresume.json'


function qualification() {
  const qualification = Data.qualification;
  return (
    <div class="grid" id='qualification'>
        <div class="whole">               
            <div class="body">
                <div class='qualification'>
                    <h1 class='qualification-title title'> Qualification </h1>
                    <div class='qualification-grid grid_row'>
                        {
                            qualification.map(item => {
                                return(
                                    <div class='qualification-item'>
                                    <Card class='qualification-certi'>
                                        <div class='certificate-box'>
                                            <Card.Img variant="top" class='qua_img' src={item.image} alt='certificate-image' />
                                        </div>
                                    <Card.Body class='qua-descrip'>
                                        <Card.Title> {item.certiname} </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> {item.date} </Card.Subtitle>
                                        <Card.Text >
                                        {item.description}
                                        </Card.Text>
                                        <Card.Link class='button button_qua' href={item.link}>View <IoOpenOutline style={{'margin-bottom':'3px'}}/> </Card.Link>
                                    </Card.Body>
                                    </Card>
                                </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default qualification;
