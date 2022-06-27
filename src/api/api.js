const API = 'https://dogsapi.origamid.dev/json'

export const TOKEN_POST = (body) => {
    return {
        url: `${API}/jwt-auth/v1/token`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    }
}

export const TOKEN_VALIDATE_POST = (token) => {
    return {
        url: `${API}/jwt-auth/v1/token/validate`,
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            }
        }
    }
}

export const USER_GET = (token) => {
    return {
        url: `${API}/api/user`,
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            }
        }
    }
}

export const USER_POST = (body) => {
    return {
        url: `${API}/api/user`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    }
}