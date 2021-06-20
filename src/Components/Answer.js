import React, {useEffect} from 'react';

function Answer(props){
    return <div className="answer" onClick = {props.onClick}>
        {props.name}
    </div>
}

export default Answer;