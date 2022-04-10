import styled from "styled-components";
import Section from "../section/Section";
import Collections from "../collections/Collections";
function Body() {
  return (
    <Container>
      <Section />
      <Collections />
    </Container>
  );
}

export default Body;
const Container = styled.div`
  width: 100%;
`;
