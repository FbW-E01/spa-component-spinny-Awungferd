import './Spinner.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart, faGlobeAfrica, faHome } from '@fortawesome/free-solid-svg-icons'

import { Card, Table } from 'react-bootstrap';
import image from './components/comments.jpg'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  let [comments, setComments] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_delay=400" + Math.random())
      .then(response => response.json())
      .then(result => setComments(result))


  }, [])

  return (<div>
    <Card style={{ width: '100vw', background: 'seaGreen' }}>
      <Card.Img variant="top" src={image} width="100%" height="130" />
      <Card.Body style={{ background: 'azure' }}>
        <Card.Title style={{ fontSize: '3rem', textAlign: 'center', background: 'navy', color: 'tomato' }} >Comments   </Card.Title>

        <div>
          <Card.Text>
            {comments ?
              <Table >

                {comments.map((text, index) =>
                  <tbody>  <tr> <td>{text.id}</td>
                    <td>{text.body}<hr /> </td></tr>
                  </tbody>)
                }
              </Table>
              :
              <p>
                <div className="spinner">
                  <h2> <FontAwesomeIcon icon={faGlobeAfrica} /></h2><br />
                  <h2><FontAwesomeIcon icon={faHome} /></h2> <br />
                  <h1>LOADING......</h1><br />
                  <h2>  <FontAwesomeIcon icon={faCoffee} /></h2><br />
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </p>}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  </div>

  );
}


export default App;
