import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router';
import Team from 'components/pages/team';
import Player from 'components/pages/player';
import Match from 'components/pages/match';
import MatchAbout from 'components/pages/match/matchAbout';
import PlayerAbout from 'components/pages/player/playerAbout';
import TeamAbout from 'components/pages/team/teamAbout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="match">
          <Route index element={<Match />} />
          <Route path="about" element={<MatchAbout />} />
        </Route>

        <Route path="player">
          <Route index element={<Player />} />
          <Route path="about" element={<PlayerAbout />} />
        </Route>

        <Route path="team">
          <Route index element={<Team />} />
          <Route path="about" element={<TeamAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
