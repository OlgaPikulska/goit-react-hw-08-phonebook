import styled from "styled-components";
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { logOut } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";

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
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());


  return <Container>
    <Nav>
      {!isLoggedIn &&
        <>
          <button onClick={() => navigate('login')}>Log in</button>
          <button onClick={() => navigate('register')}>Register</button>
        </>
      }
      {isLoggedIn && <button onClick={handleLogOut}>Log out</button>}
    </Nav>
    <Outlet />
  </Container>;
};