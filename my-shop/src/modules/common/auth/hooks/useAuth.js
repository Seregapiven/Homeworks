import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

export default function useAuth() {
    const value = useContext(AuthContext);

    if (value === null) {
        throw new Error('You should wrap you react tree in AuthProvider');
    }

    return value;
}