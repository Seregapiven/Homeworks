import useAuth from './useAuth';

export default function useUser() {
    const { user } = useAuth();

    return user;
}