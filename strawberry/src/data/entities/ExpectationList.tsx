interface Comment {
  name: string;
  comment: string;
}

export interface ExpectationList {
  totalPages: number;
  comments: Comment[];
}
