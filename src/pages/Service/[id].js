import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Layout from '../../components/shared/Layout'
import SingleServiceBody from '../../components/singleService/SingleServiceBody'
import SingleServiceCover from '../../components/singleService/SingleServiceCover'
import SingleServiceHeader from '../../components/singleService/SingleServiceHeader'


function SingleService() {
    const { id } = useParams() 
    const [data, setData] = useState({})
    
    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/service/${id}`

        fetch(url).then(res => res.json()).then(data => {
            setData(data[0])
        })
    }, [id])

    return (
        <Layout className="be-single-service">
            {data && <>
                <SingleServiceHeader title={data.title} />
                <SingleServiceCover img={data.img} alt={data.title}/>
                <SingleServiceBody id={id} body={data.brief} title={data.title} price={data.cost} />
            </>}
        </Layout>
    )
}

export default SingleService
