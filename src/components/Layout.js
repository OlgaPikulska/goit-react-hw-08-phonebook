import styled from "styled-components";
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Container = styled.main`
display: grid;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid black;
  margin-bottom: 100px;
  padding-right: 50px;
`
export const Layout = () => {
  const navigate = useNavigate()
  return <Container>
    <Nav>
      <button onClick={() => navigate('login')}>Sign in</button>
      <button onClick={() => navigate('register')}>Register</button>
      <button onClick={() => navigate('')}>Sign out</button>
    </Nav>
    <Outlet />
  </Container>;
};