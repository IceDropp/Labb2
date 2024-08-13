// src/components/GithubProjects.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/IceDropp/repos');
        setProjects(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Github Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description || 'No description available'}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubProjects;
