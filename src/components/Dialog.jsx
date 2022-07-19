import { useEffect, useState } from "react";

export default function Dialog({ setDialog, dataId }) {
  const [datas, setDatas] = useState({});
  const token = "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";

  useEffect(() => {
    getGithub();
  }, []);

  const getGithub = async () => {
    try {
      // setLoading(true);
      let response = await fetch(
        `https://api.github.com/repositories/${dataId}`
      );
      let data = await response.json();
      setDatas(data);
    } catch (err) {
      console.error(err);
      // Handle errors here
    } finally {
      // setLoading(false);
    }
    // fetch(`https://api.github.com/repositories/${dataId}`, {
    //   headers: {
    //     Authorization: `token ${token}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => setDatas(data));
  };

  const date = (v) => {
    var date = new Date(v);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        border: "1px solid white",
        borderRadius: "8px",
        zIndex: "999",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
          alignItems: "center",
          borderBottom: "1px solid white",
        }}
      >
        <div></div>
        <div>Detail</div>
        <div
          onClick={() => {
            setDialog(false);
          }}
          style={{ cursor: "pointer" }}
        >
          x
        </div>
      </div>
      <div style={{ padding: "16px" }}>
        {datas && (
          <div>
            <div>Id: {datas.id}</div>
            <div>Repository name: {datas.name}</div>
            <div>
              Languange: <span>{datas.language ?? "not specified"}</span>
            </div>
            <div>Description: {datas.description}</div>
            <div>Date created: {date(datas.created_at)}</div>
            <div>Last updated: {date(datas.updated_at)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
