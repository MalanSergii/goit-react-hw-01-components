import styled from "@emotion/styled";

export const List = styled.ul`
    /* border: 1px solid black; */
    border-radius: 5px;
    background-color: rgb(244, 232, 162);
    width: 170px;
    padding:20px;
    margin-right:auto;
    margin-left:auto;
    display: flex;
    flex-direction:column;
    align-items:center;`;
    

export const Item = styled.li`
    display: flex;
    align-items: center;
    /* border: 1px solid grey; */
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    border-radius: 5px;
    width: 250px;
    margin:5px;
    padding: 10px 30px;
    background-color:white;
    `;

export const StatusOnline = styled.span`
    width:20px;
    height:20px;
    margin-right:20px;
    border-radius:50px;
    background-color: #86c528;`;    

export const StatusOffline = styled.span`
    width:20px;
    height:20px;
    margin-right:20px;
    border-radius:50px;
    background-color: #f4644b;
    `;  

export const UserName = styled.span`
    font-size: 22px;
    margin-left: 20px;
    `;    