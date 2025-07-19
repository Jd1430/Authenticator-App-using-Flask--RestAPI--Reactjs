const API_BASE_URL = 'https://authenticator-app-using-flask-restapi.onrender.com';

export const databaseAPI = {
  // Get complete database information
  getDatabaseInfo: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/database/info`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching database info:', error);
      throw error;
    }
  },

  // Get database summary
  getDatabaseSummary: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/database/summary`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching database summary:', error);
      throw error;
    }
  },

  // Get specific table information
  getTableInfo: async (tableName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/database/tables/${tableName}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching table info for ${tableName}:`, error);
      throw error;
    }
  },

  // Get database statistics
  getStatistics: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/database/statistics`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching database statistics:', error);
      throw error;
    }
  },

  // Export database to JSON
  exportDatabase: async (filename = 'database_export.json') => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/database/export`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error exporting database:', error);
      throw error;
    }
  }
}; 
