import styled from "@emotion/styled";
import me from "../images/marcin.jpg";

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 128px;
  width: 128px;
  transition: box-shadow 0.3s;

  margin-top: 0;
  margin-bottom: 24px;

  &:hover {
    box-shadow: 0 2px 40px -4px #888;
  }
`;

ProfilePic.defaultProps = {
  src: me,
};

export default ProfilePic;
