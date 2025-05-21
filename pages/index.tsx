// Updated layout to match compact inline card design
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

const posts = [
  {
    id: 1,
    name: "Adrien Stone",
    text: "If you're offered a seat on a rocket ship, don't ask what seat. Just get on.",
    avatar: "/next.svg",
    image: "/car.avif",
    date: "17 Nov",
  },
  {
    id: 2,
    name: "Bernard Nolan",
    text: "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.",
    avatar: "/next.svg",
    image: "/car.avif",
    date: "18 Nov",
  },
  {
    id: 3,
    name: "Andrea Ann Labranche",
    text: "We must believe that we are gifted for something...",
    avatar: "/next.svg",
    image: "/car.avif",
    date: "19 Nov",
  },
];

const Dashboard: NextPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("isLoggedIn");
      if (loggedIn !== "true") {
        router.push("/login");
      }
    }
  }, []);
  
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };
  

  return (
    <div className="min-h-screen bg-[#2A2E33] text-white p-4 pb-24">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">City News</h1>
        <button
          onClick={handleLogout}
          className="bg-[#a451f3] text-white px-4 py-2 rounded-lg hover:bg-[#923fdc] transition-colors">
          Logout
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-20">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white text-black rounded-xl shadow p-4 flex items-start gap-4">
            <div className="min-w-[80px] max-w-[100px] rounded-xl">
              <Image
                src={post.image}
                alt="news"
                width={100}
                height={80}
                className="object-cover w-full h-full -left-12 relative rounded-xl"
              />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">{post.date}</div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-[#2A2E33]">
                  {post.name}
                </span>
                <Image
                  src={post.avatar}
                  alt="avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <p className="text-[#3F3F3F] text-sm leading-snug">{post.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-4 right-4 bg-[#4286D7] hover:bg-[#45d24f] text-white px-6 py-4 rounded-full shadow-lg transition-colors">
        Post News
      </button>
    </div>
  );
};

export default Dashboard;
