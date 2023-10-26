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
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { reviewLike } from '../../apis/Review/ReviewLike';
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
    reviewLike()
    .then(res => {
      if(res)
      alert("공감하셨습니다.");
    })

  }

  useEffect(() => {
    if(open){
        console.log("go");
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
        style={{color:'white'}}
      >
       
      </Button>
      <Dialog
  open={open}
  TransitionComponent={Transition}
  fullScreen
  onClose={handleClose}
>
  {sRList.map((item, idx) => (
    <React.Fragment key={idx}>
      <DialogActions>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
      <DialogTitle className='RM_title'>{item.rsubject}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {item.rcontent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {!item.likeStatus && (
          <React.Fragment>
            <Button>
              <FontAwesomeIcon style={{border:'lightgray'}} icon={faThumbsUp} onClick={handleLike}/>
              {item.likeCount}
            </Button>
          </React.Fragment>
        )}
        {item.likeStatus && (
          <React.Fragment>
            <Button>
              <FontAwesomeIcon style={{color:'#8C2323'}} icon={faThumbsUp} />
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
