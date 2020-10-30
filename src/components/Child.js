import React from 'react'
import Moment from 'react-moment';

function Child(){
    return(
        <div>
            <Moment toNow style={{float:"right",paddingRight:"15px"}}>2020-09-03</Moment>
        </div>
    )
}

export default Child