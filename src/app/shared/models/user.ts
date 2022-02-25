import { Title } from '../enums';

export interface User {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: Title;
  email: string;
  phone: string;
}
