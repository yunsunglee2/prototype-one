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
import TeamPlayer from 'components/pages/team/teamPlayer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<App />} />

        {/* 경기 관련 페이지 */}
        <Route path="match">
          <Route index element={<Match />} />
          <Route path=":matchId" element={<MatchAbout />} />
        </Route>

        {/* 선수 관련 페이지 */}
        <Route path="player">
          <Route index element={<Player />} />
          <Route path=":playerId" element={<PlayerAbout />} />
        </Route>

        {/* 팀 관련 페이지 */}
        <Route path="team">
          <Route index element={<Team />} />
          <Route path=":teamId" element={<TeamAbout />} />
          <Route path=":teamId/player" element={<TeamPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
