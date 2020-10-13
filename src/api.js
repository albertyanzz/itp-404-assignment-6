export function fetchMembers() {      

    return fetch("https://api.github.com/orgs/emberjs/members", { //emberjs repo
        headers: {
            Authorization: "token 06927b3d7c5e5b6b9dc4cd72a9c972c4b6a66b10",
            Accept: "application/json",
        },
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data.map((child) => {
            return {
                avatar_url: child.avatar_url,
                login: child.login,
                url: child.url,
                repos_url: child.repos_url,
                memberID: child.id,
            }
        })
    })
}

export function fetchModalProperties(url){
    return fetch(url, {
        headers: {
            Authorization: "token 06927b3d7c5e5b6b9dc4cd72a9c972c4b6a66b10",
            Accept: "application/json",
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return {
            name: data.name,
            company: data.company,
            followers: data.followers,
        }
    })
        
}

export function fetchRepoInfo(url){
    return fetch(url, {
        headers: {
            Authorization: "token 06927b3d7c5e5b6b9dc4cd72a9c972c4b6a66b10",
            Accept: "application/json",
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data.map((data) => {
            return {
                name: data.name,
                html_url: data.html_url,
                description: data.description,
            }
        })
    })
}

export function fetchFollows() {
    return fetch("/api/following", {
        headers: {
            Accept: "application/json",
        }
    }).then((response) => {
        return response.json();
    })
}

export function saveFollowing(data) {
    return fetch("/api/following", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json();
    });
}

export function removeFollowing(id) {
    return fetch(`/api/following/${id}`, {
        method: "delete",
    })
}