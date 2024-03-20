import React, { useEffect, useState } from 'react'

const FetchData = () => {

    const [jobs, setJob] = useState([]);

    const getJob = async () => {
        let data = await fetch('http://localhost:9000/jobs');
        data = await data.json();
        setJob(data);
        console.log(data);
    }

    useEffect(() => {
        getJob();
    }, [])


    return (
        <div>
            {
                jobs.map((item, index) => {
                    return(
                    <>
                        <ul key={item._id}>
                            <p >{index+1} : {item.position}</p>
                        </ul>

                    </>)
                })
            }
        </div>
    )
}

export default FetchData