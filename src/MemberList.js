import React, { useEffect, useState } from "react";
import Avatar from './Avatar';

export default function MemberList({members, following, changeFollow}){
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        setAvatars([]);
        for (const[index, value] of members.entries()){
            setAvatars(avatars => [...avatars, <Avatar key={index} member={value} following={following} setFollow={changeFollow}></Avatar>])              
        }
      }, [members, following, changeFollow]);

    return (
      <div style={{width: "50%"}}>
        {avatars}
      </div>
    );
}