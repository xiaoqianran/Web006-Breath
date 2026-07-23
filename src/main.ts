import "./ui/styles.css";
import { YixiApp } from "./ui/app";

const root = document.querySelector<HTMLElement>("#app");
if (!root) {
  throw new Error("找不到 #app 挂载点");
}

const app = new YixiApp(root);

// 便于调试与冒烟脚本
declare global {
  interface Window {
    __YIXI__?: YixiApp;
  }
}
window.__YIXI__ = app;
