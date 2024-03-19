import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Result() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/user')
            .then(res => { setResults(res.data); })
            .catch(err => { console.log(err); });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <div className="result-container">
                {results.map(result => (
                    <div className="result-item" key={result.id}>
                        <h2>{result.studentName}</h2>
                        <p><strong>Name:</strong> {result.name}</p>
                        <p><strong>Category:</strong> {result.category}</p>
                        <p><strong>Likelihood:</strong> {(result.likelihood)}</p>
                        <p><strong>Impact:</strong> {(result.impact)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
