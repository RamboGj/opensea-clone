import Link from "next/link"
import { useRouter } from "next/router"

export default function Collection() {
    const router = useRouter()

   return(
    <div>
        <Link href="/">
            {router.query.collectionId}
        </Link>
    </div>
   ) 
}