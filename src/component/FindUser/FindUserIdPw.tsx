import React from 'react'
import "../../style/FindUserIdPw/FindUserIdPw.scss";
import FindUserIdPwForm from './FindUserIdPwForm';
import { useRecoilValue } from 'recoil';
import { isFindIdAtom } from '../../recoil/FindUserIdPw/FindUserIdPwAtom';

const FindUserIdPw = () => {

    const isFindId = useRecoilValue<boolean>(isFindIdAtom);
  return (
    <div className='FindUserIdPw'>
      <div className='FindUserIdPwHeader'>
        <span>로그인에 문제가 있으십니까?</span>
        {
          isFindId ? (
            <span>아래에 정보를 입력하여 구슬에 가입된 ID를 찾으세요</span>
          ) : <span>아래에 정보를 입력하여 구슬에 가입된 비밀번호를 찾으세요</span>
        }
      </div>
      <FindUserIdPwForm />
    </div>
  )
}

export default FindUserIdPw;
