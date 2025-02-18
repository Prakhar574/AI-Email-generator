import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = ({ token }) => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [attachments, setAttachments] = useState([]);

    const handleSendEmail = async () => {
        try {
            await axios.post('http://localhost:5000/api/emails/send', { to, subject, body, attachments }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Email sent!');
        } catch (error) {
            alert('Failed to send email! ' + error.response.data);
        }
    };

    return (
        <div>
            <h2>Send Email</h2>
            <input value={to} onChange={e => setTo(e.target.value)} placeholder="Recipient" />
            <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
            <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Email Body"></textarea>
            <button onClick={handleSendEmail}>Send Email</button>
        </div>
    );
};

export default EmailForm;