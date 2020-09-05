import { UserResponseDto } from './user';

export type RoomType = "individual" | "group";

export interface ChattingDto {
    room_id: number;
    type: RoomType | undefined;
    identifier: string;
    room_name: string;
    participant: Array<UserResponseDto>;
    chatting: Array<ChattingResponseDto>;
}

export interface RoomListDto {
    room_id: number;
    type: RoomType;
    identifier: string;
    room_name: string;
    participant:Array<number>;
    last_chat: string;
    updated_at: Date;
}

export interface ChattingRequestDto {
    room_id: number;
    type: RoomType;
    participant: Array<UserResponseDto>;
    send_user_id: number;
    message: string;
}

export interface ChattingResponseDto{
    id: number;
    room_id: number;
    send_user_id: number;
    message: string;
    created_at: Date;
}


export interface CreateRoomRequest {
    type: RoomType;
    identifier: string;
    room_name: string;
    participant:Array<UserResponseDto>;
}

export interface CreateRoomResponse {
    room_id: number;
    identifier: string;
    type: RoomType;
    room_name: string;
    last_chat: string;
    updated_at: Date;
}
