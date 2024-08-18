import styles from "./CardForm.module.css";
import { useState, useEffect } from "react";
import { createNewCardsApiAsync, cardSelector } from "../../redux/helpCenterReducer";
import { useDispatch, useSelector} from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function CardForm(){
    const [title, setCardTitle] = useState("");
    const [description, setCardDescription] = useState("");
    const [link, setCardLink] = useState("");
    const dispatch = useDispatch();
    const {loadingCards, error} = useSelector(cardSelector);


    useEffect(()=>{
        if(error){
            toast.error(error);
        }

    }, [error]);

    //======= function handle submit card form =======//
   async function handleSubmitFrom(e){
        e.preventDefault();
        if(!title || !description){
            return;
        }

        try{
            const result = await dispatch(createNewCardsApiAsync({title, description, link}));
            console.log("result for adding cards: ", result);

            if(result?.payload?.success){
                clearInput("");
                toast.success("Cards is created.")
            }

        }catch(error){
            console.log("errors for add cards: ", error);
        }
        

    }


    function clearInput(){
        setCardTitle("");
        setCardDescription("");
        setCardLink("");
    }

    return(
        <div className={styles.cardFormContainer}>
            <form className={styles.cardForm} onSubmit={handleSubmitFrom}>
                <h2 className={styles.formHeader}>
                    Create new Cards
                </h2>

                <div className={styles.formControl}>
                    <input type="text" value={title} onChange={(e)=>setCardTitle(e.target.value)}
                     placeholder="Card Title..." />
                </div>

                <div className={styles.formControl}>
                    <input type="text" value={description} onChange={(e)=>setCardDescription(e.target.value)}
                     placeholder="Card description..." />
                </div>

                <div className={styles.formControl}>
                    <input type="text" value={link} onChange={(e)=>setCardLink(e.target.value)}
                     placeholder="Card link..." />
                </div>


                <button type="submit" disabled={loadingCards}>
                    {loadingCards ? <ClipLoader size={15} color={"#fff"} /> : "Create cards"}
                </button>
            </form>
        </div>
    )
}