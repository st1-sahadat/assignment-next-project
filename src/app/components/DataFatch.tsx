const DataFatch = async () => {
    try {
        const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
        return await res.json();
    } catch (error) {
        console.error('Error fetching fitlog data:', error);
        return null; // or throw error; or return [];
    }
};

export default DataFatch;