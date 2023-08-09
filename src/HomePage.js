import React, { useState, useEffect } from 'react';
import translations from './translations';
import isValidDateAndTimeToRemoveChecks from './helpers';

const HomePage = () => {
    const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
    const [checkboxStatuses, setCheckboxStatuses] = useState(JSON.parse(localStorage.getItem('checkboxStatuses')) || {});
    const [views, setViews] = useState('-');
  
    // Update the selected language in the state and in localStorage
    function changeLanguage(event) {
      setLanguage(event.target.value);
      localStorage.setItem('selectedLanguage', event.target.value);
    }
  
    // Save checkbox statuses to the state and to localStorage
    function saveCheckboxStatuses(id, checked) {
      setCheckboxStatuses(prevStatuses => {
        const newStatuses = { ...prevStatuses, [id]: checked };
        localStorage.setItem('checkboxStatuses', JSON.stringify(newStatuses));
        if (localStorage.getItem('checksActivationTimestamp') === null) {
          localStorage.setItem('checksActivationTimestamp', Date.now());
        }
        return newStatuses;
      });
    }
  
    useEffect(() => {
      // Similar to the 'onload' function in your script, we can run side effects in useEffect
      fetch('https://woe9yf2lb2.execute-api.us-east-1.amazonaws.com/dev/counter?name=lionsKingdomNw')
        .then(response => response.json())
        .then(data => {
          if (data && data.value !== undefined) {
            setViews(data.value);
          }
        })
        .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
      let checksActivationTimestamp = localStorage.getItem('checksActivationTimestamp')
      if (checksActivationTimestamp !== null && isValidDateAndTimeToRemoveChecks(checksActivationTimestamp)) {
        localStorage.removeItem('checksActivationTimestamp');
        localStorage.removeItem('checkboxStatuses');
        setCheckboxStatuses({});
      }
    }, []);
  
    return (
      <div className="main">
        <div className="view-counter">
          <span>Views: </span>
          <span id="counter-value">{views}</span>
        </div>
        <div className="language-switcher">
          <select id="languageSelect" onChange={changeLanguage} value={language}>
            <option value="en">English</option>
            <option value="ua">Українська</option>
            {/* Add more options for other languages here */}
          </select>
        </div>
        <div className="title">
          <h1>{translations[language].titleText}</h1>
        </div>
        <div className="main-content">
          {Object.keys(translations[language]).map((activity, index) => index > 0 && (
            <div className="activity" key={index}>
              <span className="activity-checkbox">
                <input
                  type="checkbox"
                  id={`event-${index}`}
                  name="event"
                  value="event"
                  checked={checkboxStatuses[`event-${index}`] || false}
                  onChange={(event) => saveCheckboxStatuses(`event-${index}`, event.target.checked)}
                />
              </span>
              <span className="activity-name">{translations[language][activity]}</span>
            </div>
          ))}
        </div>
      </div>
    );
}

export default HomePage;
