import styled from "@emotion/styled";

export const Table = styled.table`
    width:600px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom:60px;
    border-radius:5px; 
    box-shadow: 0px 0px 15px 11px rgba(34, 60, 80, 0.2);
    /* border: 1px solid black; */
    text-align:center;
    `;

export const TableHead = styled.thead`
    background-color: #8ad270;
    border-radius: 5px;
    height:40px;
    `;   

export const TableR = styled.tr`
    height:20px;
    color:grey;
    height:30px;
    :nth-child(even){
        background-color: #eadbdb;
    }
    `; 
