import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  const posts = await prisma.post.findMany();

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900">
         This is the posts page that is server rendered
        </h1>
        <h3 className="text-gray-600 mt-2">
          It shows all the posts that have been created by the form in the client page
        </h3>
        <ul className="mt-8 space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-4 bg-white shadow-lg rounded-md text-black"
            >
              {post.text}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/client-page" className="text-blue-500 hover:underline">
            Go to create post page that is client rendered
          </Link>
        </div>
      </div>
    </div>
  );
}
