export const clientSecret = '67iipxDzcVZZXmNqWtcqlbC01Z8yBJ0NqmibY98uY1U';
export const clientId = 'B9pQA5myicdI_h4rhhhxSvj3aWHUfkEaU5RJzJFbJ7A';

const scope = 'public read_user read_photos write_likes';
const redirectUri = 'http://localhost:3000/auth';

const params = new URLSearchParams({
  client_id: clientId,
  redirect_uri: encodeURI(redirectUri),
  response_type: 'code',
  scope,
});

export const authString = `https://unsplash.com/oauth/authorize?${params.toString()}`;

export const getSecret = () => {
  if (location.pathname.includes('/auth')) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const secret = params.get('code');

    if (secret) {
      return secret;
    }
  }
};

export const prepareTokenRequest = () => ({
  client_id: clientId,
  client_secret: clientSecret,
  redirect_uri: redirectUri,
  grant_type: 'authorization_code',
});
