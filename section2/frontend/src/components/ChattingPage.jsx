import React, { useState } from 'react'

const ChattingPage = () => {

    const [chatpage, setchatpage] = useState([])
    const addMessage = (e) => {
        //console.log(e.code);
        if (!e.target.value) return;
        if (e.code == 'Enter') {
            console.log(e.target.value.trim());
            setchatpage([...chatpage, { text: e.target.value, completed: false }]);
            e.target.value = " "
            console.log(chatpage);
        }
    };
    
    return (
        <div>
            <div className='container'>
                <p className='display-4  fw-bold text-center'>Chat Page</p>
                <hr />
                <div className='card'>
                    <div className='card-header'>
                        <input
                            onKeyDown={addMessage}
                            className='form-control' placeholder='Message' />
                    </div>
                    {/* <div className='card-body'  style =  {{height : 70vh; overflow: auto}}>

                    </div> */}
                    </div>
                </div>
            </div>
        )    
  }

export default ChattingPage;