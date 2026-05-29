export default function SectionContainer({ children, className = '', id }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-xl">
        {children}
      </div>
    </section>
  );
}
