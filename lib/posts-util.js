import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export const getLatestPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.latest);
  return featuredPosts;
};
