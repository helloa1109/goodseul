import React from 'react';
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import '../../style/Floatingmenu/Floatingmenu.scss';
import { useNavigate } from 'react-router-dom';
import homeIfon from '../../image/Floationmenu/homeIcon.png';
import commuIcon from '../../image/Floationmenu/commuIcon.png';
import mypageIcon from '../../image/Floationmenu/mypageIcon.png';
import playIcon from '../../image/Floationmenu/playIcon.png';
import quickIcon from '../../image/Floationmenu/quickIcon.png';
import { useRecoilState } from 'recoil';
import { isLoginState } from '../../recoil/JWT/JWTAtom';
import { JWTDecoding } from '../../apis/JWT/JWTDecoding';
import { decodeToken } from '../../hooks/JWT/JWTType';

function Floatingmenu() {
    const navi = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const [isLogin, setIsLogin] = useRecoilState(isLoginState);
    const userProfile = () => {
        if(isLogin) {
            return (JWTDecoding() as decodeToken).userProfile;
        }
    }
    console.log(userProfile());
    const logoutActions = [
        { icon: <div className='floatingIcon floatingLogin'><img src={mypageIcon} alt=""/></div>, name: "로그인" ,  dest:"/Login"} ,
        { icon: <div className='floatingIcon floatingCommunication'><img src={commuIcon} alt=""/></div>, name: "커뮤니티"  ,dest:"/Community"},
        { icon: <div className='floatingIcon floatingPlay'><img src={playIcon} alt=""/></div>, name: "플레이" , dest:"/play"},
        { icon: <div className='floatingIcon floatingRequest'><img src={quickIcon} alt=""/></div>, name: "빠른견적" ,  dest:"/Request"},
        { icon: <div className='floatingIcon floatingHome'><img src={homeIfon} alt=""/></div>, name: "홈" , dest:"/"}
    ];

    const loginActions = [
        { icon: <div className='floatingIcon floatingLogin'><img src={`http://dopeboyzclub.ddns.net:7733/userprofile/${userProfile()}`} className='userProfile' alt=""/></div>, name: "내정보" ,  dest:"/Mypage"},
        { icon: <div className='floatingIcon floatingCommunication'><img src={commuIcon} alt=""/></div>, name: "커뮤니티"  ,dest:"/Community"},
        { icon: <div className='floatingIcon floatingPlay'><img src={playIcon} alt=""/></div>, name: "플레이" , dest:"/play"},
        { icon: <div className='floatingIcon floatingRequest'><img src={quickIcon} alt=""/></div>, name: "빠른견적" ,  dest:"/Request"},
        { icon: <div className='floatingIcon floatingHome'><img src={homeIfon} alt=""/></div>, name: "홈" , dest:"/"}
    ];

    return (
        <>
            <Backdrop className="FloatingmenuBack" open={open} onClick={handleOpen} />
            { isLogin ?<Box className="Floatingmenu" sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{ position: "fixed", bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClick={handleOpen}
                    open={open}
                >
                     {loginActions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={()=>{navi(action.dest)}}
                        />
                    ))} 
                </SpeedDial>
            </Box> : <Box className="Floatingmenu" sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{ position: "fixed", bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClick={handleOpen}
                    open={open}
                >
                     {logoutActions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={()=>{navi(action.dest)}}
                        />
                    ))} 
                </SpeedDial>
            </Box>}
        </>
    );
}

export default Floatingmenu;
