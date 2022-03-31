import React from "react";
import { useEffect, useState } from "react";

// UseEffect có 3 trường hợp :
// 1.useEffect(callback) => ít dùng
// -- Gọi callback mỗi khi component re-render
// -- Gọi callback sau khi component thêm element vào DOM
// 2.useEffect (callback,[])
// -- chỉ gọi callback 1 lần sau khi mounted
// 3.useEffect(callback,[dependency])
// -- Callback sẽ được gọi mỗi khi dependency thay đổi
// --------------------------------
// 1.Callback luôn được gọi sau khi component mounted
// ----------------------------------------------
// Thay thế cho 3 pha
// ----------------------------------------------
// Cleanup Function luôn được gọi trước khi component unmounted
// Cleanup Function luôn được gọi trước khi callback được gọi (trừ lần mounted)

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    console.log("title change");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  // useEffect with DOM events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        //Show
        setShowGoToTop(true);
      } else {
        // Hide
        setShowGoToTop(false);
      }

      window.addEventListener("scroll", handleScroll);
      // Clean up Function = pha willUnmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button key={tab} style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}

      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>

      {showGoToTop && <button style={{ position: "fixed", bottom: 20, right: 20 }}>Go to Top</button>}
    </div>
  );
}

export default Content;
