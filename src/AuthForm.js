import react from 'react'
import { useState } from 'react';
export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    
    return (
    
    
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""}onClick={() => setIsLogin(true)}
                    >login </button>
                    <button className={!isLogin ? 'active' : ""}onClick={() => setIsLogin(false)}
                       > Register
                    </button>
                </div>
            </div>
        </div>
    );
}