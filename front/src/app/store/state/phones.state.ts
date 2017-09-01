export interface Phone {
  id: number,
  name: string,
  description: string,
  price: number,
  color: string,
  image: string
};

export interface PhonesState {
  phones: Phone[]
};

export const PhonesIntitialState: PhonesState = {
  phones: []
};
