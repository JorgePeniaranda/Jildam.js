export const validEmail = (email) => {
  if (/^\w+(\.-]?\w+)*@\w+(\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
  else return false;
};

export const validNickName = (nickName) => {
  if (!/^[A-Z]+$/i.test(nickName)) return true;
  else return false;
};

export const textIsDefined = (text) => {
  if (text.length > 0) return true;
  else return false;
};

export const emailExist = (userList, email) => {
  return userList.find((e) => e.email === email);
};

export const userExist = (userList, user) => {
  return userList.find((e) => e.user === user);
};

export const checkMinPassword = (pass) => {
  if (pass.length > 7) return true;
  else return false;
};

export const comparePass = (pass, confirmPass) => {
  if (pass === confirmPass) return true;
  else return false;
};

export const CheckRegister = (registerForm, userList) => {
  if (!validEmail(registerForm.email)) return "invalidEmail";
  else if (validNickName(registerForm.user)) return "invalidUser";
  else if (!textIsDefined(registerForm.user)) return "anyUser";
  else if (emailExist(userList, registerForm.email))
    return "matchWithOtherMail";
  else if (userExist(userList, registerForm.user)) return "matchWithOtherUser";
  else if (!checkMinPassword(registerForm.pass)) return "invalidPassMin";
  else if (!comparePass(registerForm.pass, registerForm.confirmPass))
    return "confirmPassNoMatch";
  else if (!registerForm.acceptTerms) return "noAcceptTerms";
};

export const CheckPassword = (user) => {
  return user.pass === true;
};

export const CheckLogin = (loginForm, userList) => {
  let user =
    userExist(userList, loginForm.auth) || emailExist(userList, loginForm.auth);
  if (!textIsDefined(loginForm.pass)) return "nonPassword";
  else if (user) {
    if (comparePass(user.pass, loginForm.pass)) return user.id;
    else return "incorrectPassword";
  } else return "userNonExist";
};

export const CreateToken = () => {};

// for test: aaa@aaa.aaa
