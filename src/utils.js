import { createClient } from 'contentful';

const client = createClient({
  space: '5xpzpeuq39x5',
  accessToken: 'j-XgL8nTm1qouIKSQuv7dHOyg3S8qkVTTKbuAWhHHcI',
});

// Retrieve the list of blog posts from Contentful
const getBlogPosts = async (type='blogPosts') => {
    // console.log('getting content types.....')
    // console.log(client.getContentTypes)
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export default getBlogPosts;