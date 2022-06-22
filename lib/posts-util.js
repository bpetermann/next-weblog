import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const categories = [
  { id: 1, name: 'Lifestyle', image: 'lifestyle.png' },
  { id: 2, name: 'Science', image: 'science.png' },
  { id: 3, name: 'Philosophy', image: 'philosophy.png' },
];

const postsDataDirectory = path.join(process.cwd(), 'data', 'posts');

const getPostData = (fileName) => {
  const filePath = path.join(postsDataDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const postData = { data, content };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDataDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getSinglePost = (postId) => {
  const allPosts = getAllPosts();

  const singlePost = allPosts.find((post) => post.data.id === postId);
  return singlePost;
};
