import styled from "@emotion/styled";
import me from "../images/marcin.jpg"

const ProfilePic = styled.img`
    border-radius: 50%;
    height: 128px;
    width: 128px;

    margin-top: 0;
    margin-bottom: 24px;
`

ProfilePic.defaultProps = {
    src: me
}

export default ProfilePic