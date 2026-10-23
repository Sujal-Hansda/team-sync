import { useQuery } from "@tanstack/react-query"
import { getAllEmployee } from "../api/employeeApi"
import { useState } from "react"

export let useEmployee = ()=>
{
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState({
    search:"",
    role:"",
    department:"",
    status:"",
  })

  console.log(filters);
  

  let {data,isPending,isFetching}  = useQuery ({
    queryKey:['employees',page,filters],
    queryFn:()=>getAllEmployee({
      page,
      limit:20,
      search:filters.search,
      role:filters.role,
      department:filters.department,
      status:filters.status,

    }),
    staleTime:10000,
    keepPreviousData:true,
    placeholderData:(prev)=> prev,
  })
  const handlePageChange = (newPage)=>
  {
    if (newPage<1) return;
    if (newPage>data?.pagination?.totalPages) return;
    setPage(newPage);
  }
  const handleSearchFilter = (name,value)=>
  {
    setPage(1);
    setFilters({...filters,[name]:value})
  }

  return {
    isPending,data,
    handlePageChange,
    isFetching,
    handleSearchFilter,
    filters,

  }
}