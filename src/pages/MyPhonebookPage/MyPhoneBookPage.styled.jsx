import styled from '@emotion/styled';
import contacts_banner from '../../shared/images/contacts_banner.png';
export const Background = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(207, 232, 252, 0.6951155462184874) 0%
    ),
    url(${contacts_banner});

  max-width: 1920px;
  height: 1280px;
`;
