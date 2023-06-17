import { useEffect, useState } from "react";
import { IssueCard } from "../../components/IssueCard";
import { Profile } from "../../components/Profile";
import { Container, HomeContent, Issues, SearchForm } from "./styles";
import { api, githubEndpoints } from "../../lib/api";

const userName = 'LucasVidigal98';
const repo = 'github-blog';

type IssuesInfo = {
  title: string;
  id: number;
  body: string;
  created_at: string;
}

export function Home() {
  const [searchText, setSearchText] = useState('');
  const [total, setTotal] = useState(0);
  const [issues, setIssues] = useState<IssuesInfo[]>([]);

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
            issues.map(({ id, body, title, created_at }) => (
              <IssueCard
                key={id}
                body={body}
                created_at={created_at}
                id={id}
                title={title}
              />
            ))
          }
        </Issues>
      </HomeContent>

    </Container>
  );
}