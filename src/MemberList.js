import React, { useEffect, useState } from "react";
import { fetchFollows } from './api';
import Avatar from './Avatar';

export default function MemberList({members, changeFollow}){
    const [avatars, setAvatars] = useState([]);
    const [followIDs, setFollowIDs] = useState([]);


    useEffect(() => {
        setAvatars([]);
        fetchFollows().then((data) => {
          setFollowIDs(data.map((follow) => {
            return follow.id;
          }))
        })
        for (const[index, value] of members.entries()){
            setAvatars(avatars => [...avatars, <Avatar key={index} member={value} following={followIDs} setFollow={changeFollow}></Avatar>])              
        }
      }, [members, changeFollow]);

    return (
      <div style={{width: "50%"}}>
        {avatars}
      </div>
    );
}