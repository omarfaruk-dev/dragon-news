import { FaStar } from "react-icons/fa";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        image_url,
        details,
        rating,
        total_view,
    } = news;

    return (
        <div className="bg-white shadow rounded-lg mb-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 bg-base-300 p-5 rounded-tr-md rounded-tl-md">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-gray-800">{author.name}</h2>
                        <p className="text-sm text-gray-500">
                            {format(new Date(author.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-accent">
                    <FaRegBookmark size={20} className="cursor-pointer" />
                    <FaShareAlt size={20} className="cursor-pointer" />
                </div>
            </div>

            <div className="px-5 pb-5">
                {/* Title */}
                <h1 className="font-bold text-[20px] mb-3 text-gray-800">{title}</h1>

                {/* Image */}
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-80 object-cover rounded-md mb-4"
                /> 

                <p className="text-gray-700 text-base">
                    {details.slice(0, 220)}...{" "}
                    <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer ">
                        Read More
                    </Link>
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1 text-orange-500">
                        {[...Array(5)].map((_, idx) => (
                            <FaStar size={20}
                                key={idx}
                                className={idx < rating.number ? "text-orange-500" : "text-accent"}
                            />
                        ))}
                        <span className="ml-2 text-accent font-medium">{rating.number}</span>
                    </div>
                    <div className="flex items-center text-accent">
                        <FaEye className="mr-2" />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
