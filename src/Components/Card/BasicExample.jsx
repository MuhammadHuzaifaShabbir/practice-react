import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BasicExample() {
  const [datas, setDatas] = useState([]);

  const navigate = useNavigate()

  function gotoanotherpage(a) {

      navigate(`/singleProduct/${a}`, { state: { datas} })

  }

  useEffect(() => {
    // Fetching product data from Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
      })
      .then(data => {
        console.log(data);
        setDatas(data); // Set the product data
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <><div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '10px' }}>

      {datas.map((product) => (
        <Card key={product.id} style={{ width: '18rem', height: '400px', overflowY: 'scroll' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Button onClick={()=>{gotoanotherpage(product.id)}} variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
}

export default BasicExample;
