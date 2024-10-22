import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function SingleProduct() {
  let abcd = useParams()
  // console.log(abcd);
  let data = useLocation()
  // console.log(data.state.datas[abcd.id].id);
  let datas = data.state
  console.log(datas);
let all = datas.datas[abcd.id - 1]
  return (
    <div><Card key={all.id} style={{ width: '80%',margin:'auto'}}>
    <Card.Img variant="top" style={{height:'200px'}} src={all.image} />
    <Card.Body>
      <Card.Title>{all.title.slice(0,20)}</Card.Title>
      <Card.Text>
        {all.description.slice(0,30)}
      </Card.Text>
      <Button onClick={()=>{gotoanotherpage(all.id)}} variant="primary">Add to Card</Button>
    </Card.Body>
  </Card></div>
  )
}

export default SingleProduct