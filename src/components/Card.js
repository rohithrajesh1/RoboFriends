import React from 'react';


const card=({id,email,name,username})=>{
	return(
        //<h1>Robofriends</h1>
		<div className='tc bg-light-green dib br3 pa2 ma2 grow shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200X200`} />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>

            </div>
		</div>

	);
}

export default card;