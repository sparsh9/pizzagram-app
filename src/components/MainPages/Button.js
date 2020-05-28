import styled from "styled-components";


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.5;
background: 0.5rem solid var(--mainWhite);
color:var(--mainWhite);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
background:var(--mainWhite);
color:var(--tomatoRed);
}
$focus{
outline:none;
}
`;

export const DetailButton = styled.button`
text-transform:capitalize;
font-size: 1.5;
background: 0.5rem solid var(--tomatoRed);
color:var(--tomatoRed);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
background:var(--tomatoRed);
color:var(--mainWhite);
}
$focus{
outline:none;
}
`;

export const HeadingButton = styled.button`
text-transform:capitalize;
font-size: 40px;
text-align: center;
background: 0.5rem solid var(--tomatoRed);
color:var(--tomatoRed);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
margin-right:9rem;
margin-left:9rem;
cursor: pointer;
margin-top:30px;
margin-bottom:30px
transition:all 0.5s ease-in-out;
&:hover{
background:var(--tomatoRed);
color:var(--mainWhite);
}
$focus{
outline:none;
}
`;