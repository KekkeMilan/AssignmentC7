import create from 'zustand';
import axios from 'axios';

interface AuthState {
  username: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  username: null,
  isAuthenticated: false,
  login: async (username: string, password: string) => {
    try {
      // Dummy server request
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        username,
        password,
      });

      // On successful login (using dummy condition)
      if (response.status === 201) {
        set({ username, isAuthenticated: true });
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  },
  logout: () => set({ username: null, isAuthenticated: false }),
}));