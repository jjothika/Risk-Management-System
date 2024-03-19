
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function ResultManagement() {
    const [results, setResults] = useState([]);
    const [name, setName] = useState([]);
    const [category, setCategory] = useState('');
    const [likelihood, setLikelihood] = useState('');
    const [impact, setImpact] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/user')
            .then(res => { setResults(res.data); })
            .catch(err => { console.log(err); });
    }, []);

    const handleAddResult = () => {
        axios.post('http://localhost:3001/user', {
            Name: name,
            category: category,
            likelihood:likelihood,impact:impact
        })
        .then(res => { console.log(res); })
        .catch(err => { console.log(err); });
    };

    const handleDeleteResult = (resultId) => {
        axios.delete(`${resultId}`)
            .then(res => { console.log(res); })
            .catch(err => { console.log(err); });
    };

    return (
        <div className="container5">
            <h1>Risk Management System</h1>

            <form onSubmit={handleAddResult}>
                <label> Name:</label><br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />

                <label>Category:</label><br/>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                <br />

                <label>Likelihood:</label><br/>
                <input type="text" value={likelihood} onChange={(e) => setLikelihood(e.target.value)} />
                <br />
                <label>Impact:</label><br/>
                <input type="text" value={impact} onChange={(e) => setImpact(e.target.value)} />
                <br />
                <button type="submit">Add Risk</button>
            </form>

            <br />

            <table>
                <thead>
                    <tr>
                        <th> Name</th>
                        <th>Category</th>
                        <th>Likelihood</th>
                        <th>Impact</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result.name}>
                            <td>{result.category}</td>
                            <td>{result.likelihood}</td>
                            <td>{result.impact}</td>
                            <td>
                                <button onClick={() => handleDeleteResult(result.name)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

