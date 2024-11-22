import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

type SearchBtnProps = {
    onSubmit: (query: string) => void;
}

const SearchBtn = ({ onSubmit }: SearchBtnProps) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (query.trim() === "") {
            toast.error("Please enter a search query!");
            return;
        }
        onSubmit(query);
        setQuery("");
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" >Search</button>
            </form>
        </header>

    );
};

export default SearchBtn;