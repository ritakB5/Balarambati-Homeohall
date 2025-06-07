export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };
};

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const headers = {
    ...getAuthHeaders(),
    ...(options.headers || {})
  };

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include' // Important for cookies
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Something went wrong');
  }

  return response.json();
};

export const api = {
  get: (url: string) => fetchWithAuth(url, { method: 'GET' }),
  post: (url: string, data: any) => 
    fetchWithAuth(url, { 
      method: 'POST', 
      body: JSON.stringify(data) 
    }),
  put: (url: string, data: any) => 
    fetchWithAuth(url, { 
      method: 'PUT', 
      body: JSON.stringify(data) 
    }),
  delete: (url: string) => 
    fetchWithAuth(url, { method: 'DELETE' }),
};
