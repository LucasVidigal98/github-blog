import styled from 'styled-components';

export const Container = styled.div`
  min-width: 864px;
  max-width: 864px;
  height: 212px;
  border-radius: 10px;
  padding: 40px 32px;

  background-color: ${({ theme }) => theme['base-profile']};

  position: relative;
  margin: 0 auto;
  top: -80px;


  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const ProfileInfoConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-family: ${({ theme }) => theme['font-family']};
    font-size: ${({ theme }) => theme['size-16']}px;
    color: ${({ theme }) => theme['base-text']};
    font-weight: 400;
    line-height: 160%;
    margin-top: 8px;
  }
`;

export const ProfileInfoConatinerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: ${({ theme }) => theme['font-family']};
    font-size: ${({ theme }) => theme['size-24']}px;
    color: ${({ theme }) => theme['base-title']};
    font-weight: 700;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 700;
    font-family: ${({ theme }) => theme['font-family']};
    text-decoration: none;
    
    span {
      font-size: ${({ theme }) => theme['size-12']}px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.blue};
    }
  }
`;

export const ProfileInfoConatinerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 24px;
  margin-top: 24px;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      font-family: ${({ theme }) => theme['font-family']};
      font-size: ${({ theme }) => theme['size-16']}px;
      font-weight: 400;
      color: ${({ theme }) => theme['base-subtile']};
    }
  }
`;