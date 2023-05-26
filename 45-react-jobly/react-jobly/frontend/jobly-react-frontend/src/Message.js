import './Message.css';

const Message = ({ msgObj }) => {

  return (
      <div className={`Message-${msgObj.class}`}>
        <p>{msgObj.msg}</p>
      </div>
  );
}

export default Message;
