import styled from 'styled-components';

export const Container = styled.div`
  min-width: 864px;
  max-width: 864px;
  height: 168px;
  border-radius: 10px;
  padding: 40px 32px;

  background-color: ${({ theme }) => theme['base-profile']};

  position: relative;
  margin: 0 auto;
  top: -80px;


  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: start;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-family: ${({ theme }) => theme['font-family']};
    font-size: ${({ theme }) => theme['size-24']}px;
    color: ${({ theme }) => theme['base-title']};
    margin-top: 20px;
  }
`;

export const LinkConetnt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

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

export const PostInfoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 32px;
  margin-top: 8px;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      font-family: ${({ theme }) => theme['font-family']};
      font-size: ${({ theme }) => theme['size-16']}px;
      font-weight: 400;
      color: ${({ theme }) => theme['base-span']};
    }
  }
`;