interface BaseResponse<T> {
  state: number;
  message: string;
  data: T;
}

export default BaseResponse;
