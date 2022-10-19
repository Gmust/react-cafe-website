import React, {useState} from 'react';
import './info.css';
import CopyBtn from "../../../utils/copyButton/CopyBtn";

const Info = () => {

    const [tf, setTf] = useState<string>("505-500-505");
    const [email, setEmail] = useState<string>("testemail@gmail.com");


    return (
        <div className='info'>
            <h3>Telephone:<b className='info-item'>505-500-505</b>
             <CopyBtn value={tf} fn={setTf} clipBoardItem={"505-500-505"} />
            </h3>

            <br/>

            <h3>Email: <b className='info-item'>testemail@gmail.com</b>
                <CopyBtn value={email} fn={setEmail} clipBoardItem={"testemail@gmail.com"} />
            </h3>
        </div>
    );
};

export default Info;