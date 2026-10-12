// components/common/pagination.tsx

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

function getPageNumbers(currentPage: number, totalPages: number): (number | "...")[] {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
        return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
        return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const pageNumbers = getPageNumbers(currentPage, totalPages);

    return (
        <nav aria-label="Blog pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
            <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="cursor-pointer rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-primary-dark disabled:pointer-events-none disabled:opacity-50"
                aria-label="Previous page"
            >
                Previous
            </button>

            {pageNumbers.map((item, index) => {
                if (item === "...") {
                    return (
                        <span
                            key={`ellipsis-${index}`}
                            className="flex h-10 w-10 items-center justify-center text-muted-foreground select-none"
                        >
                            ...
                        </span>
                    );
                }

                const page = item;
                const isActive = currentPage === page;

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        aria-current={isActive ? "page" : undefined}
                        className={`h-10 w-10 cursor-pointer rounded-lg text-sm font-medium transition-all ${
                            isActive
                                ? "bg-primary text-white shadow-sm"
                                : "border border-border bg-surface hover:bg-accent hover:text-primary-dark"
                        }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="cursor-pointer rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-primary-dark disabled:pointer-events-none disabled:opacity-50"
                aria-label="Next page"
            >
                Next
            </button>
        </nav>
    );
}