interface PaginationProps {
    postsPerPage: number, 
    length: number, 
    onPageChange: (pageNumber: number) => void,
    currentPageExternal: number
}

export default PaginationProps;