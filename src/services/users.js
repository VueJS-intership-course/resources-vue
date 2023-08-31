export default {
  getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {id: 1, user: 'bob'},
          {id: 2, user: 'john'},
          {id: 3, user: 'alex'},
          {id: 4, user: 'dummy'},
        ])
      }, 1200)
    })
  }
}