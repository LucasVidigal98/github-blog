import { Container } from './styles';

type Props = {
  title: string;
  id: number;
  body: string;
  created_at: string;
}

export function IssueCard({ title, body, created_at, id }: Props) {
  function formatDate(date: string) {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
  }

  return (
    <Container>
      <div>
        <h6>{title}</h6>
        <span>{formatDate(created_at)}</span>
      </div>

      <p>
        {body}
      </p>
    </Container>
  );
}