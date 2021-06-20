import React from 'react';
function vote(props, voteText){
    props.votedFor(voteText)
    props.newQuestion();
}
function Question(props){
    return <>
    <div className="question-with-answers">
        <div id="question">
            {props.value}
        </div>
        <div id="answers">
            <div className="answer" onClick={()=>{
                vote(props, 'a');
            }}>
                <div className="answer-image" style={{
                    backgroundImage: `url(${props.a.gif})`
                }}>
                </div>
                <div className="answer-value">
                    A) {props.a.name}
                </div>
            </div>
            <div className="answer" onClick={()=>{
                vote(props, 'b');
            }}>
                <div className="answer-image" style={{
                    backgroundImage: `url(${props.b.gif})`
                }}>
                </div>
                <div className="answer-value">
                    B) {props.b.name}
                </div>
            </div>
            <div className="answer" onClick={()=>{
                vote(props, 'c');
            }}>
                <div className="answer-image" style={{
                    backgroundImage: `url(${props.c.gif})`
                }}></div>
                <div className="answer-value">
                    C) {props.c.name}
                </div>
            </div>
            <div className="answer" onClick={()=>{
                vote(props, 'd');
            }}>
                <div className="answer-image" style={{
                    backgroundImage: `url(${props.d.gif})`
                }}></div>
                <div className="answer-value">
                    D) {props.d.name}
                </div>
            </div>
        </div>
    </div>
    </>
}   

export default Question;