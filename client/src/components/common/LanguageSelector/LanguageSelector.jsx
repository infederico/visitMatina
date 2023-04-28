import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setLanguage } from '../../../redux/languageSlice';

import styles from './LanguageSelector.module.css'

const LanguageSelector = () => {

    const dispatch = useDispatch();
    const language = useSelector(state => state.language.selected)

    const handleOnChange = (event) => {
        dispatch(setLanguage(event.target.value))
    };

    return (
        <div>
            <select value={language} onChange={handleOnChange}>
                <option value='es'>Español</option>
                <option value='en'>English</option>
                <option value='fr'>Français</option>
            </select>
        </div>
    );
};

export default LanguageSelector;