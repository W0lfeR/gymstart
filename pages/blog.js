
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/style.css';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

const BlogPage = ({ posts }) => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (index) => {
    setPage(index);
  };

  const PaginatedPosts = posts.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <Head>
        <title>Blog | My Next.js Blog</title>
        <meta name="description" content="My Next.js Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="container-space-blog">
          <div className="articleList">
            {PaginatedPosts.map((post, index) => (
              <Link href={'/blog/' + post.slug} passHref key={index}>
                <a className="item">
                  <div className="thumbnail">
                    <Image src={post.frontmatter.thumbnailUrl} alt="thumbnail" className="thumbnail-image" loading="eager"/>
                  </div>
                  <h2 className="title">{post.frontmatter.title}</h2>
                  <p className="description">{post.frontmatter.description}</p>
                  <p className="date">{post.frontmatter.date}</p>
                </a>
              </Link>
            ))}
          </div>
          <Pagination length={totalPages} callBackResult={handleClick} />
        </div>
      </main>
    </>
  );
};

BlogPage.propTypes = {
  posts: PropTypes.array.isRequired,
};






export const getStaticProps = async () => {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data } = matter(markdownWithMeta)

    return {
      frontmatter: data,
      slug: filename.split('.')[0],
    }
  })

  return {
    props: { posts },
  }
}

export default BlogPage;


