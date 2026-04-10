export type RouteModule = {
    default?: string;
    render?: () => string;
};

export const route = (event: Event): void => {
    const target = event.target as HTMLAnchorElement;

    if (!target.href) return;

    event.preventDefault();
    window.history.pushState({}, "", target.href);
    handleLocation();
};

export const routes: Record<string, () => Promise<RouteModule>> = {
    404: () => import("./blocks/error/404"),
    "/": () => import("./blocks/home/home"),
    "/login": () => import("./blocks/login/login")
};

export const handleLocation = async (): Promise<void> => {
    const path: string = window.location.pathname;
    const route = routes[path] || routes[404];

    const module = await route();

    document.getElementById("app")!.innerHTML =
        module.default ?? (module.render ? module.render() : "");
};

window.onpopstate = handleLocation;

document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.matches("[data-link]")) {
        e.preventDefault();
        route(e);
    }
});

handleLocation();