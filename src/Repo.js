import React from 'react';

export default function Repo({ repo }) {

    return(
        <>
            <div>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                <p>{repo.description}</p>
            </div>
        </>
    )
}