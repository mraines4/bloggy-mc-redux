import React from 'react';

export default function BlogList({posts}) {
    // const listItems = Object.values(posts).map(post => <li>{post.title}</li>);
    const listItems = Object.keys(posts).map(id => {
        const theBlogPost = posts[id];
        return <li key={id}>{theBlogPost.title} - {id}</li>
    })
    return (
        <ol>
            {listItems}
        </ol>
    )
}