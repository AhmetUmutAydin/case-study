export abstract class ResultHttpResponse<T = any> {
  limit: number;
  page: number;
  total: number;
  data: T;
}
