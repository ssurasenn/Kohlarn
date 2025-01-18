'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "../ui/input"
import {  Suspense, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import LoadingCard from "../card/LoadingCard"

const Search = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [ search, setSearch ] = useState(searchParams.get('search')?.toString()|| '')
  
  const handleSearch = useDebouncedCallback((value:string)=>{
    const params = new URLSearchParams(searchParams)
    if(value) {
      params.set('search',value)
    } else {
      params.delete('search')
    } 
    replace(`/?${params.toString()}`)
  },500)
  // console.log(searchParams.get('search'))
   const queryParam = searchParams.get('query')

  useEffect(()=>{
    if(!queryParam){
      setSearch('')
    }
  },[queryParam])

  return (
    <Suspense fallback={<LoadingCard />}>
    <Input 
    type="text"
    placeholder="Search Landmark..."
    className="max-w-xs focus:border-gray-500"
    onChange={(e)=>{
      setSearch(e.target.value)
      handleSearch(e.target.value)
    }}
    value={search}
    />
    </Suspense>
  )
}
export default Search