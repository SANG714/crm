import React from 'react'
import PropTypes from 'prop-types'
import './MessageHistory.style.css'

const MessageHistory = ({msg}) => {
    if (!msg) return null;
    console.log(msg)
  return msg.map((row, i)=>
    <div key = {i}className='message-history mt-3'>
        <div className="send fw-bold text-secondary">
            <div className="sender">{row.messageBy}</div>
            <div className="date">{row.date}</div>
        </div>
        <div className="message">{row.message}</div>
    </div>
    )
  
}
MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired
}
export default MessageHistory
