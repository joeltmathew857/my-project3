import React, { useState, useEffect } from 'react';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const tweetQuote = () => {
    const tweetText = `"${quote}" - ${author}`;
    const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterLink, '_blank');
  };

  return (
    <div id="quote-box" className="flex flex-col items-center p-8">
      <div id="text" className="text-lg font-bold mb-4">
        "{quote}"
      </div>
      <div id="author" className="text-sm font-semibold mb-8">
        - {author}
      </div>
      <div className="flex">
        <button id="new-quote" className="mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={getNewQuote}>
          New Quote
        </button>
        <a id="tweet-quote" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={tweetQuote} target="_blank" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}>
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

export default QuoteMachine;
