import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from './logo.svg';
import './App.css';

interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    date: string;
}

function App() {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

    useEffect(() => {
        axios.get<PortfolioItem[]>('http://localhost:5000/api/portfolio')
        .then(response => setPortfolioItems(response.data))
        .catch(error => console.error('Error fetching portfolio items:', error));
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>My Portfolio</h1>
      <VerticalTimeline>
        {portfolioItems.map(item => (
          <VerticalTimelineElement
            key={item.id}
            date={item.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default App;
