import React, { useState, useEffect } from 'react';
import { fetchModalProperties } from './api';
import MemberModal from './MemberModal';
import RepoModal from './RepoModal';

export default function Avatar({ member, following, setFollow }) {
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [repoModalOpen, setRepoModalOpen] = useState(false);
    const [memberDetails, setMemberDetails] = useState();
    const [isFollowing, setIsFollowing] = useState(following.includes(member.memberID));

    function hideProfileModal(){
        setProfileModalOpen(false);
    }

    function showProfileModal(){
        setProfileModalOpen(true);
    }

    function hideRepoModal(){
        setRepoModalOpen(false);
    }

    function showRepoModal(){
        setRepoModalOpen(true);
    }

    function changeFollow(){
        setFollow(member.memberID, isFollowing);
        setIsFollowing(!isFollowing)
    }

    useEffect(() => {    
        console.log(following);    
        console.log(isFollowing);
        fetchModalProperties(member.url)
            .then((data) => {
                setMemberDetails(data);
            })
    }, [member.url], isFollowing, following);

    return (
        <>
            <div className="avatar">
                {profileModalOpen && <MemberModal onClose={hideProfileModal} member={memberDetails} login={member.login}></MemberModal>}
                {repoModalOpen && <RepoModal onClose={hideRepoModal} repos_url={member.repos_url} login={member.login}></RepoModal>}
                <p onClick={showProfileModal}>{member.login}</p>
                <img src={member.avatar_url} alt="profile" width="250" onClick={showProfileModal}></img>
                <button onClick={showRepoModal}>Repos</button>
                <button onClick={changeFollow}>{isFollowing ? "Unfollow" : "Follow"}</button>
            </div>
        </>
    );
}