interface PaginationProps {
    postsPerPage: number, 
    length: number, 
    onPageChange: (pageNumber: number) => void
}

export default PaginationProps;