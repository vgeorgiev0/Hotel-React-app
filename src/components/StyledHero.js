import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

const RoomImage = styled.header`
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: auto;
  min-height: 88vh;
`;

export default RoomImage;
