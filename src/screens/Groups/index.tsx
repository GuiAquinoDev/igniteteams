import { Header } from "@components/Header";
import { HightLight } from "@components/HighLight";
import { Container, Title } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Title>Groups</Title>
      <HightLight title="Turmas" subtitle="jogue com a sua turma"/>
    </Container>
  );
}
