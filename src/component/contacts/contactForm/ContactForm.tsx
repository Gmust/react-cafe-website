import React, {useEffect} from 'react';
import './contactForm.css';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsSent} from "../../../store/contactsSlice";
import {useSendQuestionMutation} from "../../../services/contactsApi";
import {useForm} from "react-hook-form";


/*const ContactForm = () => {

    const [sendQuestion, {isError:isSentError,isLoading:isSending}] = useSendQuestionMutation()

    const {isSent, email, textVal} = useAppSelector(state => state.contacts)
    const dispatch = useAppDispatch();

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.currentTarget.value));
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setTextVal(e.currentTarget.value));
    }

    const handleSendBtn = async (contact: { email: string, textVal: string }) => {
        if (isSentError) {
            alert('Some error occurred!')
        }
            // @ts-ignore
            await sendQuestion(contact)
            dispatch(setIsSent(true))
            dispatch(setEmail(''))
            dispatch(setTextVal(''))
            setTimeout(() => {
                dispatch(setIsSent(false))
            }, 3000)
    }


    return (
        <form className='form'>
            <h1>
                Have any questions?
                Fill out form and we will answer!
            </h1>

            <div className='email-input'>
                <label>Email: </label>
                <input value={email} onChange={e => handleEmailInput(e)} placeholder='expample@gmail.com'/>
            </div>

            <div className='text-input'>
                <label>Your question:</label>
                <br/>
                <textarea value={textVal} onChange={e => handleTextChange(e)} placeholder='Type your question here...'/>
            </div>

            <button onClick={(e) => {
                e.preventDefault();
                handleSendBtn({email, textVal});
            }} className='sendBtn-style'>Send!
            </button>
            {isSending? <div className='form-preloader-wrapper'/> : null}
            {isSent? <div className='successSend'>Thank you, we will answer your email soon!</div> : ''}
        </form>
    );
};*/

type TContactInputs = {
    email: string,
    textArea: string
}

const ContactForm = () => {

    const dispatch = useAppDispatch();
    const {isSent} = useAppSelector(state => state.contacts)
    const [sendQuestion, {isError: isSentError, isLoading: isSending, isSuccess}] = useSendQuestionMutation()
    const {reset, register, handleSubmit, formState: {errors, isValid}} = useForm<TContactInputs>({mode: 'onBlur'})


    const onContactSubmit = async (data: any) => {
        if (isSentError) {
            alert('Some error occurred!')
        }
        await sendQuestion(data)
        dispatch(setIsSent(true))
        setTimeout(() => {
            dispatch(setIsSent(false))
        }, 3000)
        isSuccess ? alert('Error') : reset();
    }


    return (
        <form onSubmit={handleSubmit(onContactSubmit)} className='form'>
            <h1>
                Have any questions?
                Fill out form and we will answer!
            </h1>

            <div className='email-input'>
                <label>Email: </label>
                <input type='email' placeholder='Enter your email...' {...register('email',
                    {
                        required: true,
                        pattern: /^\S+@\S+\.\S+$/
                    })}/>
                {errors.email?.type === 'required' && <p className='error-style'>This field is required</p>}
                {errors.email && <p className='error-style'>Enter correct email, please</p>}
            </div>

            <div className='text-input'>
                <textarea {...register('textArea', {required: true, minLength: 10})}/>
                {errors.textArea && <p className='error-style'>It needs to be at least 10 symbols</p>}
            </div>

            <input type='submit' value='Send!' disabled={isValid ? false : true}
                   className={isValid ? 'sendBtn-style' : 'notValid-sendBtn-style'}/>
            {isSending ? <div className='form-preloader-wrapper'/> : null}
            {isSent ? <div className='successSend'>Thank you, we will answer your email soon!</div> : ''}
        </form>
    )

}

export default ContactForm;
