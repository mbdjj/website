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
    box-shadow: 0 0 10px 0 rgb(22, 25, 29);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      box-shadow: 0 0 10px 0 snow;
    }
  }
`;

ProfilePic.defaultProps = {
  src: me,
};

export default ProfilePic;
