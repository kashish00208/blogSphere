const BlogCard = ({ Tittle, Auther, metDesc,readMoreLink,Slug,Content}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-slate-600">{Tittle}</h2>
      <p className="text-gray-500 mt-2 font-bold">By {Auther}</p>
      <p className="text-gray-700 mt-4">{metDesc}</p>
      <a href={"/blogpost/" + Slug} className="mt-4 inline-block bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-500">
        Read More
      </a>
    </div>
  );
};

export default BlogCard;

