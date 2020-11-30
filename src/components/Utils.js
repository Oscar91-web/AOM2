import axios from 'axios';
import { snackbarQueue } from '../snackbarQueue';

const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json";

export function buildURL(resource, path, params) {
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

export const get = async (resource, path, params, name, fun) => {
    let url = buildURL(resource, path, params)
    console.log("*************** get ........................")
    console.log(url);
    try {
        const data = await axios.get(url);
        if (data != null) {
            let val = data.data[name];
            if (val) {
                console.log(val);
                fun(val);
            }
            else {
                console.log("no data for: " + name);
                snackbarQueue.notify({ title: `No data for ${name}` });
            }
        }
        else {
            console.log("no data")
            snackbarQueue.notify({ title: "No data!" });
        }
    }
    catch (err) {
        console.log("error keys:")
        Object.keys(err).forEach(key => {
            console.log("key: " + key, err[key]);
          });
        let msg;
        if (err.response) {
            msg = err.response.data;
        }
        else if (err.request) {
            msg = "request error";
        }
        else {
            msg = "unknown error";
        }
        snackbarQueue.notify({ title: msg });
        return [];
    }
}


export default buildURL;