import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/common/Menu";
import RankingPage from "./components/ranking/RankingPage";
import HistoryPage from "./components/history/HistoryPage";
import AnnouncementsPage from "./components/announcements/AnnouncementsPage";
import InvitesPage from "./components/invites/InvitesPage";
import ScoresPage from "./components/admin/scores/ScoresPage";
import PartiesPage from "./components/admin/parties/PartiesPage";
import UsersPage from "./components/admin/users/UsersPage";
import ProfilePage from "./components/profile/ProfilePage";

function App() {
  return (
    <Router>
      <Container fluid id="page">
        <Menu />
        <Switch>
          <Route path="/ranking">
            <RankingPage />
          </Route>
          <Route path="/history">
            <HistoryPage />
          </Route>
          <Route path="/announcements">
            <AnnouncementsPage />
          </Route>
          <Route path="/invites">
            <InvitesPage />
          </Route>
          <Route path="/admin/scores">
            <ScoresPage />
          </Route>
          <Route path="/admin/parties">
            <PartiesPage />
          </Route>
          <Route path="/admin/users">
            <UsersPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/">
            <RankingPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
