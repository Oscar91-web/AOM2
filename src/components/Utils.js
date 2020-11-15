const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json";

function buildURL(resource, path, params) {
    let ret = API_URL + "/" + resource + ((path) ? "/" + path : "");
    let qp = null;
    if (params) {
        qp = Object.keys(params).map(p => [p, params[p]]).filter(v => v[1]).map(v => v.join('=')).join('&');
    }
    if (qp) {
        ret = ret + "?" + qp;
    }
    console.log("built URL: " + ret);
    return ret;
}


export default buildURL;