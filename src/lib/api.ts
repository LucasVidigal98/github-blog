import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com'
});

export const githubEndpoints = {
  getUser: '/users/${username}',
  searchIssue: '/search/issues?q=${texto}repo:${username}/${repo}'
}