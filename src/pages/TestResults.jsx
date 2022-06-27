import React from 'react';
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TestResults = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const TestResults = [
      { name: "MBTI", path: "/Mbti" },
      { name: "HOLLAN", path: "/Hollan" },
    ];
    const handleChange = (event) => {
      setNavLinks(event.target.value);
    };
    setNavLinks(TestResults);
  }, []);
  return (
    <div>
    <label>
            <select  >
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
              <select value={navLinks} onChange={handleChange}>
          {TestResults.map((TestResults) => (
            <option value={TestResults.value}>{TestResults.label}</option>
          ))}
        </select>
            </select>
            </label>
    </div>
  )
}

export default TestResults