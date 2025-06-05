import { useSelector } from "react-redux";
import styled from "styled-components";

const DisplayUsers = () => {               // v 7
  const data = useSelector((state) => {    // v 7
    return state.users;
  });
  console.log(data);

  return (
    <Wrapper>
      {data.map((user, id) => {         // v 7
        return (
          <li key={id}>{user}</li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

export default DisplayUsers;
