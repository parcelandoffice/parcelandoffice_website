const Eyebrow = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <span className="inline-block h-px w-6 bg-accent" />
            {children}
        </span>
    );
};

export default Eyebrow;