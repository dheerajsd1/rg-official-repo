'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FiRefreshCw } from 'react-icons/fi';
import styles from './HelpBot.module.css';

const HelpBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [typingText, setTypingText] = useState('');
    const chatBodyRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIcon(true);
        }, 3400);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const greeting = "Hello! How may I help you today?";
        const showGreeting = async () => {
            setIsTyping(true);
            setTypingText('');
            await new Promise((r) => setTimeout(r, 600));
            let currentText = '';
            for (let i = 0; i < greeting.length; i++) {
                currentText += greeting[i];
                setTypingText(currentText);
                await new Promise((r) => setTimeout(r, 20));
            }
            setMessages([{ sender: 'bot', text: greeting }]);
            setIsTyping(false);
            setTypingText('');
        };

        if (isOpen && messages.length === 0) {
            showGreeting();
        }
    }, [isOpen]);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages, isTyping, typingText]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { sender: 'user', text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);
        setTypingText('');

        try {
            const response = await fetch(`https://server-wny7.onrender.com/ask`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });

            const fullReply = await response.text();
            await new Promise((r) => setTimeout(r, 1000));

            let currentText = '';
            for (let i = 0; i < fullReply.length; i++) {
                currentText += fullReply[i];
                setTypingText(currentText);
                await new Promise((r) => setTimeout(r, 15));
            }

            const cleanReply = fullReply.replace('__REDIRECT_TO_GET_IN_TOUCH__', '').trim();
            setMessages((prev) => [...prev, { sender: 'bot', text: cleanReply }]);

            // Auto-scroll to the GetInTouch section if needed
            if (fullReply.includes('__REDIRECT_TO_GET_IN_TOUCH__')) {
                setTimeout(() => {
                    const section = document.getElementById('get-in-touch');
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 1000);
            }

        } catch (error) {
            console.error('Error fetching bot response:', error);
            setMessages((prev) => [
                ...prev,
                { sender: 'bot', text: 'There was an error processing your request.' },
            ]);
        } finally {
            setTypingText('');
            setIsTyping(false);
        }
    };

    const resetChat = () => {
        setMessages([{ sender: 'bot', text: 'Hello! How may I help you today?' }]);
        setIsTyping(false);
        setTypingText('');
    };

    return (
        <>
            {!isOpen && showIcon && (
                <div
                    className={`${styles.helpBotContainer} ${!hasAnimated ? styles.animatedScaleUp : ''}`}
                    onAnimationEnd={() => setHasAnimated(true)}
                >
                    <div className={styles.avatarWrapper}>
                        <img
                            src="/Michelle (Site Bot).png"
                            alt="Michelle Avatar"
                            className={styles.avatarImage}
                        />
                    </div>
                    <button
                        className={styles.helpBotButton}
                        aria-label="How may I help you?"
                        onClick={() => setIsOpen(true)}
                    >
                        <span className={styles.helpBotText}>How may I help you?</span>
                        <span className={styles.helpBotIcon}>↑</span>
                    </button>
                </div>
            )}

            <div className={`${styles.chatPanel} ${isOpen ? styles.open : ''}`}>
                <div className={styles.chatHeader}>
                    <p>Ask Michelle</p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <button onClick={resetChat} title="Refresh Chat" className={styles.closeButton}>
                            <FiRefreshCw size={18} />
                        </button>
                        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>×</button>
                    </div>
                </div>

                <div className={styles.chatBody} ref={chatBodyRef}>
                    {messages.map((msg, i) => (
                        <div key={i} className={`${styles.message} ${styles[msg.sender]}`}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {msg.text}
                            </ReactMarkdown>
                        </div>
                    ))}

                    {isTyping && !typingText && (
                        <div className={`${styles.message} ${styles.bot}`}>
                            <div className={styles.typing}>
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}

                    {isTyping && typingText && (
                        <div className={`${styles.message} ${styles.bot}`}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {typingText}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>

                <div className={styles.chatInput}>
                    <input
                        type="text"
                        value={input}
                        placeholder="Type your message..."
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    );
};

export default HelpBot;