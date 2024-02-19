import useJsonFetch from "../hooks/useJsonFetch";

const Fetch = ({ url, opts }: { url: string; opts: string }) => {
  const [data, loading, error] = useJsonFetch(url, opts);
  return (
    <>
      {data && <div className="data">Data:{data.status}</div>}
      {loading && <div className="loading">Loading ...</div>}
      {error && <div className="error">Error: {error.message}</div>}
    </>
  );
  D;
};

export default Fetch;
