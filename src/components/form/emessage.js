import React from 'react'

function Emessage(props) {
    if(props.message) {
        return (
          <div className="error">{props.message}</div>
        );
      }
    
      return <></>
}

export default Emessage
