import requester from './index';

export default {
  getAllBooks(params) {
    return requester.get('books').then(res => {
      return Promise.resolve(res.data)
    })
  }
}