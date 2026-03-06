"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const ImageTabs = () => {
  const [activateTab, setActivateTab] = useState("organize");

  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 justify-center mb-8">
            <Button
              onClick={() => setActivateTab("organize")}
              className={`rounded-lg px-6 py-3  text-sm font-medium transition-colors ${activateTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Organize Applications
            </Button>
            <Button
              onClick={() => setActivateTab("hired")}
              className={`rounded-lg px-6 py-3  text-sm font-medium transition-colors ${activateTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActivateTab("boards")}
              className={`rounded-lg px-6 py-3  text-sm font-medium transition-colors ${activateTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            {activateTab === "organize" && (
              <Image
                src={"/hero-images/hero1.png"}
                alt={"Organize Applications"}
                width={1200}
                height={800}
              />
            )}
            {activateTab === "hired" && (
              <Image
                src={"/hero-images/hero2.png"}
                alt={"Get Hired"}
                width={1200}
                height={800}
              />
            )}
            {activateTab === "boards" && (
              <Image
                src={"/hero-images/hero3.png"}
                alt={"Manage Boards"}
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ImageTabs;
