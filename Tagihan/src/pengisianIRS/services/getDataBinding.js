import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const getDataBinding = () => {
    const { getToken } = tokenManager();
    const token = getToken();

    return axios.get(`${environment.rootApi}/call/pengisianrencanastudi/getDataBinding`,
        {
            params: { token },
            headers: {
                'Authorization': token,
            }
        }
    )
}

export default getDataBinding