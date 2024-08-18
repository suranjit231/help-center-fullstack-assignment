import styles from "./Home.module.css";
import { GrFormNextLink } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { getAllCardsApiAsync, cardSelector, getOneCardsApiAsync, cardActions } from "../../redux/helpCenterReducer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";


export default function Home(){
    const dispatch = useDispatch();
    const {loadingCards, cards, error} = useSelector(cardSelector);
    const [ searchText, setSearchText] = useState("");
    const {resetError} = cardActions;

    //====== dispatch action to fetch when cards page load ====//
    useEffect(()=>{
        dispatch(getAllCardsApiAsync());

    },[]);

  
   // ====== Show error toast if there is an error =========//
    useEffect(() => {
        if (error) {
            toast.error(error);
            const errorTimeout = setTimeout(() => {
                dispatch(resetError());
            }, 3000); // 3 seconds delay to reset error
            return () => clearTimeout(errorTimeout);
        }
    }, [error, dispatch, resetError]);

  
     // Dispatch action to fetch one card with debouncing
     useEffect(() => {
        const handler = setTimeout(() => {
            if (searchText.length > 2) {
                dispatch(getOneCardsApiAsync(searchText));
            }
        }, 500); // 500ms delay

        return () => {
            clearTimeout(handler);
        };
    }, [searchText, dispatch]);



    return(
        <div className={styles.homePageContainer}>

            {/* ========== home page search container start =============== */}
            <div className={styles.searchContainer}>
                <div className={styles.searchContainerWrapper}>
                    <h3>How can we help you?</h3>

                    <div className={styles.searchDiv}>
                        <input value={searchText} onChange={(e)=>setSearchText(e.target.value)}
                         type="text" placeholder="Search..." />
                        <GrFormNextLink className={styles.searchNextIcon} />
                    </div>

                </div>
            </div>

            {/* ========== home main section start here ======================== */}

            {loadingCards ? (

                // ----- show loading when cards is loading -----//
                <div className={styles.loaderContainer}>
                    <ClipLoader color={"#123abc"} loading={loadingCards} size={50} />
                </div>

                ):(
                
                //------ else map cards and render cards -----//
                <div className={styles.mainContainer}>
                    {cards && cards?.length>0?cards.map((card, i)=>(

                    <div key={card._id}  className={styles.helpCenterBox}>
                        <p className={styles.cardTitle}>{card.title}</p>
                        <p className={styles.cardDescription}>{card.description}</p>
                        <p className={styles.viewDetailsDiv}><span>View Deatils</span> <GrFormNextLink className={styles.showDetilsIcon} /></p>
                    </div>


                    )):(<h1 className={styles.noCardsError}>No cards is available </h1>)}
                    
                </div>


                )}

        </div>
    )
}