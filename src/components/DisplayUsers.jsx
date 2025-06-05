import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slice/UserSlice";


const DisplayUsers = () => {               // v 7

  const dispatch = useDispatch();

  const data = useSelector((state) => {    // v 7
    return state.users;
  });
  // console.log(data);

  const deleteUser = (id) => {
    dispatch(removeUser(id))
  }

  return (
    <Wrapper>
      {data.map((user, id) => {         // v 7
        return (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={() => deleteUser(id)}>
              <MdDelete className="delete-icon"/>
            </button>
          </li>
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
