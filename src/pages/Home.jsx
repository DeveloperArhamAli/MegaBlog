import { useEffect, useState } from "react"
import appwriteService from "../appwrite/config"
import { Container, PostCard } from "../components"
import { useSelector } from "react-redux"

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts()
        .then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    const userData = useSelector(state => state.auth.userData)
    
    if (userData) {
        if (posts.length > 0) {
            return (
                <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
            )
        } else if (posts.length === 0) {
            return (
                <div className="w-full py-8 mt-4 text-center">
                    <Container>
                        <div className="flex flex-wrap">
                            <div className="p-2 w-full">
                                <h1 className="text-2xl font-bold">No Posts Found</h1>
                            </div>
                        </div>
                    </Container>
                </div>
            )
        }
    } else if (!userData) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold">Please login to view posts</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
export default Home