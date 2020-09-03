import React, {useEffect, useState} from 'react';
import EditPages from "../../components/EditPages/EditPages";
import axiosPage from "../../axiosPage";
import Spinner from "../../components/UI/Spinner/Spinner";

const AdminBlock = props => {
    const [page, setPage] = useState({
        title: '',
        content: ''
    });

    const [loading, setLoading] = useState(true);

    const [mainPage, setMainPage] = useState('home');

    useEffect(() => {
        const fetchData = async () => {
            const responsePage = await axiosPage.get(`pages/${mainPage}.json`);
            setPage(responsePage.data);
        }
        fetchData().finally(() => setLoading(false));
    }, [mainPage]);

    const pageSelection = async event => {
        const value = event.target.value;
        setMainPage(value);
    };

    const pageDataChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setPage(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendHandler = async event => {
        event.preventDefault();
        try {
            const pageCopy = {...page};
            await axiosPage.put(`/pages/${mainPage}.json`, pageCopy);
        } finally {
            props.history.replace(`${mainPage === 'home' ? '/pages/home' : `/pages/${mainPage}`}`)
        }
    };

    let edit =(
        <EditPages
            pageSelection={pageSelection}
            value={mainPage}
            title={page.title}
            content={page.content}
            sendHandler={event => sendHandler(event)}
            pageDataChange={event => pageDataChange(event)}
        />
    );

    if(loading){
        edit = <Spinner/>
    }

    return(
        <div className='AdminBlock'>
            {edit}
        </div>

    );
};

export default AdminBlock;