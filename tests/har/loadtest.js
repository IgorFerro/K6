// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {};

export default function main() {
  let response;

  group("page_3 - https://app.k6.io/account/login", function () {
    response = http.get("https://app.k6.io/account/login", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "upgrade-insecure-requests": "1",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "navigate",
        "sec-fetch-user": "?1",
        "sec-fetch-dest": "document",
        referer: "https://k6.io/",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-BR,pt;q=0.9",
        cookie:
          "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
      },
    });

    response = http.get("https://app.k6.io/3.styles.css", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        accept: "text/css,*/*;q=0.1",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-dest": "style",
        referer: "https://app.k6.io/account/login",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-BR,pt;q=0.9",
        cookie:
          "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
      },
    });

    response = http.get(
      "https://app.k6.io/static/js/runtime~main.0cf5dd85.js",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          referer: "https://app.k6.io/account/login",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
          cookie:
            "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
        },
      }
    );

    response = http.get("https://app.k6.io/static/js/3.d6033462.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        accept: "*/*",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-dest": "script",
        referer: "https://app.k6.io/account/login",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-BR,pt;q=0.9",
        cookie:
          "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
      },
    });

    response = http.get("https://app.k6.io/static/js/main.0f073785.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        accept: "*/*",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-dest": "script",
        referer: "https://app.k6.io/account/login",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-BR,pt;q=0.9",
        cookie:
          "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
      },
    });

    response = http.get("https://www.google-analytics.com/analytics.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        Referer: "https://app.k6.io/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      },
    });

    response = http.get("https://jsl2jdg749ks.statuspage.io/embed/script.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        accept: "*/*",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-dest": "script",
        referer: "https://app.k6.io/",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-BR,pt;q=0.9",
      },
    });

    response = http.get("https://edge.fullstory.com/s/fs.js", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        origin: "https://app.k6.io",
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        accept: "*/*",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "script",
        referer: "https://app.k6.io/",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-BR,pt;q=0.9",
      },
    });

    response = http.get(
      "https://app.k6.io/static/media/unauth-image.ed25bef3.png",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          referer: "https://app.k6.io/account/login",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
          cookie:
            "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
        },
      }
    );

    response = http.get(
      "https://app.k6.io/static/fonts/TTNormsPro-Medium.woff2",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          origin: "https://app.k6.io",
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          referer: "https://app.k6.io/account/login",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
          cookie:
            "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
        },
      }
    );

    response = http.get(
      "https://app.k6.io/static/fonts/TTNormsPro-Bold.woff2",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          origin: "https://app.k6.io",
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          referer: "https://app.k6.io/account/login",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
          cookie:
            "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
        },
      }
    );

    response = http.get(
      "https://app.k6.io/static/fonts/TTNormsPro-Regular.woff2",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          origin: "https://app.k6.io",
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          referer: "https://app.k6.io/account/login",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
          cookie:
            "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
        },
      }
    );

    response = http.get(
      "https://www.google-analytics.com/plugins/ua/ecommerce.js",
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          accept: "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          referer: "https://app.k6.io/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
        },
      }
    );

    response = http.post(
      "https://www.google-analytics.com/j/collect?v=1&_v=j87&a=848653344&t=pageview&_s=1&dl=https%3A%2F%2Fapp.k6.io%2Faccount%2Flogin&dr=https%3A%2F%2Fk6.io%2F&dp=%2Faccount%2Flogin&ul=pt-br&de=UTF-8&dt=app.k6.io%20-%20Performance%20testing%20for%20developers%2C%20like%20unit-testing%2C%20for%20performance&sd=24-bit&sr=1366x768&vp=794x625&je=0&_u=CCCAAAIRAAAAAC~&jid=&gjid=&cid=1725087866.1613259489&tid=UA-158196577-1&_gid=187480816.1613259489&_slc=1&z=59051613",
      null,
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "content-type": "text/plain",
          accept: "*/*",
          origin: "https://app.k6.io",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://app.k6.io/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
        },
      }
    );

    response = http.post(
      "https://rs.fullstory.com/rec/page",
      '{"OrgId":"1AHVA","UserId":"","Url":"https://app.k6.io/account/login","Base":"https://app.k6.io/account/login","Width":794,"Height":625,"ScreenWidth":1366,"ScreenHeight":768,"Referrer":"https://k6.io/","Preroll":3761,"Doctype":"<!DOCTYPE html>","CompiledTimestamp":1611029117}',
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "content-type": "text/plain",
          accept: "*/*",
          origin: "https://app.k6.io",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://app.k6.io/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
        },
      }
    );

    response = http.post(
      "https://rs.fullstory.com/rec/bundle?OrgId=1AHVA&UserId=6111556845420544&SessionId=5407426686468096&PageId=5469266229575680&Seq=1&PageStart=1613259513018&PrevBundleTime=0&LastActivity=688&IsNewSession=true",
      '{"When":7,"Seq":1,"Evts":[{"Kind":25,"Args":["https://app.k6.io/account/login","<!DOCTYPE html>","https://app.k6.io/account/login","https://k6.io/"],"When":7},{"Kind":8198,"Args":[false,1],"When":7},{"Kind":20,"Args":[],"When":7},{"Kind":58,"Args":[0,true,1,true,2,true,5,true,7,true],"When":617},{"Kind":57,"Args":[6,4294705152,67215940,50542500],"When":618},{"Kind":57,"Args":[7,1613259508085],"When":618},{"Kind":58,"Args":[3,true],"When":619},{"Kind":52,"Args":[],"When":622},{"Kind":66,"Args":["any-pointer","fine"],"When":623},{"Kind":66,"Args":["any-hover","hover"],"When":623},{"Kind":66,"Args":["pointer","fine"],"When":623},{"Kind":66,"Args":["prefers-color-scheme","light"],"When":623},{"Kind":48,"Args":["warn","\\"Mixpanel integration is enabled, but mixpanel was not found on page\\""],"When":627},{"Kind":2,"Args":[-1,-1,["<#document","[","<!DOCTYPE",":name","html",":publicId","",":systemId",6,"<HTML",":lang","en",1,"<HEAD",1,"<META",":charset","utf-8","<LINK",":rel","shortcut icon",":href","https://app.k6.io/favicon.ico",15,3,"theme-color",":content","#000000","<STYLE",1,"<#text","@font-face{font-family:TTNormsPro;font-weight:600;src:url(/static/fonts/TTNormsPro-Bold.woff2) format(\'woff2\'),url(/static/fonts/TTNormsPro-Bold.woff) format(\'woff\')}@font-face{font-family:TTNormsPro;font-weight:500;src:url(/static/fonts/TTNormsPro-Medium.woff2) format(\'woff2\'),url(/static/fonts/TTNormsPro-Medium.woff) format(\'woff\')}@font-face{font-family:TTNormsPro;font-weight:400;src:url(/static/fonts/TTNormsPro-Regular.woff2) format(\'woff2\'),url(/static/fonts/TTNormsPro-Regular.woff) format(\'woff\')}","]","<TITLE",[29,2],"app.k6.io - Performance testing for developers, like unit-testing, for performance",32,18,21,"/3.styles.css",19,"stylesheet",28,":data-styled",6,":data-styled-version","4.4.1",[29,2],6,32,28,":data-jss",6,":data-meta","MuiButtonBase",[29,2],"\\n.MuiButtonBase-root {\\n  color: inherit;\\n  border: 0;\\n  cursor: pointer;\\n  margin: 0;\\n  display: inline-flex;\\n  outline: 0;\\n  padding: 0;\\n  position: relative;\\n  align-items: center;\\n  user-select: none;\\n  border-radius: 0;\\n  vertical-align: middle;\\n  -moz-appearance: none;\\n  justify-content: center;\\n  text-decoration: none;\\n  background-color: transparent;\\n  -webkit-appearance: none;\\n  -webkit-tap-highlight-color: transparent;\\n}\\n.MuiButtonBase-root::-moz-focus-inner {\\n  border-style: none;\\n}\\n.MuiButtonBase-root.Mui-disabled {\\n  cursor: default;\\n  pointer-events: none;\\n}\\n@media print {\\n  .MuiButtonBase-root {\\n    -webkit-print-color-adjust: exact;\\n  }\\n}\\n",[51,2],[53,2],55,"MuiButton",[29,2],"\\n.MuiButton-root {\\n  color: rgba(0, 0, 0, 0.87);\\n  padding: 6px 16px;\\n  font-size: 0.875rem;\\n  min-width: 64px;\\n  box-sizing: border-box;\\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  font-family: TTNormsPro,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\\n  font-weight: 500;\\n  line-height: 1.75;\\n  border-radius: 4px;\\n  text-transform: uppercase;\\n}\\n.MuiButton-root:hover {\\n  text-decoration: none;\\n  background-color: rgba(0, 0, 0, 0.04);\\n}\\n.MuiButton-root.Mui-disabled {\\n  color: rgba(0, 0, 0, 0.26);\\n}\\n@media (hover: none) {\\n  .MuiButton-root:hover {\\n    background-color: transparent;\\n  }\\n}\\n.MuiButton-root:hover.Mui-disabled {\\n  background-color: transparent;\\n}\\n.MuiButton-label {\\n  width: 100%;\\n  display: inherit;\\n  align-items: inherit;\\n  justify-content: inherit;\\n}\\n.MuiButton-text {\\n  padding: 6px 8px;\\n}\\n.MuiButton-textPrimary {\\n  color: #7d64ff;\\n}\\n.MuiButton-textPrimary:hover {\\n  background-color: rgba(125, 100, 255, 0.04);\\n}\\n@media (hover: none) {\\n  .MuiButton-textPrimary:hover {\\n    background-color: transparent;\\n  }\\n}\\n.MuiButton-textSecondary {\\n  color: #4badcf;\\n}\\n.MuiButton-textSecondary:hover {\\n  background-color: rgba(75, 173, 207, 0.04);\\n}\\n@media (hover: none) {\\n  .MuiButton-textSecondary:hover {\\n    background-color: transparent;\\n  }\\n}\\n.MuiButton-outlined {\\n  border: 1px solid rgba(0, 0, 0, 0.23);\\n  padding: 5px 15px;\\n}\\n.MuiButton-outlined.Mui-disabled {\\n  border: 1px solid rgba(0, 0, 0, 0.12);\\n}\\n.MuiButton-outlinedPrimary {\\n  color: #7d64ff;\\n  border: 1px solid rgba(125, 100, 255, 0.5);\\n}\\n.MuiButton-outlinedPrimary:hover {\\n  border: 1px solid #7d64ff;\\n  background-color: rgba(125, 100, 255, 0.04);\\n}\\n@media (hover: none) {\\n  .MuiButton-outlinedPrimary:hover {\\n    background-color: transparent;\\n  }\\n}\\n.MuiButton-outlinedSecondary {\\n  color: #4badcf;\\n  border: 1px solid rgba(75, 173, 207, 0.5);\\n}\\n.MuiButton-outlinedSecondary:hover {\\n  border: 1px solid #4badcf;\\n  background-color: rgba(75, 173, 207, 0.04);\\n}\\n.MuiButton-outlinedSecondary.Mui-disabled {\\n  border: 1px solid rgba(0, 0, 0, 0.26);\\n}\\n@media (hover: none) {\\n  .MuiButton-outlinedSecondary:hover {\\n    background-color: transparent;\\n  }\\n}\\n.MuiButton-contained {\\n  color: rgba(0, 0, 0, 0.87);\\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);\\n  background-color: #e0e0e0;\\n}\\n.MuiButton-contained:hover {\\n  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);\\n  background-color: #d5d5d5;\\n}\\n.MuiButton-contained.Mui-focusVisible {\\n  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);\\n}\\n.MuiButton-contained:active {\\n  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);\\n}\\n.MuiButton-contained.Mui-disabled {\\n  color: rgba(0, 0, 0, 0.26);\\n  box-shadow: none;\\n  background-color: rgba(0, 0, 0, 0.12);\\n}\\n@media (hover: none) {\\n  .MuiButton-contained:hover {\\n    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);\\n    background-color: #e0e0e0;\\n  }\\n}\\n.MuiButton-contained:hover.Mui-disabled {\\n  background-color: rgba(0, 0, 0, 0.12);\\n}\\n.MuiButton-containedPrimary {\\n  color: #fff;\\n  background-color: #7d64ff;\\n}\\n.MuiButton-containedPrimary:hover {\\n  background-color: rgb(87, 70, 178);\\n}\\n@media (hover: none) {\\n  .MuiButton-containedPrimary:hover {\\n    background-color: #7d64ff;\\n  }\\n}\\n.MuiButton-containedSecondary {\\n  color: #fff;\\n  background-color: #4badcf;\\n}\\n.MuiButton-containedSecondary:hover {\\n  background-color: rgb(52, 121, 144);\\n}\\n@media (hover: none) {\\n  .MuiButton-containedSecondary:hover {\\n    background-color: #4badcf;\\n  }\\n}\\n.MuiButton-disableElevation {\\n  box-shadow: none;\\n}\\n.MuiButton-disableElevation:hover {\\n  box-shadow: none;\\n}\\n.MuiButton-disableElevation.Mui-focusVisible {\\n  box-shadow: none;\\n}\\n.MuiButton-disableElevation:active {\\n  box-shadow: none;\\n}\\n.MuiButton-disableElevation.Mui-disabled {\\n  box-shadow: none;\\n}\\n.MuiButton-colorInherit {\\n  color: inherit;\\n  border-color: currentColor;\\n}\\n.MuiButton-textSizeSmall {\\n  padding: 4px 5px;\\n  font-size: 0.8125rem;\\n}\\n.MuiButton-textSizeLarge {\\n  padding: 8px 11px;\\n  font-size: 0.9375rem;\\n}\\n.MuiButton-outlinedSizeSmall {\\n  padding: 3px 9px;\\n  font-size: 0.8125rem;\\n}\\n.MuiButton-outlinedSizeLarge {\\n  padding: 7px 21px;\\n  font-size: 0.9375rem;\\n}\\n.MuiButton-containedSizeSmall {\\n  padding: 4px 10px;\\n  font-size: 0.8125rem;\\n}\\n.MuiButton-containedSizeLarge {\\n  padding: 8px 22px;\\n  font-size: 0.9375rem;\\n}\\n.MuiButton-fullWidth {\\n  width: 100%;\\n}\\n.MuiButton-startIcon {\\n  display: inherit;\\n  margin-left: -4px;\\n  margin-right: 8px;\\n}\\n.MuiButton-startIcon.MuiButton-iconSizeSmall {\\n  margin-left: -2px;\\n}\\n.MuiButton-endIcon {\\n  display: inherit;\\n  margin-left: 8px;\\n  margin-right: -4px;\\n}\\n.MuiButton-endIcon.MuiButton-iconSizeSmall {\\n  margin-right: -2px;\\n}\\n.MuiButton-iconSizeSmall > *:first-child {\\n  font-size: 18px;\\n}\\n.MuiButton-iconSizeMedium > *:first-child {\\n  font-size: 20px;\\n}\\n.MuiButton-iconSizeLarge > *:first-child {\\n  font-size: 22px;\\n}\\n",[60,3],[54,2],"MuiInputBase",[29,2],"\\n@-webkit-keyframes mui-auto-fill {}\\n@-webkit-keyframes mui-auto-fill-cancel {}\\n.MuiInputBase-root {\\n  color: rgba(0, 0, 0, 0.87);\\n  cursor: text;\\n  display: inline-flex;\\n  position: relative;\\n  font-size: 1rem;\\n  box-sizing: border-box;\\n  align-items: center;\\n  font-family: TTNormsPro,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\\n  font-weight: 400;\\n  line-height: 1.1876em;\\n}\\n.MuiInputBase-root.Mui-disabled {\\n  color: rgba(0, 0, 0, 0.38);\\n  cursor: default;\\n}\\n.MuiInputBase-multiline {\\n  padding: 6px 0 7px;\\n}\\n.MuiInputBase-multiline.MuiInputBase-marginDense {\\n  padding-top: 3px;\\n}\\n.MuiInputBase-fullWidth {\\n  width: 100%;\\n}\\n.MuiInputBase-input {\\n  font: inherit;\\n  color: currentColor;\\n  width: 100%;\\n  border: 0;\\n  height: 1.1876em;\\n  margin: 0;\\n  display: block;\\n  padding: 6px 0 7px;\\n  min-width: 0;\\n  background: none;\\n  box-sizing: content-box;\\n  animation-name: mui-auto-fill-cancel;\\n  letter-spacing: inherit;\\n  -webkit-tap-highlight-color: transparent;\\n}\\n.MuiInputBase-input::-webkit-input-placeholder {\\n  color: currentColor;\\n  opacity: 0.42;\\n  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n}\\n.MuiInputBase-input::-moz-placeholder {\\n  color: currentColor;\\n  opacity: 0.42;\\n  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n}\\n.MuiInputBase-input:-ms-input-placeholder {\\n  color: currentColor;\\n  opacity: 0.42;\\n  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n}\\n.MuiInputBase-input::-ms-input-placeholder {\\n  color: currentColor;\\n  opacity: 0.42;\\n  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n}\\n.MuiInputBase-input:focus {\\n  outline: 0;\\n}\\n.MuiInputBase-input:invalid {\\n  box-shadow: none;\\n}\\n.MuiInputBase-input::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n.MuiInputBase-input.Mui-disabled {\\n  opacity: 1;\\n}\\n.MuiInputBase-input:-webkit-autofill {\\n  animation-name: mui-auto-fill;\\n  animation-duration: 5000s;\\n}\\nlabel[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {\\n  opacity: 0 !important;\\n}\\nlabel[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {\\n  opacity: 0 !important;\\n}\\nlabel[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {\\n  opacity: 0 !important;\\n}\\nlabel[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {\\n  opacity: 0 !important;\\n}\\nlabel[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {\\n  opacity: 0.42;\\n}\\nlabel[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {\\n  opacity: 0.42;\\n}\\nlabel[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {\\n  opacity: 0.42;\\n}\\nlabel[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {\\n  opacity: 0.42;\\n}\\n.MuiInputBase-inputMarginDense {\\n  padding-top: 3px;\\n}\\n.MuiInputBase-inputMultiline {\\n  height: auto;\\n  resize: none;\\n  padding: 0;\\n}\\n.MuiInputBase-inputTypeSearch {\\n  -moz-appearance: textfield;\\n  -webkit-appearance: textfield;\\n}\\n",[69,4],55,"MuiFormControl",[29,2],"\\n.MuiFormControl-root {\\n  border: 0;\\n  margin: 0;\\n  display: inline-flex;\\n  padding: 0;\\n  position: relative;\\n  min-width: 0;\\n  flex-direction: column;\\n  vertical-align: top;\\n}\\n.MuiFormControl-marginNormal {\\n  margin-top: 16px;\\n  margin-bottom: 8px;\\n}\\n.MuiFormControl-marginDense {\\n  margin-top: 8px;\\n  margin-bottom: 4px;\\n}\\n.MuiFormControl-fullWidth {\\n  width: 100%;\\n}\\n",[78,5],"MuiFormLabel",[29,2],"\\n.MuiFormLabel-root {\\n  color: rgba(0, 0, 0, 0.54);\\n  padding: 0;\\n  font-size: 1rem;\\n  font-family: TTNormsPro,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\\n  font-weight: 400;\\n  line-height: 1;\\n}\\n.MuiFormLabel-root.Mui-focused {\\n  color: #7d64ff;\\n}\\n.MuiFormLabel-root.Mui-disabled {\\n  color: rgba(0, 0, 0, 0.38);\\n}\\n.MuiFormLabel-root.Mui-error {\\n  color: #ea4b5a;\\n}\\n.MuiFormLabel-colorSecondary.Mui-focused {\\n  color: #4badcf;\\n}\\n.MuiFormLabel-asterisk.Mui-error {\\n  color: #ea4b5a;\\n}\\n",[78,5],"MuiInputLabel",[29,2],"\\n.MuiInputLabel-root {\\n  display: block;\\n  transform-origin: top left;\\n}\\n.MuiInputLabel-formControl {\\n  top: 0;\\n  left: 0;\\n  position: absolute;\\n  transform: translate(0, 24px) scale(1);\\n}\\n.MuiInputLabel-marginDense {\\n  transform: translate(0, 21px) scale(1);\\n}\\n.MuiInputLabel-shrink {\\n  transform: translate(0, 1.5px) scale(0.75);\\n  transform-origin: top left;\\n}\\n.MuiInputLabel-animated {\\n  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;\\n}\\n.MuiInputLabel-filled {\\n  z-index: 1;\\n  transform: translate(12px, 20px) scale(1);\\n  pointer-events: none;\\n}\\n.MuiInputLabel-filled.MuiInputLabel-marginDense {\\n  transform: translate(12px, 17px) scale(1);\\n}\\n.MuiInputLabel-filled.MuiInputLabel-shrink {\\n  transform: translate(12px, 10px) scale(0.75);\\n}\\n.MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense {\\n  transform: translate(12px, 7px) scale(0.75);\\n}\\n.MuiInputLabel-outlined {\\n  z-index: 1;\\n  transform: translate(14px, 20px) scale(1);\\n  pointer-events: none;\\n}\\n.MuiInputLabel-outlined.MuiInputLabel-marginDense {\\n  transform: translate(14px, 12px) scale(1);\\n}\\n.MuiInputLabel-outlined.MuiInputLabel-shrink {\\n  transform: translate(14px, -6px) scale(0.75);\\n}\\n",32,32,"<BODY",1,"<NOSCRIPT",":_fs_excluded","true","<DIV",":id","root",1,112,":class","ConnectedSnackbar__SnackbarContainer-lilzxg-1 iRkCCH",[116,2],"styled__StyledToastContainer-sc-1j61nfo-0 ignaQL",[116,2],"styled__PublicPageLayout-sc-1j81i63-1 eXpwGF",[115,2],117,"promo",1,"<HEADER",1,"<A",21,"/",[125,3],"generic__StyledAppLogo-sc-19oetnw-26 dHSSVs generic__AppLogo-sc-19oetnw-27 hANzes",1,"<svg:svg",":width","95px",":viewBox","0 0 129 126",117,"k6-logo",1,"<svg:g",":stroke","none",":stroke-width","1",":fill",150,":fill-rule","evenodd",[147,2],153,"#fff",155,"nonzero",1,"<svg:path",":d","M129,126 L0,126 L42.942376,33.7858969 L68.8124593,52.9265362 L102.555234,0 L129,126 Z M81.7031148,106.076431 L81.9811119,106.076431 C85.1739597,106.082915 88.2445292,104.841221 90.5452916,102.6132 C92.9337412,100.43686 94.2780801,97.3326936 94.2363455,94.0903137 C94.3430946,90.9640475 93.038574,87.9570507 90.6877943,85.910694 C88.7284663,83.9323955 86.0872163,82.7897799 83.3126947,82.7201956 L83.1024448,82.7201956 C82.7405399,82.7194292 82.3803396,82.7700867 82.0325063,82.8706686 L88.8446034,72.6855256 L83.4201557,68.8719748 L80.8504346,72.6855256 L74.2883013,82.7719207 C73.1599602,84.4435819 72.2161717,85.9177474 71.6344803,86.9240358 C71.0280132,88.0069728 70.5062621,89.1357983 70.0739587,90.3002743 C69.5819044,91.537069 69.3282064,92.8568075 69.3264035,94.1890616 C69.2959683,97.3895828 70.6172724,100.45258 72.9613908,102.615551 C75.2321847,104.841605 78.2785217,106.084689 81.4484788,106.078782 L81.7031148,106.076431 Z M52.8614995,95.1083577 L60.3791018,105.808401 L68.4153205,105.808401 L59.5708077,93.3920248 L67.4294821,82.4121961 L62.2176204,78.7796832 L59.9001992,81.8361665 L52.852155,91.8755388 L52.852155,71.7286111 L45.8134553,65.9518576 L45.8134553,105.813103 L52.852155,105.813103 L52.852155,95.1083577 L52.8614995,95.1083577 Z M81.7124593,99.3921367 C78.8533805,99.3921367 76.5356393,97.0594827 76.5356393,94.1820082 C76.5356393,91.3045336 78.8533805,88.9718796 81.7124593,88.9718796 L81.7591815,88.9718796 C83.1362918,88.9749153 84.452857,89.5419392 85.4058493,90.5424418 C86.4095353,91.4703301 86.9764156,92.7822023 86.9663709,94.1537945 C86.936929,97.053745 84.5940197,99.3897114 81.7124593,99.3921367 Z",113,"Exclusion_1",[105,2],[169,3],32,"<SECTION",1,"<H1",117,"generic__Heading-sc-19oetnw-20 kpyEaG",[29,2],"The best developer experience ","<BR",30,"for load testing",32,"<P",117,"generic__Preamble-sc-19oetnw-18 iqshrw",[29,2],"Open source load testing tool and SaaS for engineering teams",[105,2],[116,2],"styled__StyledPublicPageBg-sc-1j81i63-2 bcQTsL",1,"<IMG",":src","/static/media/unauth-image.ed25bef3.png",":alt","background-illustration",117,"image",[105,2],175,117,"form",1,"<FORM",117,"styled__UnAuthForm-nlingb-10 drpcOL",":novalidate",6,1,"<FIELDSET",117,"styled__StyledFieldset-jine0q-4 jhuNqG",[217,2],117,"FormLoading__FormLoadingFieldset-sc-7glujx-2 ghpfzy",[125,3],"FormLoading__FormContent-sc-7glujx-1 kBgxMc",[129,2],[176,2],117,"generic__Heading-sc-19oetnw-20 dAXRkC",[29,2],"Sign in",[186,2],[188,2],[29,2],"You are a few clicks away from your next load test",[193,3],117,"MuiFormControl-root form-control FormControl__StyledFormControl-tksmqv-0 ewNqrs MuiFormControl-fullWidth",1,"<LABEL",117,"MuiFormLabel-root MuiInputLabel-root input-label InputLabel-z60gmb-0 hkxlIR MuiInputLabel-formControl",":data-shrink","false",":for","id-email",[29,2],"Email address",32,[116,2],"MuiInputBase-root input-root InputBase-lutf8z-1 iZeiKh MuiInputBase-fullWidth MuiInputBase-formControl",":spellcheck",255,1,"<INPUT",":aria-invalid",255,":autocomplete","email",113,257,3,272,":type","text",117,"MuiInputBase-input input-el",":value",[50,2],[261,2],[248,2],[250,2],[252,2],[254,2],256,"id-password",[125,3],"styled__PasswordLabel-nlingb-7 dMOrcE",1,"<SPAN",[29,2],"Password",32,30," ",132,":tabindex","-1",21,"/account/forgot",[29,2],"Forgot password?",[169,3],[262,3],[265,2],[267,2],[110,2],[269,2],271,"current-password",113,295,3,"password",277,335,[279,2],[105,2],"<FOOTER",1,"<BUTTON",117,"MuiButtonBase-root MuiButton-root MuiButton-contained generic__Button-sc-19oetnw-0 xGuLs",309,"0",277,"submit",[300,2],117,"MuiButton-label",[235,3],[316,4],117,"styled__SocialSection-nlingb-8 gCWshd",1,187,[29,2],"or sign in with",32,132,117,"styled__LoginLink-nlingb-13 gfCwbV",21,"/account/login/sp-saml",[29,2],"SAML SSO",[369,2],21,"https://api.loadimpact.com/social/login/google-oauth2?next=https://app.loadimpact.com/account/login/social/k6-redirect",117,"generic__IconLink-sc-19oetnw-39 styled__GoogleLink-nlingb-12 bmxjXG",[139,2],141,"24",":height",387,143,"0 0 512 512",117,"SvgIcon__StyledSvg-sc-1vqzbn5-0 jUgMSJ SvgIcon-sc-1vqzbn5-2 eXaCig",[163,2],165,"M457.6 224l-2.1-8.9H262V297h115.6c-12 57-67.7 87-113.2 87-33.1 0-68-13.9-91.1-36.3-23.7-23-38.8-56.9-38.8-91.8 0-34.5 15.5-69 38.1-91.7 22.5-22.6 56.6-35.4 90.5-35.4 38.8 0 66.6 20.6 77 30l58.2-57.9c-17.1-15-64-52.8-137.1-52.8-56.4 0-110.5 21.6-150 61C72.2 147.9 52 204 52 256s19.1 105.4 56.9 144.5c40.4 41.7 97.6 63.5 156.5 63.5 53.6 0 104.4-21 140.6-59.1 35.6-37.5 54-89.4 54-143.8 0-22.9-2.3-36.5-2.4-37.1z",32,301,[378,3],"https://api.loadimpact.com/social/login/github?next=https://app.loadimpact.com/account/login/social/k6-redirect",117,"generic__IconLink-sc-19oetnw-39 styled__GithubLink-nlingb-11 dzvXFo",[384,3],[387,2],[389,2],[391,2],[393,2],[164,2],"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z",[398,2],[105,2],[187,2],"styled__StyledFormHelp-nlingb-6 FPcWP",[300,2],[29,2],"Don\'t have an account yet?",[305,2]," ",[132,2],"/account/register",[29,2],"Sign up for free",[171,4],[171,4],[116,2],"styled__StyledVersion-sc-1j81i63-3 ddQevh",[427,3],30,"v0.83.0",[441,5],32]],"When":646},{"Kind":78,"Args":[[0,1,1,646,16]],"When":646},{"Kind":78,"Args":[[0,1,3,646,10]],"When":646}]}',
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "content-type": "text/plain",
          accept: "*/*",
          origin: "https://app.k6.io",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://app.k6.io/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
        },
      }
    );

    response = http.get("https://jsl2jdg749ks.statuspage.io/embed/frame", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "upgrade-insecure-requests": "1",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "navigate",
        "sec-fetch-dest": "iframe",
        referer: "https://app.k6.io/",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-BR,pt;q=0.9",
      },
    });

    response = http.get("https://app.k6.io/favicon.ico", {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
        accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-dest": "image",
        referer: "https://app.k6.io/account/login",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-BR,pt;q=0.9",
        cookie:
          "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1; fs_uid=rs.fullstory.com#1AHVA#6111556845420544:5407426686468096/1644795511",
      },
    });

    response = http.post(
      "https://rs.fullstory.com/rec/bundle?OrgId=1AHVA&UserId=6111556845420544&SessionId=5407426686468096&PageId=5469266229575680&Seq=2&PageStart=1613259513018&PrevBundleTime=1613259513508&LastActivity=4871&IsNewSession=true",
      '{"When":646,"Seq":2,"Evts":[{"Kind":60,"Args":[[1,13],["html, body { height: 100%; }","body { margin: 0px; padding: 0px; font-family: TTNormsPro, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif; -webkit-font-smoothing: antialiased; line-height: 1.5; background-color: rgb(249, 248, 252); }","html { box-sizing: border-box; }","*, ::before, ::after { box-sizing: inherit; }","h1, h2, h3, h4, h5, p, ul, ol { margin-top: 0px; }","a { color: rgb(125, 100, 255); text-decoration: none; }","a[disabled] { opacity: 0.5; cursor: default !important; }","a:hover { text-decoration: underline; }",".chart-legend { font-family: TTNormsPro, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif; font-weight: 500; opacity: 0.8; }",".chart-legend:hover { opacity: 1; }",".highcharts-legend-item-hidden .chart-legend { opacity: 0.3; }",".chart-legend__symbol { width: 10px; height: 10px; display: inline-block; background: currentcolor; border-radius: 50%; margin-right: 2px; }","._chart-compare { padding: 10px; }","._chart-compare-base { background-color: rgb(248, 251, 246); }","._chart-compare-target { background-color: rgb(243, 249, 255); }",".chart-tooltip { z-index: 10; border: 1px solid rgb(125, 100, 255); background-color: rgba(255, 255, 255, 0.9); box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px; padding: 10px; font-family: TTNormsPro, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif; color: rgb(90, 92, 135); font-weight: 500; }",".chart-tooltip .chart-tooltip__table { display: table; font-weight: 500; font-size: 11px; margin-bottom: 5px; }",".chart-tooltip .chart-tooltip__group:last-child .chart-tooltip__table { margin-bottom: 0px; }",".chart-tooltip > .chart-tooltip__table:last-child { margin-bottom: 0px; }",".chart-tooltip .chart-tooltip__label { color: rgb(123, 124, 159); }",".chart-tooltip .chart-tooltip__row { display: table-row; }",".chart-tooltip .chart-tooltip__group-name, .chart-tooltip .chart-tooltip__metric-name { margin-bottom: 5px; }",".chart-tooltip .chart-tooltip__group-name { color: rgb(90, 92, 135); margin-bottom: 5px; }",".chart-tooltip .chart-tooltip__group-name .chart-tooltip__metric-symbol { display: inline-block; width: 8px; height: 8px; background-color: currentcolor; margin-right: 2px; }",".chart-tooltip .chart-tooltip__metric-description { color: rgb(90, 92, 135); opacity: 0.9; margin-bottom: 5px; font-size: 11px; font-weight: 500; }",".chart-tooltip .chart-tooltip__cell { display: table-cell; padding: 0px 5px; }",".chart-tooltip .chart-tooltip__cell:first-child { padding-left: 0px; }",".chart-tooltip .chart-tooltip__timestamp { font-size: 11px; margin-bottom: 5px; }",".chart-tooltip .chart-tooltip__group ~ .chart-tooltip__group { padding-top: 5px; border-top: 1px solid rgb(236, 235, 241); }",".chart-tooltip--comparison .chart-tooltip__compare-box .chart-tooltip__compare-separator { color: rgb(221, 221, 221); }",".chart-tooltip--comparison .chart-tooltip__compare-box .chart-tooltip__compare-base { color: rgb(134, 188, 83); }",".chart-tooltip--comparison .chart-tooltip__compare-box .chart-tooltip__compare-target { color: rgb(29, 144, 255); }",".chart-tooltip__timeduration { display: inline-block; min-width: 55px; }",".chart-tooltip__timeduration-label { display: inline-block; opacity: 0.7; }",".trending-tooltip { z-index: 10; border: 1px solid currentcolor; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px; font-family: TTNormsPro, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Oxygen, Ubuntu, Cantarell, \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif; font-weight: 500; padding: 0px; color: rgb(90, 92, 135); }",".trending-tooltip .trending-tooltip__header { background-color: currentcolor; text-transform: uppercase; padding: 4px; text-align: center; font-size: 10px; text-shadow: rgba(4, 4, 4, 0.1) 0px 0px 10px; font-weight: 600; }",".trending-tooltip .trending-tooltip__header span { color: rgb(255, 255, 255); }",".trending-tooltip .trending-tooltip__body { padding: 10px 15px; text-align: center; font-size: 12px; }",".trending-tooltip .trending-tooltip__preamble { font-size: 14px; font-weight: 500; margin-bottom: 5px; color: rgb(171, 172, 194); }",".trending-tooltip .trending-tooltip__title { text-shadow: rgba(4, 4, 4, 0.1) 0px 0px 10px; font-size: 18px; text-align: center; margin-bottom: 2px; line-height: 1; }",".trending-tooltip .trending-tooltip__title small { font-weight: 400; font-size: 12px; }",".trending-tooltip .trending-tooltip__description { color: rgb(171, 172, 194); margin-bottom: 5px; }",".trending-tooltip .trending-tooltip__timestamp { color: rgb(90, 92, 135); margin-bottom: 0px !important; }",".testbuilder-sortable-ghost { box-shadow: rgba(4, 4, 4, 0.2) 0px 0px 5px 0px; border-color: rgb(242, 242, 245) !important; }",".sortable-item { transition: background-color 120ms ease 0s; }",".sortable-ghost { background-color: rgb(242, 239, 255) !important; }",".sortable-ghost > * { opacity: 0; }",".jUgMSJ { height: auto; }",".jUgMSJ path, .jUgMSJ circle, .jUgMSJ g { fill: currentcolor; }",".xGuLs.xGuLs { white-space: nowrap; box-shadow: none; border-style: solid; border-radius: 0px; border-color: transparent; font-family: TTNormsPro; font-size: 12px; font-weight: 600; padding-top: 6px; padding-bottom: 3px; min-height: 36px; transition: background-color 120ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 120ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 120ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; border-width: 2px !important; }",".xGuLs.xGuLs:hover { text-decoration: none; box-shadow: none; }",".xGuLs.xGuLs.btn--focused { outline: rgb(100, 169, 255) dashed 1px; box-shadow: none; }",".xGuLs.xGuLs { background-color: rgb(125, 100, 255); color: rgb(255, 255, 255); }",".xGuLs.xGuLs:hover { background-color: rgb(100, 80, 204); }",".iqshrw { line-height: 27px; color: rgb(124, 127, 160); }",".iqshrw a { font-weight: 500; }",".iqshrw .SvgIcon-sc-1vqzbn5-2 { width: 1.5em; vertical-align: middle; }",".kpyEaG { font-weight: 500; margin-bottom: 1.6rem; color: rgb(90, 92, 135); font-size: 1rem; }",".dAXRkC { margin-bottom: 1.6rem; color: rgb(90, 92, 135); font-size: 1.6rem; font-weight: 400; }",".iRkCCH { position: fixed; top: 20px; right: 20px; z-index: 60; }",".ignaQL { position: fixed; top: 0px; right: 0px; left: 210px; z-index: 60; max-width: 1194px; margin-left: auto; margin-right: auto; padding: 0px; }",".iZeiKh.input-root { height: 36px; padding: 0px; transition: background 0.3s ease 0s; border-radius: 0px; color: rgb(90, 92, 135); font-weight: 400; line-height: 20px; font-family: inherit; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; -webkit-font-smoothing: auto; background-color: rgba(255, 255, 255, 0); border: 1px solid rgba(188, 188, 205, 0.5); }",".iZeiKh.multiline-root { height: 100px; align-items: flex-start; }",".iZeiKh.input--focused { border-color: rgb(125, 100, 255); border-radius: 0px; color: rgb(125, 100, 255); }",".iZeiKh.input--disabled { color: rgb(154, 160, 166); }",".iZeiKh .input-el { border: 0px; height: auto; padding: 8px; text-overflow: ellipsis; }",".iZeiKh.iZeiKh.input-root .input-el::-webkit-input-placeholder { color: rgb(59, 59, 99); opacity: 0.7; }",".iZeiKh.iZeiKh.input-root .input-el::placeholder { color: rgb(59, 59, 99); opacity: 0.7; }",".hkxlIR.hkxlIR { cursor: pointer; position: static; transform: none; font-size: 12px; font-weight: 400; font-family: inherit; letter-spacing: 0.01px; color: rgb(121, 123, 159); -webkit-font-smoothing: auto; text-rendering: geometricprecision; margin-bottom: 8px; }",".hkxlIR.hkxlIR .input-label-asterisk { color: rgb(234, 75, 90); }",".ewNqrs.ewNqrs { margin-bottom: 15px; }",".jhuNqG { min-inline-size: auto; margin: 0px; padding: 0px; border: 0px; }",".kBgxMc { transition: opacity 0.2s ease 0s; }",".ghpfzy { min-inline-size: auto; position: relative; border: 0px; margin: 0px; padding: 0px; }",".eXpwGF { margin-left: auto; margin-right: auto; position: relative; z-index: 10; display: flex; flex-wrap: wrap; min-height: 100vh; background-color: rgb(255, 255, 255); }",".eXpwGF .form, .eXpwGF .promo { padding: 20px; display: flex; flex-direction: column; -webkit-box-align: center; align-items: center; }",".eXpwGF .form { background-color: rgb(255, 255, 255); }",".eXpwGF .promo header { text-align: center; position: relative; z-index: 10; }",".eXpwGF .promo section { display: flex; -webkit-box-align: center; align-items: center; flex-direction: column; position: relative; z-index: 10; }",".eXpwGF .promo { position: relative; font-size: 10px; background-image: linear-gradient(222deg, rgb(36, 35, 72) 15%, rgb(125, 100, 255) 92%); background-repeat: no-repeat; }","@media (max-width: 1060px) {\\n  .eXpwGF .promo { font-size: 8px; }\\n}",".eXpwGF .promo .generic__Heading-sc-19oetnw-20, .eXpwGF .promo .generic__Preamble-sc-19oetnw-18 { color: rgb(255, 255, 255); text-align: center; }",".eXpwGF .promo .generic__AppLogo-sc-19oetnw-27 { width: 95px; margin-bottom: 5em; }",".eXpwGF .promo .generic__Heading-sc-19oetnw-20 { font-size: 3.2em; font-weight: 600; line-height: 1.31; }",".eXpwGF .promo .generic__Preamble-sc-19oetnw-18 { opacity: 0.7; font-size: 1.8em; font-weight: 500; line-height: 0.72; }","@media (min-width: 850px) {\\n  .eXpwGF .form, .eXpwGF .promo { padding-top: 13vh; flex: 1 1 0%; }\\n  .eXpwGF .form { max-width: 750px; }\\n  .eXpwGF .promo { position: relative; max-width: 900px; }\\n}","@media (max-width: 849px) {\\n  .eXpwGF { flex-direction: column; }\\n}",".bcQTsL { position: absolute; z-index: 1; inset: 0px; overflow: hidden; }",".bcQTsL .image { left: 50%; position: absolute; bottom: -300px; transform: translate(-50%, 0px); max-width: 1020px; opacity: 0.5; }",".bcQTsL .llustration { position: absolute; }","@media (min-width: 850px) {\\n  .bcQTsL .llustration { bottom: 0px; left: -400px; }\\n}","@media (max-width: 849px) {\\n  .bcQTsL .llustration { max-width: 200%; top: 60px; left: -50%; }\\n}",".ddQevh { position: absolute; bottom: 10px; left: 10px; z-index: 10; color: rgb(78, 78, 88); font-size: 12px; font-weight: 500; }",".FPcWP { font-size: 14px; color: rgb(142, 143, 152); margin-bottom: 0px; }",".FPcWP a { font-weight: 500; }",".dMOrcE { display: flex; }",".dMOrcE span { flex: 1 1 0%; }",".gCWshd { text-align: center; margin-bottom: 30px; }",".gCWshd p { color: rgb(67, 66, 93); opacity: 0.6; font-size: 14px; }",".gCWshd a { margin: 0px 5px; }",".drpcOL { width: 100%; max-width: 400px; }",".drpcOL footer { margin-top: 20px; margin-bottom: 20px; }",".drpcOL footer .generic__Button-sc-19oetnw-0 { width: 170px; }",".drpcOL footer, .drpcOL .styled__StyledFormHelp-nlingb-6 { display: flex; -webkit-box-pack: center; justify-content: center; }",".drpcOL .styled__StyledFormHelp-nlingb-6 { margin-top: 100px; }",".drpcOL header { margin-bottom: 38px; }",".drpcOL header .generic__Heading-sc-19oetnw-20 { font-size: 32px; line-height: 1; }",".dzvXFo { color: rgb(73, 87, 109); font-size: 23px; }",".dzvXFo .SvgIcon-sc-1vqzbn5-2 { vertical-align: middle; margin-right: 4px; width: 1.4em; }",".dzvXFo:hover { text-decoration: none; color: rgb(87, 70, 178); }",".bmxjXG { color: rgb(192, 75, 60); font-size: 23px; }",".bmxjXG .SvgIcon-sc-1vqzbn5-2 { vertical-align: middle; margin-right: 4px; width: 1.4em; }",".bmxjXG:hover { text-decoration: none; color: rgb(87, 70, 178); }",".gfCwbV { font-weight: 600; font-size: 11px; vertical-align: middle; color: rgb(90, 92, 135); border: 1px solid currentcolor; height: 29px; border-radius: 15px; padding: 0px 10px; display: inline-flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; background: rgb(255, 255, 255); }",".gfCwbV:hover { text-decoration: none; color: rgb(125, 100, 255); }",".jLaMNQ { text-align: center; padding: 0px; }"],0],"When":646},{"Kind":57,"Args":[1,"https://app.k6.io/account/login",0,0,"navigation",0,0,5.909999832510948,15.439999988302588,230.39499996230006,230.39499996230006,343.6699998565018,281.53000003658235,344.09999987110496,692.8349998779595,705.1599998958409,0,0,3332.1299999952316,3332.4049999937415,3332.414999837056,0,0,0,"navigate",0,1105,484,819],"When":646},{"Kind":57,"Args":[2,"https://app.k6.io/3.styles.css",745.6849999725819,66.58999994397163,"link",0,0,745.6849999725819,745.6849999725819,745.6849999725819,745.6849999725819,745.6849999725819,745.6849999725819,747.0149998553097,810.8949998859316,812.2749999165535,140170,21589,21947],"When":646},{"Kind":57,"Args":[2,"https://app.k6.io/static/js/runtime~main.0cf5dd85.js",746.29499996081,563.7000000569969,"script",0,0,746.29499996081,746.29499996081,746.29499996081,746.29499996081,746.29499996081,746.29499996081,747.7349999826401,1308.9949998538941,1309.995000017807,3263,1801,2150],"When":646},{"Kind":57,"Args":[2,"https://app.k6.io/static/js/3.d6033462.js",747.0549999270588,1539.2899999860674,"script",0,0,747.0549999270588,747.0549999270588,747.0549999270588,747.0549999270588,747.0549999270588,747.0549999270588,748.6550000030547,831.8499999586493,2286.3449999131262,6551854,1605806,1608030],"When":646},{"Kind":57,"Args":[2,"https://app.k6.io/static/js/main.0f073785.js",747.569999890402,577.3849999532104,"script",0,0,747.569999890402,747.569999890402,747.569999890402,747.569999890402,747.569999890402,747.569999890402,749.4999999180436,898.164999904111,1324.9549998436123,2439182,558016,559060],"When":646},{"Kind":57,"Args":[2,"https://www.google-analytics.com/analytics.js",3134.1999999713153,1.9549999851733446,"script",0,0,3134.1999999713153,0,0,0,0,0,0,0,3136.1549999564886,0,0,0],"When":646},{"Kind":57,"Args":[2,"https://edge.fullstory.com/s/fs.js",3240.9949998836964,488.23000001721084,"script",0,0,3240.9949998836964,0,0,0,0,0,0,0,3729.2249999009073,0,0,0],"When":646},{"Kind":57,"Args":[3,"first-paint",3341.984999831766,0],"When":646},{"Kind":57,"Args":[3,"first-contentful-paint",3341.984999831766,0],"When":646},{"Kind":57,"Args":[2,"https://www.google-analytics.com/plugins/ua/ecommerce.js",3367.020000005141,221.66499984450638,"script",0,0,3367.020000005141,0,0,0,0,0,0,0,3588.6849998496473,0,0,0],"When":646},{"Kind":57,"Args":[2,"https://www.google-analytics.com/j/collect?v=1&_v=j87&a=848653344&t=pageview&_s=1&dl=https%3A%2F%2Fapp.k6.io%2Faccount%2Flogin&dr=https%3A%2F%2Fk6.io%2F&dp=%2Faccount%2Flogin&ul=pt-br&de=UTF-8&dt=app.k6.io%20-%20Performance%20testing%20for%20developers%2C%20like%20unit-testing%2C%20for%20performance&sd=24-bit&sr=1366x768&vp=794x625&je=0&_u=CCCAAAIRAAAAAC~&jid=&gjid=&cid=1725087866.1613259489&tid=UA-158196577-1&_gid=187480816.1613259489&_slc=1&z=59051613",3601.3499998953193,247.77500005438924,"xmlhttprequest",0,0,3601.3499998953193,0,0,0,0,0,0,0,3849.1249999497086,0,0,0],"When":646},{"Kind":57,"Args":[2,"https://rs.fullstory.com/rec/page",3767.364999977872,605.4950000252575,"xmlhttprequest",0,0,3767.364999977872,0,0,0,0,0,0,0,4372.860000003129,0,0,0],"When":646},{"Kind":22,"Args":[74,398,36],"When":669},{"Kind":42,"Args":[794,865],"When":669},{"Kind":10,"Args":[3,0,0],"When":672},{"Kind":64,"Args":[3,0,0],"When":673},{"Kind":19,"Args":[794,625,811,625],"When":673},{"Kind":40,"Args":[794,625],"When":674},{"Kind":22,"Args":[28,0,0],"When":675},{"Kind":42,"Args":[794,864],"When":944},{"Kind":2,"Args":[27,-1,["<IFRAME",200,"https://jsl2jdg749ks.statuspage.io/embed/frame",":style","position: fixed; border: none; box-shadow: rgba(9, 20, 66, 0.25) 0px 20px 32px -8px; z-index: 9999; transition: left 1s ease 0s, bottom 1s ease 0s, right 1s ease 0s; height: 115px; width: 320px; left: -9999px; right: auto; bottom: 60px;"]],"When":1178},{"Kind":78,"Args":[[0,1,2,1178,4]],"When":1178},{"Kind":53,"Args":[],"When":1439},{"Kind":57,"Args":[0,1613259508085,0,0,0,0,1613259508091,1613259508100,1613259508315,1613259508315,1613259508428,1613259508366,1613259508429,1613259508778,1613259508790,1613259508799,1613259511417,1613259511417,1613259511417,1613259514473,1613259514473,1613259514474],"When":2629},{"Kind":57,"Args":[2,"https://app.k6.io/static/fonts/TTNormsPro-Medium.woff2",3260.594999883324,1384.1000001411885,"css",0,0,3260.594999883324,3260.594999883324,3260.594999883324,3260.594999883324,3260.594999883324,3260.594999883324,3339.3200000282377,4339.359999867156,4644.695000024512,78304,78304,78703],"When":2630},{"Kind":57,"Args":[2,"https://app.k6.io/static/fonts/TTNormsPro-Bold.woff2",3261.1549999564886,1383.7899998761714,"css",0,0,3261.1549999564886,3261.1549999564886,3261.1549999564886,3261.1549999564886,3261.1549999564886,3261.1549999564886,3340.1349999476224,4339.629999827594,4644.94499983266,78160,78160,78568],"When":2630},{"Kind":57,"Args":[2,"https://app.k6.io/static/fonts/TTNormsPro-Regular.woff2",3261.689999839291,1383.4999999962747,"css",0,0,3261.689999839291,3261.689999839291,3261.689999839291,3261.689999839291,3261.689999839291,3261.689999839291,3341.119999997318,4340.085000032559,4645.189999835566,79272,79272,79671],"When":2630},{"Kind":57,"Args":[2,"https://rs.fullstory.com/rec/bundle?OrgId=1AHVA&UserId=6111556845420544&SessionId=5407426686468096&PageId=5469266229575680&Seq=1&PageStart=1613259513018&PrevBundleTime=0&LastActivity=688&IsNewSession=true",4450.544999912381,338.675000006333,"xmlhttprequest",0,0,4450.544999912381,0,0,0,0,0,0,0,4789.219999918714,0,0,0],"When":2631},{"Kind":57,"Args":[2,"https://jsl2jdg749ks.statuspage.io/embed/script.js",3237.1600000187755,1602.0849999040365,"script",0,0,3237.1600000187755,0,0,0,0,0,0,0,4839.244999922812,0,0,0],"When":2631},{"Kind":57,"Args":[2,"https://jsl2jdg749ks.statuspage.io/embed/frame",4844.559999881312,386.09000016003847,"iframe",0,0,4844.559999881312,0,0,0,0,0,0,0,5230.650000041351,0,0,0],"When":2631},{"Kind":57,"Args":[2,"https://app.k6.io/static/media/unauth-image.ed25bef3.png",3246.3950000237674,3137.224999954924,"img",0,0,3246.3950000237674,3246.3950000237674,3246.3950000237674,3246.3950000237674,3246.3950000237674,3246.3950000237674,3249.254999915138,4339.054999873042,6383.619999978691,837980,837980,839273],"When":2631},{"Kind":21,"Args":[],"When":2631},{"When":4822,"Kind":54,"Args":[4001]},{"When":4822,"Kind":78,"Args":[[0,1,3,4822,0]]}]}',
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "content-type": "text/plain",
          accept: "*/*",
          origin: "https://app.k6.io",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://app.k6.io/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
        },
      }
    );

    response = http.post(
      "https://rs.fullstory.com/rec/bundle?OrgId=1AHVA&UserId=6111556845420544&SessionId=5407426686468096&PageId=5469266229575680&Seq=3&PageStart=1613259513018&PrevBundleTime=1613259518449&LastActivity=389&IsNewSession=true",
      '{"When":12443,"Seq":3,"Evts":[{"Kind":9,"Args":[12445,34,321,448,126,278,249,-50,-8,46],"When":12443},{"Kind":57,"Args":[1,"https://app.k6.io/account/login",0,6389.304999960586,"navigation",0,0,5.909999832510948,15.439999988302588,230.39499996230006,230.39499996230006,343.6699998565018,281.53000003658235,344.09999987110496,692.8349998779595,705.1599998958409,0,0,3332.1299999952316,3332.4049999937415,3332.414999837056,6388.365000020713,6388.395000016317,6389.304999960586,"navigate",0,1105,484,819],"When":12446},{"Kind":57,"Args":[2,"https://app.k6.io/favicon.ico",6398.414999945089,1278.4150000661612,"other",0,0,6398.414999945089,6398.414999945089,6398.414999945089,6398.414999945089,6398.414999945089,6398.414999945089,6399.994999868795,7315.544999903068,7676.83000001125,15086,15086,15426],"When":12446},{"Kind":57,"Args":[2,"https://rs.fullstory.com/rec/bundle?OrgId=1AHVA&UserId=6111556845420544&SessionId=5407426686468096&PageId=5469266229575680&Seq=2&PageStart=1613259513018&PrevBundleTime=1613259513508&LastActivity=4871&IsNewSession=true",9454.969999846071,229.85000000335276,"xmlhttprequest",0,0,9454.969999846071,0,0,0,0,0,0,0,9684.819999849424,0,0,0],"When":12446},{"Kind":9,"Args":[12461,384,449,65,65,247,245,-2,-2,46],"When":12453},{"Kind":9,"Args":[12509,503,771,282.75,264.19354838709677,243,202,-19.5,-46.5483870967742,49],"When":12470},{"Kind":57,"Args":[6,4294705152,50531345,38761577],"When":12677},{"Kind":9,"Args":[13012,786,754,-105.60000000000001,-5.5,237,251,35.2,5.5,49],"When":12968},{"Kind":9,"Args":[13307,758,809,46,46,251,233,-20.444444444444443,-13.142857142857142,3],"When":13261},{"Kind":9,"Args":[15188,796,769,-27,-27,242,248,6,6,49],"When":15185},{"Kind":9,"Args":[15282,734,4,-516,-821.7777777777777,257,311,73.71428571428571,0,50],"When":15196}]}',
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "content-type": "text/plain",
          accept: "*/*",
          origin: "https://app.k6.io",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://app.k6.io/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
        },
      }
    );

    response = http.post(
      "https://rs.fullstory.com/rec/bundle?OrgId=1AHVA&UserId=6111556845420544&SessionId=5407426686468096&PageId=5469266229575680&Seq=4&PageStart=1613259513018&PrevBundleTime=1613259528430&LastActivity=4260&IsNewSession=true",
      '{"When":16194,"Seq":4,"Evts":[{"Kind":9,"Args":[16289,3,602,529.2857142857143,527.7777777777777,139,178,40.714285714285715,31.666666666666664,49],"When":16194},{"Kind":9,"Args":[16329,651,809,null,84.33333333333333,182,197,null,10.222222222222221,3],"When":16306},{"Kind":57,"Args":[2,"https://rs.fullstory.com/rec/bundle?OrgId=1AHVA&UserId=6111556845420544&SessionId=5407426686468096&PageId=5469266229575680&Seq=3&PageStart=1613259513018&PrevBundleTime=1613259518449&LastActivity=389&IsNewSession=true",19453.664999920875,191.95999996736646,"xmlhttprequest",0,0,19453.664999920875,0,0,0,0,0,0,0,19645.62499988824,0,0,0],"When":16428},{"Kind":52,"Args":[],"When":18518},{"Kind":53,"Args":[],"When":18519},{"When":20431,"Kind":54,"Args":[4001]}]}',
      {
        headers: {
          "sec-ch-ua":
            '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
          "content-type": "text/plain",
          accept: "*/*",
          origin: "https://app.k6.io",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          referer: "https://app.k6.io/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "pt-BR,pt;q=0.9",
        },
      }
    );
  });

  response = http.get("https://app.k6.io/cachebuster-worker.js", {
    headers: {
      "cache-control": "max-age=0",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      accept: "*/*",
      "service-worker": "script",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "same-origin",
      "sec-fetch-dest": "serviceworker",
      referer: "https://app.k6.io/account/login",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "pt-BR,pt;q=0.9",
      cookie:
        "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1",
    },
  });

  response = http.get("https://app.k6.io/main.0.83.0.js", {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      accept: "*/*",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "https://app.k6.io/cachebuster-worker.js",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "pt-BR,pt;q=0.9",
      cookie:
        "_ga=GA1.2.1725087866.1613259489; _gid=GA1.2.187480816.1613259489; _gat=1; _hjid=788d0743-65d1-4459-aff9-aa1606990a18; _hjFirstSeen=1; fs_uid=rs.fullstory.com#1AHVA#6111556845420544:5407426686468096/1644795511",
    },
  });

  // Automatically added sleep
  sleep(1);
}
