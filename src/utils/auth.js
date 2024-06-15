// utils/auth.js

// Function to set the access token in localStorage or cookies
export const setToken = (token) => {
    localStorage.setItem('access_token', token);
    // Alternatively, you can use cookies to store the token
    // document.cookie = `access_token=${token}; Secure; SameSite=None`;
};

// Function to get the access token from localStorage or cookies
export const getToken = () => {
    return localStorage.getItem('access_token') || '';
    // If using cookies, parse the cookie string to extract the token
    // const cookieValue = document.cookie.replace(
    //   /(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/,
    //   '$1'
    // );
    // return cookieValue || '';
};

// Function to clear the access token from localStorage or cookies
export const clearToken = () => {
    localStorage.removeItem('access_token');
    // Alternatively, clear the token from cookies
    // document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; SameSite=None';
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
    const token = getToken();
    return !!token; // Returns true if token exists, false otherwise
};