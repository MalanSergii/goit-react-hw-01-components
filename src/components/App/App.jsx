import Profile from "components/Profile";
import Statistics from "components/Statistics";

import userData from "../Data/userData.json";
import statisticsData from "../Data/statisticsData.json";

import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Profile {...userData}/>
      <Statistics title="Upload stats" stats={statisticsData} />
      
    </Container>
  );
};

