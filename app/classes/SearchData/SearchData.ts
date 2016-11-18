import { PostData } from '../PostData/PostData';

export class SearchPostResponse {
  public success: boolean = false;
  public reason: string = "";
  public datos: Array<PostData> = [];
  public paginas: number = 0;
}
