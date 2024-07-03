import React from "react";

interface FloatLabelProps {
  children: React.ReactNode;
  info: string;
  isVisible: boolean;
  url?: string;
  port?: string;
}

const FloatLabel = ({
  children,
  info: label,
  isVisible,
  url,
  port,
}: FloatLabelProps) => {
  // Check if the URL contains "http://localhost" and add the port if it does
  const completeUrl =
    url?.includes("http://localhost") && port ? `${url}:${port}` : url;

  return (
    <div className="relative">
      {children}
      {isVisible && completeUrl && (
        <a
          href={completeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 px-1 absolute -top-2.5 left-2.5 bg-white hover:underline"
        >
          {completeUrl} - {label}
        </a>
      )}
    </div>
  );
};

export default FloatLabel;
