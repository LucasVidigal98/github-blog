import { useParams } from 'react-router-dom';
import { Container, PostContent } from './styles';
import { api, githubEndpoints } from '../../lib/api';
import { useEffect, useState } from 'react';
import { PostInfo } from '../../components/PostInfo';

const userName = 'LucasVidigal98';
const repo = 'github-blog';

type Post = {
  title: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  },
  body: string;
}

export function Post() {
  const [post, setPost] = useState<Post>({} as Post);

  const params = useParams();

  async function getPost() {
    const endpoint = githubEndpoints.getPost
      .replace('${username}', userName)
      .replace('${repo}', repo)
      .replace('${issue}', params.id as string);

    try {
      const response = await api.get(endpoint);

      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <PostInfo
        title={post.title}
        comments={post.comments}
        created_at={post.created_at}
        url={post.html_url}
        user={post.user}
      />

      <PostContent>
        <p>
          {post.body}
        </p>
      </PostContent>
    </Container>
  );
}