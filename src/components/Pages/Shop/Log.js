import React, { useEffect, useState } from "react";
import './SignIn.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = (props) => {

    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const [visibleItems, setVisibleItems] = useState(4);
    console.log(visibleItems)

    const getApiData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(res.data);
            setMyData(res.data);
        }
        catch (error) {
            setIsError(error.message);
        }
    }

    useEffect(() => {
        getApiData();
    }, []);

    
    const handleShowMore = () => {
        setVisibleItems(visibleItems + 4);
    };
    const handleLess = () => {
        setVisibleItems(visibleItems - 4);
    };  

    return (
        <>
            <div className="log-out">
                <h1>Home Page </h1>
                <p>Welcome {localStorage.getItem('name')}</p>
                <button className='signbtn' onClick={() => { localStorage.clear(); props.setShowHome(false) }}>LogOut</button>

                {isError !== "" && <h2>{isError}</h2>}

                <Row className="display g-4 m-5">
                    {/* {myData.slice(0, 4).map((post) => {
                        const { id, title, body } = post;

                        return (
                            <Col md={3} key={id}>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title>{title.slice(0, 15).toUpperCase()}</Card.Title>
                                        <Card.Text>{body.slice(0, 90)}</Card.Text>
                                        <Link to={`/ReadMore/${id}`}>Read more</Link>
                                    </Card.Body>
                                </Card>

                            </Col>

                        );
                    })} */}
                        {myData.slice(0, visibleItems).map((item,id) => {
                        // const { id, title, body } = post;

                        return (
                            <Col md={3} key={id}>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title>{item.title.slice(0, 15).toUpperCase()}</Card.Title>
                                        <Card.Text>{item.body.slice(0, 60)}</Card.Text>
                                        <Link to={`/ReadMore/${id}`}>Read more</Link>
                                    </Card.Body>
                                </Card>

                            </Col>

                        );
                    })}
                    <Col lg={12}>
                        {visibleItems < myData.length && (
                            <Button onClick={handleShowMore}>Show More</Button>                   
                        )} 
                        {( visibleItems>4 ? 
                            <Button onClick={handleLess}>Show Less</Button> : null                   
                        )}                                                                 
                    </Col>
                </Row>
            </div >
        </>
    );
};

export default Home;




