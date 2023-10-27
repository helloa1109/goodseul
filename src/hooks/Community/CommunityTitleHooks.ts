export interface Comment {
    boardId: number;
    content: string;
    createDate: string;
    idx: number;
    modifiedDate: string;
    nickname: string;
}

export interface BoardDto {
    category: string;
    comments: Comment[];
    content: string;
    idx: number;
    nickname: string;
    subject: string;
    tag: string;
    userId: number;
    writeDate: string;
}

export interface CommunityTitleHooksType {
    boardDto: BoardDto;
    userProfile: string;
}
