export const fetchF = async (url, options = {}) => {
  const token = localStorage.getItem("accessToken");

  const fetchOptions = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  const res = await fetch(`http://localhost:3000/api/${url}`, fetchOptions);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "API error");
  }
  return res.json();
};
