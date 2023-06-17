import styled from 'styled-components';

export const Container = styled.div`
  width: 416px;
  height: 260px;
  border-radius: 10px;
  padding: 32px 32px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;

  background-color: ${({ theme }) => theme['base-post']};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme['base-label']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h6 {
      font-weight: 700;
      font-family: ${({ theme }) => theme['font-family']};
      font-size: ${({ theme }) => theme['size-20']}px;
      color: ${({ theme }) => theme['base-title']};
    }

    span {
      font-weight: 400;
      font-family: ${({ theme }) => theme['font-family']};
      font-size: ${({ theme }) => theme['size-14']}px;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  p {
    font-weight: 400;
    font-family: ${({ theme }) => theme['font-family']};
    font-size: ${({ theme }) => theme['size-16']}px;
    color: ${({ theme }) => theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;