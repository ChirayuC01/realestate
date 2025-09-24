"use client";

import React from "react";

interface PageTitleProps {
  title: string;
  description: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <section className="bg-brand-primary text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageTitle;
