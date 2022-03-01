import axiosClient from './axiosClient'

const productsEndpoint = 'products'

const productsApi = {
    getAll: () => axiosClient.get(productsEndpoint),
    getOne: (id) => axiosClient.get(`${productsEndpoint}/${id.toString()}`)
}

export default productsApi