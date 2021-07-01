export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  icon?: string;
  isFav?: boolean;
  isSeen?: boolean;
  isTop?: boolean;
}
