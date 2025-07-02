import React from "react";

const BlogLink = () => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Open external URL in a new tab/window
    window.open('https://www.linkedin.com/company/immergixthefuture/', '_blank');
  };

  return (
    <a href="https://www.linkedin.com/company/immergixthefuture/" onClick={handleClick}>
      Blog
    </a>
  );
};

export default BlogLink;
