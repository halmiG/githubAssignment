export interface UserInfo {
    avatar_url: string
    login: string
    name: string
    company: string
    email: string
    html_url: string
    bio: string
}

export const defaultUserInfo = {
    avatar_url: "",
    login: "",
    name: "",
    company: "",
    email: "",
    html_url: "",
    bio: ""
}

export const getUserInfo = (token: string | null, name: string | null, callback: (error: string | null, resp: UserInfo) => void) => {
    let requestUrl = "";
    let headers = {};
    if (token !== null) {
        requestUrl = "https://api.github.com/user";
        headers = {
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${token}`
        }
    } else if (name !== null) {
        requestUrl = `https://api.github.com/users/${name}`;
        headers = {
            Accept: "application/vnd.github.v3+json"
        }
    }

    fetch(requestUrl, {
        method: "GET",
        headers: headers
    })
        .then(resp => {
            if (resp.status !== 200) {
                throw ("Error in the call!");
            }
            return resp.json()
        })
        .then(rawJson => {
            callback(null, {
                avatar_url: rawJson.avatar_url,
                login: rawJson.login,
                name: rawJson.name,
                company: rawJson.company,
                email: rawJson.email,
                html_url: rawJson.html_url,
                bio: rawJson.bio
            })
        })
        .catch(error => {
            callback(error, defaultUserInfo);
        })
}