import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from "./app";
import "./index.css";

declare global {
  interface Window {
    __BASENAME__?: string;
  }
}

function resolveBasename() {
  const raw = window.__BASENAME__ || "/";
  if (!raw || String(raw).includes("{{")) return "/";
  return raw;
}

function Fallback({ error }: { error: unknown }) {
  const message = error instanceof Error ? error.message : String(error);
  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>页面加载失败</h1>
      <p>{message}</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={resolveBasename()}>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error} />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
