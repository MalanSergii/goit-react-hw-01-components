import Profile from "components/Profile";
import Statistics from "components/Statistics";
import FriendsList from "components/FriendsList";
import TransactionHistory from "components/TransactionHistory"

import userData from "../Data/userData.json";
import statisticsData from "../Data/statisticsData.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json"

import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Profile {...userData}/>
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendsList friends={friends} />
      <TransactionHistory history={transactions}/>
    </Container>
  );
};

