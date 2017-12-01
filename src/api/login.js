import fetch from '@/utils/fetch'

// 维护请求列表
const urlParam  = {
  loginByUsername : '/login/login'
}

export function commonRequest(urlP,data){
   
  
}
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

