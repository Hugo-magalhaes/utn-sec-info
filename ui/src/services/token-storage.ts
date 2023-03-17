const tokenSave = (token: string) => {
    localStorage.setItem('token', token);
}

const tokenRestore = (): string|null => {
    return localStorage.getItem('token');
}

const tokenClear = () => {
    localStorage.removeItem('token');
}

export {
    tokenSave,
    tokenRestore,
    tokenClear
}
