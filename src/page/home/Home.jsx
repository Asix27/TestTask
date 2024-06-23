import React, { useState } from 'react';
import style from './Home.module.scss';
import logo from '/src/assets/icons/Logo.svg';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import logoutIcon from '/src/assets/icons/logout-icon.svg'; // Импорт иконки


const Home = () => {
    const documents = [
        {
            id: 1,
            date: '03/26/2024',
            status: 'Ожидает подписания',
            type: 'АВР',
            number: 'TR-487/5',
            organization: "Murray's Discount Auto Stores"
        },
        {
            id: 2,
            date: '02/18/2024',
            status: 'Подписано Заказчиком',
            type: 'АВР',
            number: 'TR-487/5',
            organization: 'Magna Architectural Design'
        },
        {
            id: 3,
            date: '03/10/2024',
            status: 'Подписано Заказчиком',
            type: 'АВР',
            number: 'TR-487/5',
            organization: 'Pro Property Maintenance'
        },
        {
            id: 4,
            date: '04/14/2024',
            status: 'Подписано',
            type: 'АВР',
            number: 'TR-487/5',
            organization: 'Johnson’s General Stores'
        },
        {
            id: 5,
            date: '02/23/2024',
            status: 'В работе',
            type: 'АВР',
            number: 'TR-487/5',
            organization: 'Total Network Development'
        },
        {
            id: 6,
            date: '03/10/2024',
            status: 'Подписано Заказчиком',
            type: 'АВР',
            number: 'TR-487/5',
            organization: 'Pro Property Maintenance'
        },
        {
            id: 7,
            date: '02/23/2024',
            status: 'В работе',
            type: 'АВР',
            number: 'TR-487/5',
            organization: 'Total Network Development'
        },
        {
            id: 8,
            date: '03/10/2024',
            status: 'Подписано Заказчиком',
            type: 'АВР',
            number: 'TR-487/5',
            organization: 'Pro Property Maintenance'
        },
        {
            id: 9,
            date: '04/14/2024',
            status: 'Подписано',
            type: 'АВР',
            number: 'TR-487/5',
            organization: 'Johnson’s General Stores'
        },
        {
            id: 10,
            date: '02/18/2024',
            status: 'Подписано Заказчиком',
            type: 'АВР',
            number: 'TR-487/5',
            organization: 'Magna Architectural Design'
        }
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const documentsPerPage = 5;
    const pageCount = Math.ceil(documents.length / documentsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * documentsPerPage;
    const currentDocuments = documents.slice(offset, offset + documentsPerPage);

    return (
        <>
            <header className={style.header}>
                <a href="/">
                    <img src={logo} alt="QAZAQ STROY"/>
                </a>
                <button className={style.logoutButton}>
                    <Link to="/" className={style.link}>
                        <img src={logoutIcon} alt="Logout Icon" className={style.logoutIcon} />
                        Выйти
                    </Link>
                </button>
            </header>
            <div className={style.homePage}>
                <form action="" method="get">
                    <input type="text" placeholder="Введите текст" className={style.searchInput} />
                    <button>Найти</button>
                </form>
                <div className={style.tableContainer}>
                    <h2>Все документы</h2>
                    <table className={style.documentsTable}>
                        <thead>
                        <tr>
                            <th width={38} height={30}>№</th>
                            <th width={130}>Дата</th>
                            <th width={176}>Статус</th>
                            <th width={175}>Тип</th>
                            <th width={202}>Номер</th>
                            <th width={240}>Организация</th>
                            <th width={240}></th>
                            <th width={240}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentDocuments.map((doc) => (
                            <tr key={doc.id}>
                                <td>{doc.id}</td>
                                <td>{doc.date}</td>
                                {doc.status == 'В работе' ? <td style={{color: '#6B7A80'}}>{doc.status}</td> : <td>{doc.status}</td>}
                                <td>{doc.type}</td>
                                <td>{doc.number}</td>
                                <td>{doc.organization}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={style.pagination}
                        activeClassName={style.active}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
