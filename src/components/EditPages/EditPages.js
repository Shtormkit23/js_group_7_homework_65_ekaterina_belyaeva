import React from 'react';
import './EditPages.css';
import {PAGES} from "../../Pages";

const EditPages = props => {
    return(
        <>
            <form onSubmit={props.sendHandler} className='EditPages'>
                <select
                    name="page"
                    className="Input Selected"
                    value={props.value}
                    onChange={props.pageSelection}
                >
                    {PAGES.map(page => (
                        <option key={page.id} value={page.id} className='Input Selected'>{page.name}</option>
                    ))}
                </select>
                <input
                    className="Input" placeholder="Page title..."
                    type="text" name="title"
                    value={props.title}
                    onChange={props.pageDataChange}
                />
                <textarea
                    className="Input Textarea" placeholder="Page description..."
                    typeof="text" name="content"
                    value={props.content}
                    onChange={props.pageDataChange}
                />
                <button className='Save'>SAVE</button>
            </form>
        </>
    )
};

export default EditPages;