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

export const PHOTO_POST = (formData, token) => {
    return {
        url: `${API}/api/photo`,
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            }
        },
        body: formData
    }
}

export const PHOTOS_GET = ({page, total, user}) => {
    return {
        url: `${API}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        options: {
            method: 'GET',
            cache: 'no-store'
        }
    }
}

export const PHOTO_GET = (id) => {
    return {
        url: `${API}/api/photo/${id}`,
        options: {
            method: 'GET',
            cache: 'no-store'
        }
    }
}
