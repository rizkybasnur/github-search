import { useEffect, useState } from "react";

export default function Dialog({ setDialog, dataId }) {
  const [datas, setDatas] = useState({});
  const token = "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";

  useEffect(() => {
    getGithub();
  }, []);

  const getGithub = async () => {
    try {
      let response = await fetch(
        `https://api.github.com/repositories/${dataId}`
      );
      let data = await response.json();
      setDatas(data);
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  const date = (v) => {
    var date = new Date(v);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };
  return (
    <div className="bg-black border-white radius-8 z-999 fixed w-300">
      <div className="flex justify-between pa-16 border-b-white align-center">
        <div></div>
        <div>Detail</div>
        <div
          onClick={() => {
            setDialog(false);
          }}
          className="cursor-pointer"
        >
          x
        </div>
      </div>
      <div className="pa-16">
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
