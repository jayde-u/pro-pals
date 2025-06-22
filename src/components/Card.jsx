import styled from "styled-components";

const StyledCard  = styled.div`
    position: relative;
    overflow: hidden;

    border: 0.5px solid #35353585;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(160, 160, 160, 0.1);

    width: 260px;
    height: 160px;
    background-color: #535353;
`;

const BlurBackground = styled.div`
    position: absolute;
    z-index: 1;

    background-image: url(${props => props.image});
    background-size: contain;
    background-position: center;
    filter: blur(8px) brightness(70%);
    top: 0; left: 0; right: 0; bottom: 0;
    transform: scale(1.2);
`;


const Avatar = styled.img`
    position: relative;
    z-index: 1;
    top: 10%; left: 5%;

    width: 30%;
    border: 1px solid rgba(255, 255, 255, 0.48);
    border-radius: 50%;
`;

const Info = styled.div`
    position: relative;
    z-index: 1;
    top: 12%; left: 7%;
    color: white;
`

const Name = styled.div`
    font-size: 1.2em;
    font-weight: bold;
`;

const Email = styled.div`
    font-size: 0.9em;
`;

function Card({ id, name, email }) {
    const avatarUrl = `https://api.dicebear.com/9.x/dylan/svg?seed=${id}`;
    return (
        <StyledCard>
            <BlurBackground image={avatarUrl} />
            <Avatar
                src={avatarUrl}
                alt="this is random profile image" />
            <Info>
                <Name>{name}</Name>
                <Email>{email}</Email>
            </Info>
        </StyledCard>
    );
}

export default Card;