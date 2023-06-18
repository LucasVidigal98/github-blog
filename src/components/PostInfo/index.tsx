import { ArrowLeft, ArrowSquareOut, Calendar, ChatTeardrop, GithubLogo } from 'phosphor-react';
import { Container, LinkConetnt, PostInfoFooter } from './styles';
import { useTheme } from 'styled-components';
import { formatDate } from '../../utils/date.util';


type Props = {
  title: string;
  created_at: string;
  url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function PostInfo({ title, comments, created_at, url, user }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <LinkConetnt>
        <a>
          <ArrowLeft size={14} weight="fill" color={theme?.blue} />
          <span>VOLTAR</span>
        </a>

        <a href={url} target='__blank'>
          <span>VER NO GITHUB</span>
          <ArrowSquareOut size={14} color={theme?.blue} />
        </a>
      </LinkConetnt>

      <h1>{title}</h1>

      <PostInfoFooter>
        <div>
          <GithubLogo size={18} color={theme?.['base-label']} />
          <span>{user.login}</span>
        </div>

        <div>
          <Calendar size={18} weight="fill" color={theme?.['base-label']} />
          <span>{formatDate(created_at)}</span>
        </div>

        <div>
          <ChatTeardrop size={18} weight="fill" color={theme?.['base-label']} />
          <span>{comments} comentários</span>
        </div>
      </PostInfoFooter>
    </Container>
  );
}