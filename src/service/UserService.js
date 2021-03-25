import {API_URL} from "../common/constants";

const registerUser = (user) => {
    console.log(user)
    return fetch(`${API_URL}users/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => {
        if(response.ok) {
            return response.json()
        }
        return undefined
    })

};

const profile = () => {
    return fetch(`${API_URL}users/profile`, {
        method: "POST",
        credentials: "include"
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        return undefined
    })
};

const getUserProfileByHandle = (handle) => {
    return fetch(`${API_URL}users/${handle}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return null;
        })
};

const logout = () => {
    return fetch(`${API_URL}users/logout`, {
        method: "POST",
        credentials: "include"
    })
};

const loginUser = (user) => {
    return fetch(`${API_URL}users/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return undefined
    })
};

const searchUsers = (searchString) => {
    fetch(`${API_URL}users/search/${searchString}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return null
            }
        })
};

const editProfile = (user) => {
    let response = fetch( `${API_URL}users/update`, {
        method:"PUT",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then( response => {
        if(response.ok){
            return response.json();
        } else {
            return null
        }

    });

    return response;
}
//api/images/uploadprofile

// const uploadProfilePic()

export default {
    registerUser,
    profile,
    logout,
    loginUser,
    searchUsers,
    getUserProfileByHandle,
    editProfile
}
