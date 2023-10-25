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

  useEffect(() => {
    if(open){
        console.log("go");
        const fetchData = async () => {
          try {
            console.log('clickedRIdx has changed:', clickedRIdx);

            const res = await reviewModal(clickedRIdx);
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
        자세히 보기
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        fullScreen
        onClose={handleClose}
        >
        {sRList.map((item, idx) => (
            <React.Fragment key={idx}>
            <DialogTitle>{item.rsubject}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                {item.rcontent}
                </DialogContentText>
            </DialogContent>
            </React.Fragment>
        ))}
        <DialogActions>
            <FontAwesomeIcon icon={faThumbsUp} />
            <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
        </Dialog>

    </div>
  );
}
