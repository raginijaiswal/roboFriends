import React from 'react';

const card= ()=>{
    return(
        <wrapper>
            <h1>Robo Friends</h1>
            <div className='bg-washed-red dib br3 pa3 ma3 grow bw2 shadow-5'>
                <img alt='robots' src='https://robohash.org/random?400*400'/>
                <div>
                    <h2>Jane Doe</h2>
                    <p>janedoe@gmail.com</p>
                </div>
            </div>
        </wrapper>
        

    )
}

export default card;