import { axiosPunch } from "../JWT/JWTConfig";
import { CommunityWriteForm } from '../../hooks/Community/CommunityFormHooks';

const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const CommunityFormApi = (boardDto:CommunityWriteForm) => {
    return axiosPunch({
        method: 'post',
        url: `${serverUrl}/api/lv1/board`,
        data: boardDto,
        headers: { 'Content-Type': 'application/json' },
    })
}