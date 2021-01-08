import React, { useState } from 'react';

class HelloWorld extends React.Component{
    render(){
        return (
            <h1 onClick>Hello, {this.props.name} </h1>
        )
    }
}

export default HelloWorld;