import apiUrls from './constants'

const getApiBase = () => {
  switch (process.env.API_TARGET) {
    case 'local':
      return apiUrls.local

    case 'staging':
      return apiUrls.staging

    case 'production':
      return apiUrls.production

    default:
      return apiUrls.local
  }
}

export default getApiBase
