export const getUserInfo = (apiKey, user) => (
  fetch(`https://api.github.com/users/${user}?access_token=${apiKey}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Error ' + response.status)
      }

      return response.json();
    })
)
