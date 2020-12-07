import axios from 'axios';
import { snackbarQueue } from '../snackbarQueue';

const API_URL = "http://pluto.im.se:5280/JSONTRIMService/json";

const colorOk = "rgb(108, 240, 104)";
const colorWarning = "rgb(240, 231, 104)";
const colorAlert = "rgb(255, 103, 103)";
const colorGray = "rgb(176, 176, 176)";

export function buildURL(resource, path, params) {
    let ret = API_URL + "/" + resource + ((path) ? "/" + path : "");
    let qp = null;
    if (params) {
        qp = Object.keys(params).map(p => [p, params[p]]).filter(v => v[1]).map(v => v.join('=')).join('&');
    }
    if (qp) {
        ret = ret + "?" + qp;
    }
    return ret;
}

export const get = async (resource, path, params, name, fun) => {
    let url = buildURL(resource, path, params);
    try {
        const data = await axios.get(url);
        if (data != null) {
            let val = data.data[name];
            if (val !== undefined) {
                fun(val);
            }
            else {
                fun(data.data);
            }
        }
        else {
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

export function mapColor(count, colors) {
    let color;
    if (count !== undefined) {
        if (count >= colors.high) {
            color = colorAlert;
        }
        else if (count >= colors.medium) {
            color = colorWarning;
        }
        else if (count >= colors.low) {
            color = colorOk;
        }
        else {
            color = colorOk;
        }
        // color = colorWarning;
    }
    else {
        color = colorGray;
    }
    return color;
}

export default buildURL;