import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Pagination} from "react-bootstrap";
import {Context} from "../index";

const Pages = observer(() => {
    const {appeal} = useContext(Context)
    const pages = []
    const pageCount = Math.ceil(appeal.totalCount/appeal.limit)

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
        <Pagination className='mt-3'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    className='ml-1'
                    active={appeal.page === page}
                    onClick={() => appeal.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;