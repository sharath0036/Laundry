import ConfigJson from "../../../../Config.json" with { type: "json" };
// import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    // let LocalBodyObject = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/bin/${LocalroutePath}/${jVarLocalBranchName}/DataOnly`
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };