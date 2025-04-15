import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "By spite about do of allow",
      date: "April 28, 2023",
      excerpt:
        "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos...",
      image: "/placeholder.svg?height=250&width=400",
      slug: "by-spite-about-do-of-allow",
    },
    {
      id: 2,
      title: "By spite about do of allow",
      date: "April 28, 2023",
      excerpt:
        "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos...",
      image: "/placeholder.svg?height=250&width=400",
      slug: "by-spite-about-do-of-allow-2",
    },
    {
      id: 3,
      title: "By spite about do of allow",
      date: "April 28, 2023",
      excerpt:
        "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos...",
      image: "/placeholder.svg?height=250&width=400",
      slug: "by-spite-about-do-of-allow-3",
    },
    {
      id: 4,
      title: "By spite about do of allow",
      date: "April 28, 2023",
      excerpt:
        "Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos...",
      image: "/placeholder.svg?height=250&width=400",
      slug: "by-spite-about-do-of-allow-4",
    },
  ];

  return (
    <div className="card-inner bg-gray-50 py-16" id="blog-card">
      <div className="card-wrap max-w-6xl mx-auto px-4">
        <div className="content blog">
          <h2 className="section-title">Blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="blog-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white p-4">Read More</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-lg font-medium hover:text-primary block mb-2"
                  >
                    {post.title}
                  </Link>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination flex justify-center mt-10">
            <nav className="inline-flex">
              <span className="px-4 py-2 rounded-l-md bg-primary text-white">
                1
              </span>
              <Link href="#" className="px-4 py-2 bg-white hover:bg-gray-100">
                2
              </Link>
              <Link
                href="#"
                className="px-4 py-2 rounded-r-md bg-white hover:bg-gray-100"
              >
                Next
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
