import axios from 'axios';
import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const BASE_URL = 'http://localhost:3000';

  async function login(username, password) {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        username,
        password
      });
      
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/logout`);
      setUser(null);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    loading,
    login,
    logout,
  };
}