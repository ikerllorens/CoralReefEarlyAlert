import { PostData } from '../PostData/PostData';

export class HomeResponse {
  public paginas: Number;
  public datos: Array<PostData>;
  public success: boolean;
  public reason: string;
}
