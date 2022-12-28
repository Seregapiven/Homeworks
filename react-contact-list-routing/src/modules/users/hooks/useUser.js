import api from "../../../api";
import { useState, useEffect } from "react";

const EMPTY_USER = {
  name: '',
  surname: '',
  email: '',
}

export default function useUser(id) {
  const [user, setUser] = useState(EMPTY_USER);

  useEffect(() => {
    if (isNaN(id)) {
      setUser(EMPTY_USER);
    }
    else {
      api.get('users/' + id).then(({ data }) => setUser(data))
    }

  }, [id]);

  function changeUser(diff){
    setUser({...user, ...diff})
  }

  function saveUser(user) {
    if (user.id) {
      return updateUser(user)
    } else {
      return createUser(user)
    }
  }

  function updateUser(user) {
    return api.put('users/' + user.id, user);
  }

  function createUser(user) {
    return api.post('users/', user);
  }

  return {
    user,
    changeUser,
    saveUser

  }
}