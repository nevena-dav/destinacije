import React from "react";

const Pagination = ({totalPosts, postsPerPage, setCurrentPage}) => {

    let pages = [];
    /*prazan niz koji cemo napuniti brojevima */
    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
    pages.push(i);
        }

    return (
        <div className="paginacija">  
        {pages.map((page, index) => {
        return <button className="btnPaginacija" key= {index} onClick = {() => setCurrentPage(page)}> {page}</button>;
        })}


        </div>
    )

}

export default Pagination