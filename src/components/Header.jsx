import { useEffect, useState } from 'react';

import axios from 'axios';

const Header = ({ isAllCompleted }) => {
    const [randomQuote, setRandomQuote] = useState('');
    const RANDOM_QUOTE_URL = `https://uselessfacts.jsph.pl/random.json?language=en`;

    const fetchRandomQuote = async () => {
        const response = await axios.get(RANDOM_QUOTE_URL);
        const quote = await response.data;
        setRandomQuote(quote.text);
    };

    useEffect(() => {
        if (isAllCompleted) {
            // make api call
            fetchRandomQuote();
        }
    }, [isAllCompleted]);

    return (
        <div className="header">
            <h1>My startup progress</h1>
            {randomQuote && (
                <p className="quote">
                    <i>{randomQuote}</i>
                </p>
            )}
        </div>
    );
};

export default Header;
