import { ICertificate } from 'src/app/models/index';

export interface ICertificateState {
  certificates: ICertificate[];
  error: string | null;
  pending: boolean;
}

export const initialCertificateState: ICertificateState = {
  certificates: [],
  error: null,
  pending: false,
};
