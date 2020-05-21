import mock from '@/fake-db/mock.js'
import jwt from 'jsonwebtoken'

const data = {
  checkpointReward: {
    userName: 'John',
    progress: '57.6%'
  },
  users: [
    {
      uid: 34,
      displayName: 'Howard Potts',
      password: 'adminadmin',
      photoURL: require('@assets/images/portrait/small/avatar-s-5.jpg'),
      email: 'admin@admin.com',
      phoneNumber: null
    }
  ]
}


mock.onPost('/api/auth/refresh-token').reply((request) => {

  const {accessToken} = JSON.parse(request.data)

  try {
    const {id} = jwt.verify(accessToken, jwtConfig.secret)

    const userData = Object.assign({}, data.users.find(user => user.uid === id))

    const newAccessToken = jwt.sign({id: userData.uid}, jwtConfig.secret, {expiresIn: jwtConfig.expiresIn})

    delete userData['password']
    const response = {
      userData,
      accessToken: newAccessToken
    }

    return [200, response]
  } catch (e) {
    const error = 'Invalid access token'
    return [401, {error}]
  }
})


mock.onGet('/api/user/checkpoint-reward').reply(() => {
  return [200, data.checkpointReward]
})
