export const getRoot = () => {
    fetch("https://api.github.com/user?access_token=49b49575041eb0db07b44985c3111981f3f4b75a").then(resp => {
        console.log("resp", resp)
    });
}

export const getUserInfo1 = () => {
    fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: "token 93ad4ee6e956d031eecff389f7479dbce46b6d95"
        }
    }).then(resp => {
        return resp.json()
    }).then(respjson => {
        console.log("json", respjson)
    })
}

export interface UserInfo {
    login: string
    name?: string
    avatar_url?: string
}

export const getUserInfo = (): UserInfo => {
    let returnValue: UserInfo = { login: "" }
    fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: "token 93ad4ee6e956d031eecff389f7479dbce46b6d95"
        }
    })
        .then(rawResp => rawResp.json())
        .then(jsonResp => {
            console.log("json", jsonResp)
            returnValue = {
                login: jsonResp.login,
                name: jsonResp.name,
                avatar_url: jsonResp.avatar_url
            }
        })
        .catch(error => {
            console.error("ERROR in getting user info")
        })
    return returnValue
}