import React, { useState, useEffect } from "react";
import "./App.css";



function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();

      const i = Math.floor(Math.random() * 10);


      setQuote({ text: data.quotes[i].quote, author: data.quotes[i].author })
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <div className="quote-container">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">- {quote.author || "Unknown"}</p>
        <button onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
