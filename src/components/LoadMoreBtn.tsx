import React from "react";

type LoadMoreBtnProps = {
    onLoadMore: () => void;
}

const LoadMoreBtn = ({ onLoadMore }: LoadMoreBtnProps) => {
    return (
        <div>
            <button onClick={onLoadMore}>Load more</button>
        </div>
    );
};

export default LoadMoreBtn;
