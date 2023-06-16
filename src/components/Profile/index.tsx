import { Buildings, GithubLogo, Link, Users } from 'phosphor-react';
import { Avatar, Container, ProfileInfoConatiner, ProfileInfoConatinerFooter, ProfileInfoConatinerHeader } from './styles';
import { useTheme } from 'styled-components';
import { api, githubEndpoints } from '../../lib/api';
import { useEffect, useState } from 'react';

const userName = 'LucasVidigal98';

type UserProfile = {
  avatar_url: string;
  bio: string;
  company: string | null;
  followers: number;
  name: string;
  html_url: string;
  login: string;
}

export function Profile() {
  const [profile, setProfile] = useState<UserProfile>({} as UserProfile);

  const theme = useTheme();

  async function getUserInfo() {
    const endpoint = githubEndpoints.getUser.replace('${username}', userName);

    try {
      const response = await api.get(endpoint);

      if (response.data) {
        setProfile(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <Container>
      <Avatar src={profile.avatar_url} alt={profile.name} />

      <ProfileInfoConatiner>
        <ProfileInfoConatinerHeader>
          <span>{profile.name}</span>

          <a href={profile.html_url} target='__blank'>
            <span>GITHUB</span>
            <Link size={14} color={theme?.blue} />
          </a>

        </ProfileInfoConatinerHeader>

        <p>
          {profile.bio}
        </p>

        <ProfileInfoConatinerFooter>

          <div>
            <GithubLogo size={18} color={theme?.['base-subtile']} />
            <span>{profile.login}</span>
          </div>

          <div>
            <Buildings size={18} weight="fill" color={theme?.['base-subtile']} />
            <span>{profile.company || '-'}</span>
          </div>

          <div>
            <Users size={18} weight="fill" color={theme?.['base-subtile']} />
            <span>Seguidores {profile.followers}</span>
          </div>
        </ProfileInfoConatinerFooter>
      </ProfileInfoConatiner>
    </Container>
  );
}