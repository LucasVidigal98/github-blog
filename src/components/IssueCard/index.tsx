import { HtmlHTMLAttributes } from 'react';
import { Container } from './styles';
import { formatDate } from '../../utils/date.util';

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  postId: number;
  body: string;
  created_at: string;
}

export function IssueCard({ title, body, created_at, postId: id, ...rest }: Props) {
  return (
    <Container {...rest}>
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