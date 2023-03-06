import { Container, SubTitle, Title } from "./style";

type Props = {
    title: string;
    subtitle: string;
}

export function HightLight({title, subtitle}: Props) {
    return (
        <Container>
            <Title>{ title }</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    )
}