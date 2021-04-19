import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import problem from './problem.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import React , {useState} from 'react';
import Score from './score';
function Question(){
    console.log(problem)

const [i, seti]=useState(0)
function NextFunc(){
    seti(i=>i+1)
    if(i==4){
<score/>
    }
}
function PrevFunc(){
    seti(i=>i-1)
}
return(
    
<Card style={{ width: '18rem'  }}>
  <Card.Body>
  <Card.Header>Quiz</Card.Header>
    <Card.Text>
     {problem[i].question}
    </Card.Text>
   
    <Form.Check
          type="radio"
          label={problem[i].options[0].a}
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label={problem[i].options[0].b}
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label={problem[i].options[0].c}
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
       <Form.Check
          type="radio"
          label={problem[i].options[0].d}
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
        />
    <Button variant="success" onClick={()=>PrevFunc()}>Previous</Button>
    <Button variant="success" onClick={()=>NextFunc()}>Next</Button>
  </Card.Body>
</Card>

)
}
export default Question;