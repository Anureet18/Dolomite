import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Card } from 'react-bootstrap';
import axios from "axios";

const SearchBar = () => {

    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
                console.log(response)
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput)
            })
            console.log(searchValue)
            setFilteredResults(filteredData)
            console.log(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }
    return (
        <div style={{ padding: 20 }}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search..."
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                        searchItems(e.target.value);
                    }}
                />
            </InputGroup>

            <div style={{ marginTop: 20 }}>
                <div>
                    {searchInput.length > 1
                        ? filteredResults.map((item, id) => (
                            <Card key={id}>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        ))
                        : null}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;