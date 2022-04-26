import React, { useEffect, useState } from 'react';
import Alert from '../../components/atoms/alert';
import Button from '../../components/atoms/button';
import { getServiceHome } from '../../services/home'

const Home = (props) => {
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState("https://swapi.dev/api/people")
    const [next, setNext] = useState("")
    const [prev, setPrev] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(false)
        getServiceHome(url).then(res => {
            setLoading(true)
            setData(res.data.results)
            setNext(res.data.next)
            setPrev(res.data.previous)
        })

    }, [url])

    console.log(props)

    if (!props.isLogin) return <Alert type="danger" text="Anda perlu melakukan login dengan cara klik pada navigasi Login" />
    return (
        <>
            <Alert type="success" text="Anda sudah Login..." />
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>Height</td>
                    </tr>
                </thead>
                <tbody>
                    {!loading ?
                        <tr><td colSpan={3}>Mohon menunggu...</td></tr> :
                        data.map((val, i) => 
                                <tr key={i}>
                                    <td>{val.name}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.height}</td>
                                </tr>
                            )
                        
                    }
                </tbody>
            </table>
            <div className="btn-group">
                <Button
                    className="btn"
                    text="Prev"
                    onClick={() => setUrl(prev)} disabled={prev === null} />
                <Button
                    className="btn"
                    text="Next"
                    onClick={() => setUrl(next)} disabled={next === null} />
            </div>
        </>
    );
};

export default Home;