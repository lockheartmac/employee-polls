import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "./App.scss";
import LogIn from "./LogIn";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import NotFound from "./404";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import NewPoll from "./NewPoll";

function App({ loading, dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Fragment>
      <Nav />
      <div className="container is-fluid my-5">
        <Routes>
          {loading ? (
            <Fragment>
              <Route path="/" element={<LogIn />} />
              <Route path="/*" element={<NotFound />} />
            </Fragment>
          ) : (
            <Fragment>
              <Route path="/" element={<Dashboard />} exact />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/new" element={<NewPoll />} />
              <Route path="/question/:id" element={<Poll />} />
              <Route path="*" element={<NotFound />} />
            </Fragment>
          )}
        </Routes>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
