const validateUserToken = () => {
  const access = getToken();
  if (!access) {
    return false;
  } else {
    if (!access) {
      return false;
    } else {
      return true;
    }
  }
};

const getToken = () => {
  return window.sessionStorage.getItem('secure_home_identity');
};

const clearToken = () => {
  window.sessionStorage.clear();
};

const setToken = async () => {
  window.sessionStorage.setItem('secure_home_identity', true); //TODO
};

const logout = () => {
  clearToken();
  window.location.reload();
};

export default { validateUserToken, setToken, logout, getToken };
