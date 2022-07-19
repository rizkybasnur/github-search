import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Dialog from "./components/Dialog";
import "./App.css";
import Pagination from "./components/Pagination";
import Card from "./components/Card";
import FormInput from "./components/FormInput";
import Suggestion from "./components/Suggestion";
import Loading from "./components/Loading";
import Select from "./components/Select";
import Banner from "./components/Banner";
import Info from "./components/Info";

function App() {
  const [count, setCount] = useState("");
  const [page, setPage] = useState("");
  const [query, setQuery] = useState("");
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [dataId, setDataId] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = "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";

  useEffect(() => {
    if (query) getSearch();
  }, [query]);

  useEffect(() => {
    if (page) getGithub();
  }, [page]);

  useEffect(() => {
    if (count) getGithub();
  }, [count]);

  const getSearch = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        `https://api.github.com/search/repositories?q=${query}&per_page=5`
      );
      let data = await response.json();
      setSearch(data?.items);
    } catch (err) {
      console.error(err);
      // Handle errors here
    } finally {
      setLoading(false);
    }
  };

  const getGithub = async () => {
    if (page === "") {
      setPage(1);
    }
    if (count === "") {
      setCount(5);
    }

    try {
      setLoading(true);
      let response = await fetch(
        `https://api.github.com/search/repositories?q=${query}&per_page=${count}&page=${page}`
      );
      let data = await response.json();
      setDatas(data?.items);
    } catch (err) {
      console.error(err);
      // Handle errors here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Banner reactLogo={reactLogo} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch([]);
          getGithub();
        }}
      >
        <FormInput query={query} setQuery={setQuery} />
      </form>

      <Loading loading={loading} />

      {search &&
        !loading &&
        search.map((e) => {
          return <Suggestion e={e} setQuery={setQuery} key={e.id} />;
        })}

      {datas && <Info query={query} setCount={setCount} />}

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {datas &&
          datas.map((data) => {
            return (
              <Card
                data={data}
                setDialog={setDialog}
                setDataId={setDataId}
                key={data.id}
              />
            );
          })}
      </div>

      {datas.length > 0 && (
        <Pagination datas={datas} page={page} setPage={setPage} />
      )}

      {dialog && <Dialog setDialog={setDialog} dataId={dataId} />}
    </div>
  );
}

export default App;
