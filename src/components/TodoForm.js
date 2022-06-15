
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'

function App() {
  return (
    <div className="TodoForm">
    <Container>
     <InputGroup className="mb-3">
    <FormControl
      placeholder="Add Task"
      aria-label="Recipient's username"
      aria-describedby="addon2"/>
    <InputGroup.Text id="addon2">Add</InputGroup.Text>
  </InputGroup>
  </Container>
    </div>
  );
}
 export default App;