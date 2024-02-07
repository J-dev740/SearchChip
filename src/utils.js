import { createClient } from 'contentful';

const client = createClient({
  // space: '5xpzpeuq39x5',
  // accessToken: 'j-XgL8nTm1qouIKSQuv7dHOyg3S8qkVTTKbuAWhHHcI',
  space: '7oo9puuj7iqt',
  accessToken: 'YhY12sA6qt2h-XslJiNtmYFWysR0vjcXNRlosSk7Tn8',
});
const client1 = createClient({
  space: '5xpzpeuq39x5',
  accessToken: 'j-XgL8nTm1qouIKSQuv7dHOyg3S8qkVTTKbuAWhHHcI',
  // space: '7oo9puuj7iqt',
  // accessToken: 'YhY12sA6qt2h-XslJiNtmYFWysR0vjcXNRlosSk7Tn8',
});

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async (type='blogPost') => {
    // console.log('getting content types.....')
    // console.log(client.getContentTypes)
  const response = await client.getEntries({
    content_type: type.toString(),
  });
  // console.log('response------------->')
  // console.log(response.items)
  return response.items;
};
export const getBlogPosts1 = async (type='blogPost') => {
  // console.log('getting content types.....')
  // console.log(client.getContentTypes)
const response = await client1.getEntries({
  content_type: type.toString(),
});
// console.log('response------------->')
// console.log(response.items)
return response.items;
};
