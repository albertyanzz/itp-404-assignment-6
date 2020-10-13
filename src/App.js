import React, { useState, useEffect } from 'react';
import { fetchFollows, fetchMembers, removeFollowing, saveFollowing } from './api';
import './App.css';
import MemberList from './MemberList';

function App() {
  const [members, setMembers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followIDs, setFollowIDs] = useState([]);

  function changeFollow(id, remove){
    if(remove){  
      removeFollowing(id)
      .then(() => {
        const filteredFollowing = following.filter((follow) => {
          return follow.id !== id;
        });

        setFollowing(filteredFollowing);
      });
    }
    else{
      saveFollowing({
        id,
      })
        .then((newFollow) => {
          setFollowing(following.concat(newFollow.id));
        });
    }
  }


  useEffect(() => {
    setMembers([]);
    Promise.all([fetchFollows(), fetchMembers()])
      .then(([followingData, data]) => {
        setFollowing(followingData);
        setMembers(data);
        setFollowIDs(followingData.map((follow) => {
          return follow.id;
        }))
      });
  }, []);

  return (
    <MemberList members={members} following={followIDs} changeFollow={changeFollow}></MemberList>
  );
}

export default App;
