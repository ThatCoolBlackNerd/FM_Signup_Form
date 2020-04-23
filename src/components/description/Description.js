import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
    render() {
        return (
            <section>
                <h1 className='title'>Learn to Code</h1>
                <h1 className="title">by watching others</h1>
                    <h3 className='message'>
                        See how experienced developers solve problems in real time.
                        Watching scripted tutorials are great but understanding how
                        developers think is invaluable. 
                    </h3>
            </section>
        )
    }
}

export default Description
