import api from "../../../api";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser} from "../../../store/actions/users";

const EMPTY_USER = {
  name: '',
  surname: '',
  email: '',
}

export default function useUser(id) {
  const [user, setUser] = useState(EMPTY_USER);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isNaN(id)) {
      setUser(EMPTY_USER);
    }
    else {
      api.get('users/' + id).then(({ data }) => setUser(data))
    }

  }, [id]);


  function saveUser(user) {
    if (user.id) {
      return dispatch(updateUser(user));
    } else {
      return dispatch(addUser(user));
    };
  };

  return {
    user,
    saveUser
  }
}