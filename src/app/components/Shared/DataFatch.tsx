
const DataFatch = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return await res.json();
};

export default DataFatch;