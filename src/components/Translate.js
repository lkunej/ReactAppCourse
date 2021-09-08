import React, {useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


const options = [


];

const Translate = ({options}) => {

  const [selected, setSelected] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <h3 className="ui header">Input:</h3>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        options={options}
        label="Select a language"
        selected={selected}
        onSelectedChange={setSelected}
      />
    <hr />
    <h3 className="ui header">Output:</h3>
    <Convert text={text} language={selected} />
    </div>
  );
};

export default Translate
