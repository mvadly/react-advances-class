import React, { useEffect, useState } from 'react';
import Alert from '../../components/atoms/alert';
import {getServiceHome} from '../../services/home'

const Home = (props) => {
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState("https://swapi.dev/api/people")
    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        getServiceHome(url).then(res => {
                    setLoading(true)
                    setData(res.data.results)
                    setNext(res.data.next)
                    setPrev(res.data.previous)
                    console.log(res.data)
            }).catch((err)=>{
                console.log("err", err)
            })
        
    }, [url])

    console.log(prev, next)

    if (!props) return <Alert type="danger" text="Anda perlu melakukan login dengan cara klik pada navigasi Login" />
    return (
        <>
            <Alert type="success" text="Anda sudah melakukan login..." />
            <table className="table">
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Name</td>
                        <td>Height</td>
                    </tr>
                </thead>
                <tbody>
                    <tr hidden={loading}><td colSpan={3}>Mohon menunggu...</td></tr>
                    {data.map((val, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{val.name}</td>
                                <td>User {val.height}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <button type='button' onClick={() => setUrl(prev)} disabled={prev === null}>Prev</button>
            <button type='button' onClick={() => setUrl(next)} disabled={next === null}>Next</button>
        </>
    );
};

export default Home;