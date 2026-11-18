import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const getListMataKuliah = (params = {}) => {
    const { getToken } = tokenManager();
    const token = getToken();

    return axios.get(
        `${environment.rootApi}/call/kelas/getListMataKuliah`,
        {
            params: {
                ...params,
                token
            },
            headers: {
                'Authorization': token
            }
        }
    );
}

export default getListMataKuliah