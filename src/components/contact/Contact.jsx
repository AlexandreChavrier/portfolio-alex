import React, { useState } from 'react';
import "./contact.css";

function Contact() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;  
        form.submit();

        setEmail('');
        setMessage('');
    };

    return (
        <section className="contact container section">
            <h2 className="section__title">Contact</h2>
            <div id="contact">
                <form action="https://formspree.io/f/xwpejlzz" method="POST" onSubmit={handleSubmit}>
                    <label>
                        Your email:
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </label>
                </form>
                <button className="btn" type="submit">Send</button>
            </div>
        </section>
    )
}

export default Contact

// https://formspree.io/f/xwpejlzz

// <div className="flex items-center self-center justify-center">
//     <div className='flex flex-col max-w-[600px] w-full'>
//         <form action="https://formspree.io/f/xwpejlzz" method="POST" className='flex flex-col max-w-[600px] w-full'>
//             <input className='bg-gray-100 p-2' type="text" placeholder='Nom' name='name' />
//             <input className='my-4 p-2 bg-gray-100' type="email" placeholder='Email' name='email' />
//             <textarea className='bg-gray-100 p-2' name="message" rows="10" placeholder='Message'></textarea>
//             <button type="submit" className='border-black border-2 hover:text-black hover:bg-primary-green hover:border-primary-green px-4 py-3 my-8 mx-auto flex items-center'>Envoyer</button>
//         </form>
//     </div>
// </div>