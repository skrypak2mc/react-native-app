import ICustomer from '../../../../../../../shared/models/Customer';

export type State = {
  loading: boolean;
  error: Error | null;
  readonly data: ICustomer | null;
};

export const initialState: State = {
  loading: false,
  error: null,
  data: null
};
