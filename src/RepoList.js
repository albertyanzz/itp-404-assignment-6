import React, { useState, useEffect} from "react";
import { fetchRepoInfo } from './api';
import Repo from './Repo';
import Loader from './Loader';

export default function RepoList( {url} ){
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setRepos([]);
        fetchRepoInfo(url).then((data) => {
            if(typeof data === "undefined"){
                return Promise.reject();
            }
            else{
                for (const[index, value] of data.entries()){
                    setRepos(repos => [...repos, <Repo key={index} repo={value}></Repo>])
                }
                setIsLoading(false);
            }
        }).catch(error => {
            setIsLoading(false);
            console.log("Unable to fetch repo info");
        });
    }, [url])

    return (
        <div>
            {isLoading && <Loader></Loader>}
            {repos}
        </div>
    )
}