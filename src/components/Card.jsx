import styled from "styled-components";

const StlyedCard = styled.div`
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 280px;
    background-color: white;
    text-align: center;
`;

const Avatar = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 12px;
    display: center;
`;

const Name = styled.h2`
`;

const Email = styled.h4`
`;

function Card() {
    const name = "jayde";
    const email = "jayde@prototype.com"
    return (
        <StlyedCard>
            <Avatar
                src={`https://api.dicebear.com/9.x/dylan/svg?seed=${name}`}
                alt="this is random profile image" />
            <Name>{name}</Name>
            <Email>{email}</Email>
        </StlyedCard>
    );
}

export default Card;