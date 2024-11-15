import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

async function deferRender() {
    if (import.meta.env.VITE_RUN_MSW === "true") {
        const { worker } = await import("@/mocks/Browser");
        await worker.start();
    }
}

deferRender().then(() => {
    createRoot(document.getElementById("root")!).render(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>,
    );
});
