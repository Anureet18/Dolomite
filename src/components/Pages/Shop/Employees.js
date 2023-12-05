import React, { useState } from 'react'
import { Dropdown, Card, Container, Row, Col, Button, ButtonGroup, Tab, Tabs, TabContent } from 'react-bootstrap';


const images =
    [
        { id: '1', title: 'shared1.jpg', description: 'Shared 1', categories: ['Android', 'Web', 'iOS'] },
        { id: '2', title: 'shared2.jpg', description: 'Shared 2', categories: ['Android', 'Web'] },
        { id: '3', title: 'ios1.jpg', description: 'iOS 1', categories: ['iOS'] },
        { id: '4', title: 'ios2.jpg', description: 'iOS 2', categories: ['iOS'] },
        { id: '5', title: 'android1.jpg', description: 'Android 1', categories: ['Android'] },
        { id: '6', title: 'android2.jpg', description: 'Android 2', categories: ['Android'] },
        { id: '7', title: 'web1.jpg', description: 'Web 1', categories: ['Web'] },
        { id: '8', title: 'web2.jpg', description: 'Web 2', categories: ['Web'] },];

const Employees = () => {
    const [selected, setSelected] = useState(null)

    const filteredData = images.filter((item) => item.categories.includes(selected))
    console.log(selected)
    console.log(filteredData)

    return (

        <Tabs
            //defaultActiveKey="profile"
            onSelect={(eventKey) => setSelected(eventKey)}
            id="uncontrolled-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="Android" title="Android">
                {filteredData.map(item => (
                    <Card key={item.id} className='d-flex' style={{ width: '18rem' }}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Body>
                            <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                    </Card>))}
            </Tab>
            <Tab eventKey="iOS" title="iOS">
                {filteredData.map(item => (
                    <Card key={item.id} className='d-flex' style={{ width: '18rem' }}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Body>
                            <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                    </Card>))}
            </Tab>
            <Tab eventKey="Web" title="Web">
                {filteredData.map(item => (
                    <Card key={item.id} className='d-flex' style={{ width: '18rem' }}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Body>
                            <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                    </Card>))}
            </Tab>


        </Tabs>);
};


//         </Card>
//     </Col>
//     <Col>
//             <Dropdown as={ButtonGroup}
//                 onSelect={(eventKey) => setSelected(eventKey)}
//             >
//                 <Button variant="success">Users</Button>
//                 <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
//                 <Dropdown.Menu>
//                     <Dropdown.Item eventKey="Android">Android</Dropdown.Item>
//                     <Dropdown.Item eventKey="iOS">iOS</Dropdown.Item>
//                     <Dropdown.Item eventKey="Web">Web</Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>
//         </Col>
//     </Row>
//     <Row>
//         {selected ?
//             <div>
//                 <h2>{`${selected}`}</h2>
//                 <ul>
//                     {filteredData.map(item => (
//                         <li key={item.id}>{item.title}</li>
//                     ))}
//                 </ul></div>
//             : <div>
//                 <h2>All users</h2>
//                 {images.map((item, id) =>
//                     <div key={id}>
//                         <p>{item.title}</p></div>
//                 )}</div>
//         }
// </Row >
// </Container >
//     )
// }
// <div className='d-flex'>
//     {images
//         .filter((item) => item.categories.includes('Android'))
//         .map((item) => (
//             <Card key={item.id}>
//                 <Card.Title>Android Users</Card.Title>
//                 <Card.Body>
//                     <Card.Text>{item.title}</Card.Text>
//                 </Card.Body>
//             </Card>

//         ))}
// </div>

export default Employees