import { useState, useEffect} from "react";
import api from "../../../api";

export default function useUsersList () {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.get('users').then(({ data }) => setList(data)).finally(()=> setLoading(false))
  }, []);

  function deleteUser(id) {
    setLoading(true)
    api.delete('users/' + id).then(() => {
      setList(list.filter((item) => item.id !== id));
    }).finally(()=> setLoading(false));
  }
  return { list, deleteUser, loading };
}