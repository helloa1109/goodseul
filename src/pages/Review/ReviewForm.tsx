import React, { useState } from "react";
import StarRating from "../../component/StarRating/StarRating";
import { useRecoilValue } from "recoil";
import { starRatingState } from "../../recoil/StarRating/StarRatingAtom";
import { ReviewWriteForm } from "../../hooks/Review/Review";
import { reviewForm } from "../../apis/Review/ReviewForm";
import { useNavigate } from "react-router-dom";

function ReviewForm() {
    const [rSubject, setRSubject] = useState('');
    const [rContent, setRContent] = useState('');
    const [rType, setRType] = useState('')
    const starRate = useRecoilValue(starRatingState);
    const navi = useNavigate();

    const handelSubmit =()=>{
        const dto:ReviewWriteForm ={
            r_subject : rSubject,
            r_content : rContent,
            star : starRate,
            r_type : rType,
            
        }
        reviewForm(dto)
        .then(res=>{
            if(res){
                console.log("success");
                navi("/Review");
            }
        })
        
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <div className="review_formSel">
                    <select onChange={(e)=> setRType(e.target.value)}>
                        <option value={'안녕/행운'}>안녕/행운</option>
                        <option value={'건강/쾌차'}>건강/쾌차</option>
                        <option value={'혼사/잔치'}>혼사/잔치</option>
                        <option value={'장례/제사'}>장례/제사</option>
                        <option value={'창업/축원'}>성취/축원</option>
                    </select>
                </div>
                <div className="review_formSubject">
                <input type="text" className="" placeholder="제목을 입력해주세요."
                   required
                   onChange={(e) => setRSubject(e.target.value)} value={rSubject}/>
                </div>
                <textarea
                    placeholder="내용을 입력해주세요."
                    required value={rContent}
                    onChange={(e) => setRContent(e.target.value)}
                    className="review_formtxt"
                >

                </textarea>
                <div>
                  <StarRating/>
                </div>
                <button className="review_formBtn" type="submit">submit</button>
            </form>
        </div>
    );
}

export default ReviewForm;