import { useState } from "react";
import StarRating from "../../component/StarRating/StarRating";

function ReviewForm() {
    const [rSubject, setRSubject] = useState('');
    const [rContent, setRContent] = useState('');

    const handleTypeSel=()=>{

    }
    const handelSunmit =()=>{

    }

    return (
        <div>
            <form onSubmit={handelSunmit}>
                <div>
                    <select onChange={handleTypeSel}>
                        <option value={''}></option>
                        <option value={''}></option>
                        <option value={''}></option>
                        <option value={''}></option>
                        <option value={''}></option>
                    </select>
                </div>
                <div>
                <input type="text" className="" placeholder="제목을 입력해주세요."
                   required
                   onChange={(e) => setRSubject(e.target.value)} value={rSubject}/>
                </div>
                <textarea
                placeholder="내용을 입력해주세요."
                required value={rContent}
                onChange={(e) => setRContent(e.target.value)}
                >

                </textarea>
                <div>
                  <StarRating/>
                </div>
            </form>
        </div>
    );
}

export default ReviewForm;