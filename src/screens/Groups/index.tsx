import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HightLight } from "@components/HighLight";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container} from "./styles";

export function Groups() {

  const [groups, setGroups] = useState<string[]>(['Galera da Rocket'])

  return (
    <Container>
      <Header />
      <HightLight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />

      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}
