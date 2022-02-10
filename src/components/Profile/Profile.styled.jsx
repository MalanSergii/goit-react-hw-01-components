import styled from "@emotion/styled";

export const UserCard = styled.div`
    width:300px;
    border: 1px solid black ;  
    border-radius: 5px;
    margin-right: auto;
    margin-left:auto;
    padding-top:25px;
    text-align:center;
    margin-bottom:60px;
    `;
export const Image = styled.img`
    width:60%;
    border-radius:50%;
    background: green;
    `;

export const Name = styled.p`
    font-size:26px;
    font-weight:700;
    margin-bottom: 15px;
    `;

export const Text = styled.p`
    color:grey;
    margin:10px;
    font-size:19px;
    `;
export const ListStats = styled.ul`
    display: flex;
    height:80px;
    margin-bottom:0px;
    background-color: var(--grey_color);
    `;

export const StatsItem = styled.li`
    display: flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    border-top:1px solid black;
    `;    

export const Quantity = styled.span`
    font-weight:bold;
    margin-top:5px;
    `;