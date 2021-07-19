export const getConfig = (type, token) => {
  const data = {
    url: '',
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  }  
  switch(type) {
    case 'get-user-posts' : {
      data.method = 'get'
      data.url = 'http://localhost:4000/api/post/posts'
      break
    }
    case 'get-all-posts' : {
      data.url = 'https://jsonplaceholder.typicode.com/posts'
      delete(data.headers)
      break
    }
    case 'remove-user-post' : {
      data.url = 'http://localhost:4000/api/post/posts/'
      data.method = 'delete'
      break
    }
    case 'add-user-post' : {
      data.url = 'http://localhost:4000/api/post/posts/add'
      data.method = 'post'
      break
    }
    case 'register-user' : {
      data.url = 'http://localhost:4000/api/auth/register'
      data.method = 'post'
      break
    }
    case 'login-user' : {
      data.url = 'http://localhost:4000/api/auth/login'
      data.method = 'post'
      break
    }
  }
  return data
}