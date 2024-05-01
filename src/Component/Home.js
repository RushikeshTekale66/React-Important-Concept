import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/noteContext'

const Home = () => {

    const a = useContext(noteContext);

    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>This is your Home {a.state.name} & I am in {a.state.class}</h1>
        </div>
    )
}

export default Home