const STORAGE_KEY = 'token';

const tokenSave = (token: string) => {
    localStorage.setItem(STORAGE_KEY, token);
}

const tokenRestore = (): string|null => {
    return localStorage.getItem(STORAGE_KEY);
}

const tokenClear = () => {
    localStorage.removeItem(STORAGE_KEY);
}

export {
    tokenSave,
    tokenRestore,
    tokenClear
}
