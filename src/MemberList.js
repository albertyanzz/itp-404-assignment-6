import React, { useEffect, useState } from "react";
import Avatar from './Avatar';

export default function MemberList({members, following, changeFollow}){
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        setAvatars([]);
        for (const[index, value] of members.entries()){
            const isFollowing = following.includes(value.memberID);
            if(isFollowing){
                console.log("FOLLOWING!");
            }
            setAvatars(avatars => [...avatars, <Avatar key={index} member={value} following={isFollowing} setFollow={changeFollow}></Avatar>])
        }
      }, [members, following, changeFollow]);

    return (
      <div style={{width: "50%"}}>
        {avatars}
      </div>
    );
}