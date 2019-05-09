import React from 'react';

export default function BlogList({posts}) {
    const listItems = Object.values(posts).map(post => <li>{post.title}</li>);
    console.log(posts);
    return (
        <ol>
            {listItems}
        </ol>
    )
}