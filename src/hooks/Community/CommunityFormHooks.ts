export type CommunityFormData = {
    category: string;
    comments: {
      boardId: number;
      content: string;
      createDate: string;
      idx: number;
      modifiedDate: string;
      nickname: string;
    }[];
    content: string;
    idx: number;
    nickname: string;
    subject: string;
    tag: string;
    userId: number;
    writeDate: string;
  };

export type CommunityWriteForm = {
    subject: string;
    content: string;
    category: string;
    tag: string;
}