import React, {useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard";
import {HiOutlineClipboardCopy} from "react-icons/hi";
import './copyBtn.css'

type TCopyBtnProps ={
    value: string | undefined,
    fn: (clipBoardItem:string)=> void,
    clipBoardItem: string
}

const CopyBtn = ({value,fn,clipBoardItem}:TCopyBtnProps) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    return (
        <>
            <CopyToClipboard
                // @ts-ignore
                text={value}>
                <HiOutlineClipboardCopy
                    style={{cursor: 'pointer'}}
                    onClick={() => {
                        fn(clipBoardItem);
                        setIsCopied(true);
                        setTimeout(()=>{ setIsCopied(false)},3000)
                    }}
                />
            </CopyToClipboard>
            {isCopied? <div className= "copySuccess">Copied!</div>
                : null }
        </>

    );
};

export default CopyBtn;