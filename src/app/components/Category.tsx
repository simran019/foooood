"use client";

import { categories } from "@/lib/data";
import Image from "next/image";

type CategoryComponentProps = {
  handleClick: (key: string) => void;
};

export default function CategoryComponent({
  handleClick,
}: CategoryComponentProps) {
  return (
    <>
      {categories.map((category, i) => {
        return (
          <div
            className="category"
            key={category.key}
            onClick={() => {
              handleClick(category.key);
            }}
          >
            <div className="cat_img">
              <Image src={category.image} alt="cat" height={10} width={10} />
            </div>
            <div>{category.name}</div>
            <div className="rightarrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </>
  );
}
