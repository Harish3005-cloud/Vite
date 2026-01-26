import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const USERNAME = 'Harish3005-cloud';

export const fetchGitHubStats = async () => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      axios.get(`${GITHUB_API_BASE_URL}/users/${USERNAME}`),
      axios.get(`${GITHUB_API_BASE_URL}/users/${USERNAME}/repos?per_page=100`)
    ]);

    const userData = userResponse.data;
    const repos = reposResponse.data;

    // Get events for commit counting
    let allEvents = [];
    let page = 1;
    let hasMore = true;
    
    while (hasMore && page <= 3) { // Limit to first 3 pages to avoid rate limiting
      const eventsResponse = await axios.get(`${GITHUB_API_BASE_URL}/users/${USERNAME}/events?page=${page}&per_page=100`);
      if (eventsResponse.data.length === 0) {
        hasMore = false;
      } else {
        allEvents = allEvents.concat(eventsResponse.data);
        page++;
      }
    }

    // Calculate commits in current year
    const currentYear = new Date().getFullYear();
    const currentYearCommits = allEvents.filter(event => {
      const eventDate = new Date(event.created_at);
      return event.type === 'PushEvent' && eventDate.getFullYear() === currentYear;
    }).reduce((total, event) => {
      return total + (event.payload.commits ? event.payload.commits.length : 0);
    }, 0);

    // If no commits found for current year, count all push events as a fallback
    const totalPushEvents = allEvents.filter(event => event.type === 'PushEvent').length;
    const commitCount = currentYearCommits > 0 ? currentYearCommits : totalPushEvents;

    // Calculate pull requests
    const pullRequests = allEvents.filter(event => event.type === 'PullRequestEvent').length;

    // Calculate projects (public repos, excluding forks)
    const projects = repos.filter(repo => !repo.fork).length;

    return {
      commits: commitCount || 112, // fallback to current value
      repositories: userData.public_repos,
      pullRequests: pullRequests || 13,
      projects: projects || 5
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    // Return fallback values
    return {
      commits: 112,
      repositories: 23,
      pullRequests: 13,
      projects: 5
    };
  }
};
