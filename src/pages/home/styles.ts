import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
`;

export const HomeContent = styled.div`
  min-width: 864px;
  max-width: 864px;
  margin: 0 auto;
`;

export const SearchForm = styled.form`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h6 {
      font-weight: 700;
      font-family: ${({ theme }) => theme['font-family']};
      font-size: ${({ theme }) => theme['size-18']}px;
      color: ${({ theme }) => theme['base-subtile']};
    }

    span {
      font-weight: 400;
      font-family: ${({ theme }) => theme['font-family']};
      font-size: ${({ theme }) => theme['size-14']}px;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input[type=text] {
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    font-weight: 400;
    font-family: ${({ theme }) => theme['font-family']};
    color: ${({ theme }) => theme['base-label']};

    width: 100%;
    height: 50px;
    border-radius: 6px;
    padding: 12px 16px 12px 16px;
    margin-top: 12px;
    outline: none;

    &:focus {
      border-color: ${({ theme }) => theme['blue']};
    }
  }
`;

export const Issues = styled.div`
  margin: 48px 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;