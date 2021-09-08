import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
  title: 'What is React?',
  content: 'React is a frontend javascript framework'
  },
  {
  title: 'Why use React?',
  content: 'React is a a favorite JS lib among engineers'
  },
  {
  title: 'How do you use React?',
  content: 'You use React by creating components'
  }
];

const options = [
  {
  label: 'The color red',
  value: 'red'
  },
  {
  label: 'The color green',
  value: 'green'
  },
  {
  label: 'The color blue',
  value: 'blue'
  }
];

const languages = [
  {
  label: 'Afrikaans',
  value: 'af'
  },
  {
  label: 'Arabic',
  value: 'ar'
  },{
  label: 'Hindi',
  value: 'hi'
  },
];

export default () => {

  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true);
  const [activeTab, setActiveTab] = useState("Accordion");

  return(
      <div>
        <Header />
        <Route path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
          {showDropdown ?
            <Dropdown
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
              label="Select a color"
              text="Color preview"/>
            :
            null
          }
        </Route>
        <Route path="/translate">
          <Translate options={languages} />
        </Route>
        <div></div>
      </div>

  );
};
