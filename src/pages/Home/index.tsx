import { useEffect, useState } from "react";
import { IssueCard } from "../../components/IssueCard";
import { Profile } from "../../components/Profile";
import { Container, HomeContent, Issues, SearchForm } from "./styles";
import { api, githubEndpoints } from "../../lib/api";
import { useNavigate } from "react-router-dom";

const userName = 'LucasVidigal98';
const repo = 'github-blog';

type IssuesInfo = {
  title: string;
  id: number;
  body: string;
  created_at: string;
  number: number;
}

export function Home() {
  const [searchText, setSearchText] = useState('');
  const [total, setTotal] = useState(0);
  const [issues, setIssues] = useState<IssuesInfo[]>([]);

  const navigate = useNavigate();

  async function getIssues(q?: string) {
    const endpoint = githubEndpoints.searchIssue
      .replace('${texto}', q || '')
      .replace('${username}', userName)
      .replace('${repo}', repo);

    try {
      const response = await api.get(endpoint);

      setIssues(response.data.items);
      setTotal(response.data.total_count);
    } catch (error) {
      console.log(error)
    }
  }

  function goToPost(id: number) {
    navigate(`/post/${id}`);
  }

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <Container>
      <Profile />

      <HomeContent>
        <SearchForm>
          <div>
            <h6>Publicações</h6>

            <span>{total} publicações</span>
          </div>

          <input type="text" placeholder="Buscar conteúdo" />
        </SearchForm>

        <Issues>
          {
            issues.map(({ id, body, title, created_at, number }) => (
              <IssueCard
                key={id}
                body={body}
                created_at={created_at}
                postId={id}
                title={title}
                onClick={() => goToPost(number)}
              />
            ))
          }
        </Issues>
      </HomeContent>

    </Container>
  );
}