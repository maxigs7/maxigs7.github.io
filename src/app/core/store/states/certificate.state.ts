import { ICertificate } from 'src/app/models/index';

export interface ICertificateState {
  certificates: ICertificate[];
}

export const initialCertificateState: ICertificateState = {
  certificates: [],
};
