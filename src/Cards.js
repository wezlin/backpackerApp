import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Welcome! this is Landing Page.
        </Card.Text>
        <Button variant="primary">Launch app</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;