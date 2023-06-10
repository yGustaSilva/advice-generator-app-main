import { useState } from 'react';
import { getAdvice } from '../services/Advice/getAdvice';

import mobile_divider from '../img/mobile_divider.svg';
import desktop_divider from '../img/desktop_divider.svg';
import dice from '../img/dice.svg';

import '../css/Advice.css';

export const Advice = () => {
    const [advice, setAdvice] = useState('');
    const [id, setId] = useState('');
    return (
        <section className="advice-container">
            <h3 className="title">{id && `ADVICE #${id}`}</h3>
            <p className="advice">{advice && `"${advice}"`}</p>
            <picture className='divider'>
                <source media='(max-width: 375px)' srcSet={mobile_divider} />
                <img src={desktop_divider} alt="Divisor" />
            </picture>
            <button className="new-advice" onClick={async () => {
                const data = await getAdvice();
                setAdvice(() => data.advice);
                setId(() => data.id);
            }} >
                <img src={dice} alt="Ícone de dado" />
            </button>
        </section>
    )
}