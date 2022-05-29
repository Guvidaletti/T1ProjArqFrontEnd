import axios from 'axios';

export interface EnvironmentType {
  api: string;
  useMock: boolean;
}

let loadedEnvironment: EnvironmentType;

export const loadEnvironment = (): Promise<EnvironmentType> => {
  return new Promise<EnvironmentType>((resolve) => {
    axios
      .get<EnvironmentType>(
        `${process.env.PUBLIC_URL}/environments/${
          process.env.NODE_ENV
        }.json?noCache=${Math.random() * 1000}`
      )
      .then(({ data }) => {
        loadedEnvironment = data;
        resolve(data);
      });
  });
};

export const getEnvironment = (): EnvironmentType => loadedEnvironment;
