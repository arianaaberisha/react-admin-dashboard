import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const pages = [
  { label: "Analytics", path: "/analytics", description: "Dashboards" },
  { label: "CRM", path: "/crm", description: "Dashboards" },
  { label: "eCommerce", path: "/ecommerce", description: "Dashboards" },
  { label: "Logistics", path: "/logistics", description: "Dashboards" },
];

const PageSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? pages.filter(p => p.label.toLowerCase().includes(q)) : pages;
  }, [query]);

  // Ctrl/Cmd + K focuses the search box
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const goTo = (path: string) => {
    navigate(path);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      goTo(results[activeIndex].path);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center rounded-md px-2 h-[56px] dark:bg-[#2F3349] dark:border-none">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          placeholder="Search [CTRL + K]"
          aria-label="Search pages"
          onChange={e => {
            setQuery(e.target.value);
            setActiveIndex(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className="outline-none hidden md:block dark:bg-[#2F3349] dark:text-[#E1DEF5E5]"
        />
      </div>
      {open && (
        <ul
          role="listbox"
          className="hidden md:block absolute left-0 top-full mt-2 w-64 bg-white dark:bg-[#2F3349] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 z-20"
        >
          {results.length === 0 ? (
            <li className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">No pages found</li>
          ) : (
            results.map((page, index) => (
              <li
                key={page.path}
                role="option"
                aria-selected={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={e => {
                  e.preventDefault();
                  goTo(page.path);
                }}
                className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer ${
                  index === activeIndex
                    ? "bg-[#7367F0] text-white"
                    : "text-gray-700 dark:text-[#E1DEF5E5]"
                }`}
              >
                <span>{page.label}</span>
                <span className={index === activeIndex ? "text-white/80" : "text-gray-400"}>
                  {page.description}
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default PageSearch;
