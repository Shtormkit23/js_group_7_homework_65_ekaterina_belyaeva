import React, {useEffect, useState} from 'react';
import './MainBlock.css';
import lotusLogo from '../../assets/images/lotus.png';
import axiosPage from "../../axiosPage";
import Spinner from "../../components/UI/Spinner/Spinner";

const MainBlock = props => {
        const [page, setPage] = useState([]);
        const [loading, setLoading] = useState(true);
        const id = props.match.params.id;

        useEffect(() => {
            const fetchData = async () => {
                const responsePage = await axiosPage.get(`/pages/${id ? `${id}.json` : 'home.json'}`);
                setPage(responsePage.data);
            };
            fetchData().finally(() => setLoading(false));
        }, [id]);

        let content = (
            <>
                <h3 className='Main-title'>{page.title}</h3>
                <p className='Main-text'>{page.content}</p>
            </>
        );

    if (loading) {
       content  = <Spinner/>
    }


    return (
    <div className='Main-block'>
        {content}
        <img src={lotusLogo} alt={'bg-img'} className='Bg-img'/>
    </div>
    )
};

export default MainBlock;

