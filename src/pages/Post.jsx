import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id || post.userId === userData.userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deleteFile(post.featuredImage)
            .then((status) => {
                if (status) {
                    appwriteService.deletePost(post.$id)
                        .then((status) => {
                            if (status) {
                                navigate("/")
                            }
                        })
                }
            })
    }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="flex">
                    <div className="w-full flex justify-center mb-4 mr-7 relative border rounded-xl p-2">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl"
                        />

                        {isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="browser-css bg-blue-100 p-5 rounded-md h-fit">
                            {parse(post.content)}
                        </div>
                        <div className="w-full mb-6 flex flex-col">
                            <h1 className="text-2xl font-bold">{post.title}</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}