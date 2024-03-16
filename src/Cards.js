import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';

function Cards({inputStringGen, inputStringOriginal}) {

  // let inputStringGen = inputStringGen;
  // let inputStringOriginal = inputStringOriginal;


  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen  data-bs-theme="light">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Our thought:</Accordion.Header>
        <Accordion.Body>
          {inputStringGen}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Reference</Accordion.Header>
        <Accordion.Body>
          {inputStringOriginal}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Cards;