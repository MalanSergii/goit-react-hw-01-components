import styled from "@emotion/styled";

export const Stats = styled.section`
    width: 500px;
    margin-right:auto;
    margin-left:auto;
    border:1px solid grey;
    text-align: center;
    border-radius:5px;
    margin-bottom:60px;
`;

export const Title = styled.h2`
    text-transform:uppercase;
    padding-top:10px;
    padding-bottom:10px;
    color:grey;
    /* border-bottom:1px solid grey; */

`;
export const List = styled.ul`
    display: flex;
    flex-direction:row;
    border-top:1px solid grey;
`;

export const Item = styled.li`
    display: flex;
    flex-direction:column;
    width:100%;
    padding:10px;
    background-color: rgb(211, 230, 251);
    :not(:last-child){
        border-right: 1px solid grey; 
    }
`;

export const Persentage = styled.span`
    font-size:20px;
    margin-top: 5px;
    font-weight:bold;
    color:grey;
    `;
