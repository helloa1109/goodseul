import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useRecoilValue } from 'recoil';
import { rIdxState } from '../../recoil/Review/ReviewAtom';
import { reviewModal } from '../../apis/Review/ReviewModal';
import { ReviewCData } from '../../hooks/Review/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { reviewCancleLike, reviewLike } from '../../apis/Review/ReviewLike';
import "../../style/review/reviewModal.scss";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    
export default function ReviewModal() {
  const clickedRIdx = useRecoilValue(rIdxState);  
  const [sRList, setSRList] = useState<ReviewCData[]>([]);
  const [open, setOpen] = React.useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLike =()=>{
    const dto = {
      r_idx : clickedRIdx
    }

    reviewLike(dto)
    .then(res => {
      if(res)
      alert("공감하셨습니다.");
    })
  }

  const cancleLike = () =>{
    reviewCancleLike(clickedRIdx)
    .then(res=>{
      if(res)
      alert("취소되었습니다.");
    })
  }

  useEffect(() => {
    if(open){
        const fetchData = async () => {
          try {
            console.log('clickedRIdx has changed:', clickedRIdx);

            const res = await reviewModal(clickedRIdx);
            console.log(res.data);
            setSRList(Array.isArray(res.data) ? res.data : [res.data]);
          } catch (error) {
            console.error('An error occurred:', error);
          }
    }
        fetchData();
    };
  }, [open]);


  return (
    <div>
     
      <Button 
        onClick={handleClickOpen}
        className='rm_headingDetail'
        style={{color:'black'}}
      >
       <FontAwesomeIcon 
       icon={faCircleRight} 
       style={{width:'25px', height:'25px'}}
       />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        fullScreen
        onClose={handleClose}
        className='rm_modalwrap'
      >
  {sRList.map((item, idx) => (
    <React.Fragment key={idx}>
      <DialogActions>
        <Button onClick={handleClose} style={{color:'#8C2323'}}> 닫기 </Button>
      </DialogActions>
      <DialogTitle className='rm_title'>{item.rsubject}</DialogTitle>
      <DialogContent
      className='rm_content'
      >
        <DialogContentText>
          {item.rcontent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {!item.likeStatus && (
          <React.Fragment>
            <Button style={{display:'flex', justifyContent:'space-around'}}> 
              <FontAwesomeIcon style={{color:'lightgray', width:'20px', height:'20px'}} icon={faThumbsUp} onClick={handleLike}/>
                <div style={{color:'black'}}>
                  {item.likeCount}
                </div>
            </Button>
          </React.Fragment>
        )}
        {item.likeStatus && (
          <React.Fragment>
            <Button>
              <FontAwesomeIcon style={{color:'#8C2323', width:'20px', height:'20px'}} icon={faThumbsUp} onClick={cancleLike}/>
              {item.likeCount}
            </Button>
          </React.Fragment>
        )}
      </DialogActions>
    </React.Fragment>
  ))}
</Dialog>

    </div>
  );
}
