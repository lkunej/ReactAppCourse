import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Search = () => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const baseUrl = "https://en.wikipedia.org/w/api.php?"
      const { data } = await axios.get(baseUrl, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        },
      });

      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if(term){
        search();
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  var renderedResults = [];
  if(results){
     renderedResults = results.map((result) => {
      return (
        <div key={result.pageid} className="item">
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}>
              Go
            </a>
          </div>
          <div className="content">
            <div className="header">
              {result.title}
            </div>

          </div>
        </div>
      );
    });
  }


  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
