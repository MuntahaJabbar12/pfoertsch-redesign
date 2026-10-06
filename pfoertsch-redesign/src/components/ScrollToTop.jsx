import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * React Router does not reset scroll position on navigation by default.
 * This component watches the current route and scrolls the window to
 * the top every time the path changes, so every page opens from the
 * top instead of wherever the previous page was scrolled to.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  // Prevent the browser's own scroll-restoration from fighting
  // our manual reset below (a common gotcha with client-side routing).
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;