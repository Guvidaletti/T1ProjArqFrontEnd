import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getEnvironment } from './environment';

const api = axios.create({ baseURL: getEnvironment()!?.api });

export const toRequest = <Type = any>(
  requestMethod:
    | typeof axios.get
    | typeof axios.post
    | typeof axios.put
    | typeof axios.delete,
  requestMethodOnlineParams:
    | [string]
    | [string, AxiosRequestConfig | any]
    | [string, any, AxiosRequestConfig],
  offlineJSONName?: string
): Promise<AxiosResponse<Type>> => {
  if (getEnvironment()?.useMock) {
    const url = `${
      process.env.PUBLIC_URL
    }/mock/${offlineJSONName}.json?noCache=${Math.random() * 1000}`;
    return axios.get(url);
  } else {
    return requestMethod.apply({}, requestMethodOnlineParams as any) as Promise<
      AxiosResponse<Type>
    >;
  }
};

export default api;
