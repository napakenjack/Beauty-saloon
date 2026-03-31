export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="pt-36 pb-16 bg-blush text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">{title}</h1>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
}
