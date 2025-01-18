import { Skeleton } from "../ui/skeleton";


const LoadingCard = () => {
    // console.log("LoadingCard is rendering--->");
  return (
    <>
      <SkeletonCardSlide />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 
    xl:grid-cols-4 gap-8 mt-5">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />        
    </div>
      </>
  )
}
export const LoadingCardFavorite = () => {
    
  return (
    <>
      
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 
    xl:grid-cols-4 gap-8 mt-5">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />        
    </div>
      </>
  )
}
export const SkeletonCard =()=>{
    return (
    <div>
    <Skeleton className="h-[300px] rounded-md mb-2"/>
    <Skeleton className="h-5 w-3/4 rounded-md mb-2"/>
    <Skeleton className="h-5 w-1/2 rounded-md mb-2"/>
    <Skeleton className="h-5 w-1/4 rounded-md mb"/>
    </div>
    )
}
export const SkeletonCardSlide =()=>{
    return (
    <div>
    <Skeleton className="w-full h-[600px] rounded-md mb-2"/>
    <Skeleton className="h-12 w-full rounded-md mb-2"/>
     </div>
    )
}



export default LoadingCard