import { useState, useEffect} from "react";
import api from "../../../api";

export default function useUsersList () {
  const [list, setList] = useState([]);
  const [isloading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    api.get('users').then(({ data }) => setList(data)).finally(()=> setIsLoading(false))
  }, []);

  function deleteUser(id) {
    setIsLoading(true)
    api.delete('users/' + id).then(() => {
      setList(list.filter((item) => item.id !== id));
    }).finally(()=> setIsLoading(false));
  }
  return { list, deleteUser, isloading };
}