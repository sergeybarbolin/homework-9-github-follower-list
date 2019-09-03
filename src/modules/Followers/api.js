export const getFollowersInfo = (apiKey, user) => (
  fetch(`https://api.github.com/users/${user}/followers?pages=1&per_page=100?access_token=${apiKey}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Error ' + response.status)
      }

      return response.json();
    })
)