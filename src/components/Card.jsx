import { useState } from "react";
import styled from "styled-components";

const FlipCard = styled.div`
    position: relative;

    transition: all 1s ease;
    transform-style: preserve-3d;
    &:hover {
        transform: perspective(500px) rotateY(180deg);
    }
`

const CardStyle = styled.div`
    width: 280px;
    height: 170px;
    backface-visibility: hidden;

    border: 0.5px solid #17171785;
    border-radius: 10px;
    background-color: #535353;
    box-shadow: 0 4px 12px rgba(92, 92, 92, 0.1);

    overflow: hidden;
`

const CardFront  = styled(CardStyle)`
    position: absolute;
    z-index: 1;
`;

const CardBack  = styled(CardStyle)`
    position: relative;
    z-index: 0;
    transform: rotateY(180deg);
`

const BlurBackground = styled.div`
    position: absolute;
    z-index: 2;

    background-image: url(${props => props.image});
    background-size: contain;
    background-position: center;
    filter: blur(8px) brightness(70%);
    top: 0; left: 0; right: 0; bottom: 0;
    transform: scale(1.2);
`;

const Avatar = styled.img`
    position: relative;
    z-index: 3;
    top: 0.7em; 
    left: 5%;

    width: 30%;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
`;

const Info = styled.div`
    position: relative;
    z-index: 3;

    width: 85%;
    overflow: scroll;
    color: white;
`;

const InfoFront = styled(Info)`
    top: 10%;
    left: 7%;
`

const InfoBack = styled(Info)`
    top: 16%;
    left: 8%;
`

const Name = styled.div`
    font-size: 1.2em;
    font-weight: bold;
`;

const InfoText = styled.div`
    font-size: 0.9em;
`;

function Card({ pal }) {
    const [isHovered, setIsHovered] = useState(false);
    const avatarUrl = `https://api.dicebear.com/9.x/dylan/svg?seed=${pal.id}`;
    
    return (
        <FlipCard 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={isHovered ? "flip" : ""}>
            <CardFront>
                <BlurBackground image={avatarUrl} />
                <Avatar
                    src={avatarUrl}
                    alt="this is random profile image" />
                <InfoFront>
                    <Name>{pal.name}</Name>
                    <InfoText>{pal.email}</InfoText>
                </InfoFront>
            </CardFront>
            <CardBack>
                <BlurBackground image={avatarUrl} />
                <InfoBack>
                    <Name>{pal.name}</Name>
                    <hr style={{ border: 'none', borderTop: '0.3px solid white' }} />    
                    <InfoText>{pal.nat}</InfoText>
                    <InfoText>{pal.dob}</InfoText>
                    <InfoText>{pal.phone}</InfoText>
                    <InfoText>{pal.email}</InfoText>
                </InfoBack>
            </CardBack>
        </FlipCard>
    );
}

export default Card;