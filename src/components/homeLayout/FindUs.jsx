import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {

    return (
        <div className="join join-vertical w-full">
            <h2 className="font-bold mb-3">Find Us On</h2>
            <button className="btn bg-base-100 justify-start py-6 join-item"><FaFacebookF className="text-blue-600 text-xl" /> Facebook</button>
            <button className="btn bg-base-100 justify-start py-6 join-item"><FaTwitter className="text-sky-500 text-xl" /> Twitter</button>
            <button className="btn bg-base-100 justify-start py-6 join-item"><FaInstagram className="text-pink-500 text-xl" /> Instagram</button>
        </div>
    );
};

export default FindUs;
