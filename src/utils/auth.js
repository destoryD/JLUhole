export function getToken () {
  return localStorage.getItem('token') === undefined ? 'none' : localStorage.getItem('token')
}
export function setToken (token) {
  localStorage.setItem('token', token)
}
export function setTokenExpired (expired) {
  localStorage.setItem('expired', expired)
}
