import BasicTable from "../BasicTable/BasicTable";
import UsersLists from "../UsersList/UsersList";
import { Section , Container} from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Section>
        <BasicTable />
      </Section>
      <Section>
        <UsersLists />
      </Section>
    </Container>
  );
};


// https://api.instantwebtools.net/v1/passenger?&size=10 